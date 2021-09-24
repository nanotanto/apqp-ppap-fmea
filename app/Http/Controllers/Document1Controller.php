<?php

namespace App\Http\Controllers;

use App\Document;
use App\DocStatus;
use Illuminate\Http\Request;

use File;

use Auth;
use App\User;

class DocumentController extends Controller
{ 
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    function __construct()
    {
         $this->middleware('permission:document-list|document-create|document-edit|document-delete', ['only' => ['index','show']]);
         $this->middleware('permission:document-create', ['only' => ['create','store', 'revised']]);
         $this->middleware('permission:document-edit', ['only' => ['edit','update', 'revised']]);
         $this->middleware('permission:document-delete', ['only' => ['destroy']]);
    }
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $documents = Document::latest()->paginate(5);
        return view('documents.index',compact('documents'))
            ->with('i', (request()->input('page', 1) - 1) * 5);
    }
    
    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return view('documents.create');
    }
    
    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        request()->validate([
            'name' => 'required',
            'no' => 'required',
            'file1' => 'image|mimes:jpeg,png,jpg|max:2048',
            'file2' => 'image|mimes:jpeg,png,jpg|max:2048'
        ]);
        
        $input = $request->all();

        if(!empty($input['file1'])){ 
            $fileName1 = time().'.'.$request->file1->getClientOriginalName();
            $request->file1->move(public_path('uploads'), $fileName1);
            $input['file1'] = $fileName1;
        }else{
            $input['file1'] = "";    
        }

        if(!empty($input['file2'])){ 
            $fileName2 = time().'.'.$request->file2->getClientOriginalName();
            $request->file2->move(public_path('uploads'), $fileName2);
            $input['file2'] = $fileName2;
        }else{
            $input['file2'] = "";    
        }
        
        $user = Auth::user();
        $input['user_id'] = $user->id;

        $document = Document::create($input);
        
        $user->parent->notify(new \App\Notifications\StatusDocument($document));
        
        return redirect()->route('documents.index')
                        ->with('success','Document created successfully.');
    }
    
    /**
     * Display the specified resource.
     *
     * @param  \App\Document $document
     * @return \Illuminate\Http\Response
     */
    public function show(Document $document)
    {
        return view('documents.show',compact('document'));
    }
    
    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Document $document
     * @return \Illuminate\Http\Response
     */
    public function edit(Document $document)
    {
        return view('documents.edit',compact('document'));
    }
    
    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Document $document
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Document $document)
    {
         request()->validate([
            'name' => 'required',
            'no' => 'required',
            'file1' => 'image|mimes:jpeg,png,jpg|max:2048',
            'file2' => 'image|mimes:jpeg,png,jpg|max:2048'
        ]);               

        $input = $request->all();           
        
        if(!empty($input['file1'])){ 
            $fileName1 = time().'.'.$request->file1->getClientOriginalName();
            $request->file1->move(public_path('uploads'), $fileName1);
            $input['file1'] = $fileName1;
        }else{
            $input['file1'] = "";    
        }

        if(!empty($input['file2'])){ 
            $fileName2 = time().'.'.$request->file2->getClientOriginalName();
            $request->file2->move(public_path('uploads'), $fileName2);
            $input['file2'] = $fileName2;
        }else{
            $input['file2'] = "";    
        }
    
        $document->update($input);
    
        $user = Auth::user();
        if (!empty($user->parent_id)) {
            $user->parent->notify(new \App\Notifications\StatusDocument($document));
        }        
        

        return redirect()->route('documents.index')
                        ->with('success','Document updated successfully');
    }
    
    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Document $document
     * @return \Illuminate\Http\Response
     */
    public function destroy(Document $document)
    {
        // dd($document->file1);

        if(File::exists(public_path('uploads/'.$document->file1))){
            File::delete(public_path('uploads/'.$document->file1));
        }else{
            dd('File does not exists.');
        }

        if(File::exists(public_path('uploads/'.$document->file2))){
            File::delete(public_path('uploads/'.$document->file2));
        }else{
            dd('File does not exists.');
        }

        $document->delete();
    
        return redirect()->route('documents.index')
                        ->with('success','Document deleted successfully');
    }

    public function submit(Request $request, Document $document)
    {
        $id = $request->input('id');
        $document = Document::where('id',$id)->first();

        $user = Auth::user();
        if (!empty($user->parent_id)) {
            $user->parent->notify(new \App\Notifications\StatusDocument($document));
        }        
        
    
        return redirect('/')
                        ->with('success','Document submit successfully');
    }

    public function revised(Request $request, Document $document)
    {
        $id = $request->input('doc_id');
        $document = Document::where('id',$id)->first();

        $user_id = $request->input('user_id');

        $user = User::where('email', $user_id)->first();

        // $user = Auth::user();
        // if (!empty($user->parent_id)) {
            $user->notify(new \App\Notifications\StatusDocument($document));
        // }        
        
    
        return redirect()->route('documents.index')
                        ->with('success','Document submit successfully');
    }

    public function all()
    {
        $document = Document::select('id','no','name','no_rev','date','department_id')
                    ->with('department')
                    ->get();
        return response()->json($document);
    }

    public function draft()
    {
        $document = Document::where('status',NULL)->select('id','no','name','no_rev','date','department_id')->get();
        return response()->json($document);
    }

    public function publish()
    {
        $document = Document::where('status',1)->select('id','no','name','no_rev','date','department_id')->get();
        return response()->json($document);
    }

    public function select($id)
    {
        $document = Document::where('fp4form_id',$id)->select('id','no','name','no_rev','date','department_id')->get();
        return response()->json($document);
    }

    public function view(Document $document)
    {
        return view('documents.view',compact('document'));
    }

    public function upload(Request $request){
        $fileName=$request->file('file')->getClientOriginalName();
        $path=$request->file('file')->storeAs('uploads', $fileName, 'public');
        return response()->json(['location'=>"/storage/$path"]); 
        
        /*$imgpath = request()->file('file')->store('uploads', 'public'); 
        return response()->json(['location' => "/storage/$imgpath"]);*/
    }

    public function save(Request $request){
        $input = $request->all();
       
        $user = Auth::user();
        $input['user_id'] = $user->id;

        $document = Document::create($input);

        // $document = Document::create($request->all());

        $inputstatus['document_id'] = $document->id;
        $inputstatus['value'] = 'Issued';
        $inputstatus['details'] = $user->name;
        $inputstatus['date'] = $document->created_at;

        DocStatus::create($inputstatus);


        $user->parent->notify(new \App\Notifications\StatusDocument($document));

        return redirect('/admin#!/top/draft')
                        ->with('success','Document created successfully.');
    }
}
