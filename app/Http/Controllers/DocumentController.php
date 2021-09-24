<?php


namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Document;
use App\DocStatus;
use App\DocumentUser;
use App\User;
use App\Part;
use DB;
use Auth;

class DocumentController extends Controller
{
    //
    public function index()
    {
        // return Document::with('part')->get();
        return Document::orderBy('category_id','asc')->get();
    }

    public function get($part_id)
    {
        $user = Auth::user()->company_id;

        $Document = DB::table('parts')
            ->leftJoin('documents', 'parts.id', '=', 'documents.part_id')
            ->where("part_id",$part_id)
            ->where("division_id",$user)
            ->where('documents.deleted_at',null)
            ->get();

        // $Document = Document::where("part_id",$part_id)
        //         ->with(array('part' => function($query) {
        //             $query->select('id','division_id');
        //         }))
        //         ->get();

        return $Document;
    }

    public function view_approval(Document $document)
    {
        $doc_checks = DocStatus::where('document_id',$document->id)->where('value','Checked')->get();
        $doc_approves = DocStatus::where('document_id',$document->id)->where('value','Approved')->get();

        return view('documents.view',compact(array('document','doc_checks','doc_approves')));
    }
 
    public function view($id)
    {
        return Document::find($id);
    }

    public function store(Request $request)
    {
        $user = Auth::user();

        $input = $request->all();
        $input['id'] = $request->input('id');
        $fileName = date("Y_m_d_h",time()).'_'.$request->input('file');
        $input['file'] = $fileName;
        $input['user_id'] = $user->id;

        $document = Document::create($input);

        // $user = Auth::user();
        // if (!empty($user->parent_id)) {
        //     $user->parent->notify(new \App\Notifications\StatusDocument($document));
        // }        

        $inputstatus['document_id'] = $input['id'];
        $inputstatus['value'] = 'Issued';
        $inputstatus['details'] = $user->name;
        // $inputstatus['details'] = 'Creator';
        $inputstatus['date'] = $document->created_at;

        DocStatus::create($inputstatus);

        return 201;

    }
    
    
    public function update(Request $request, $id)
    {
        $user = Auth::user();        
        $Document = Document::findOrFail($id);

        if ($Document->user_id == $user->id) {
            $Document->update($request->all());
        }        

        return $Document;
    }

    public function delete(Request $request, $id)
    {
        $user = Auth::user(); 
        $Document = Document::findOrFail($id);
        if ($Document->user_id == $user->id) {
            $Document->delete();
        }   
        

        return 204;
    }

    public function destroy($id)
    {
        $user = Auth::user(); 
        $Document = Document::findOrFail($id);
        if ($Document->user_id == $user->id) {
            $Document->delete();
        }   
        

        return 204;

    }

    public function submitDoc(Request $request, $id)
    {

        $users = User::join('document_users','users.id','document_users.user_id')
                    ->select('users.id as id', 'users.name as name', 'users.email as email', 'document_users.document_id as document_id')
                    ->where('document_users.document_id',$id)
                    ->get();

        $document = Document::find($id);
        $input = $request->all();
        $input['status'] = 'Send';
        $document->update($input);

            foreach ($users as $user) {
                $user->notify(new \App\Notifications\StatusDocument($document));  
        }



    }

    public function show(Document $document)
    {
        return view('documents.show',compact('document'));
    }

    public function save(Request $request)
    {
        $user = Auth::user();

        $input = $request->all();
        $input['id'] = $request->input('id');
        $fileName = date("Y_m_d_h",time()).'_'.$request->input('file');
        $input['file'] = $fileName;
        $input['user_id'] = $user->id;

        $document = Document::create($input);

        // $user = Auth::user();
        // if (!empty($user->parent_id)) {
        //     $user->parent->notify(new \App\Notifications\StatusDocument($document));
        // }        

        $inputstatus['document_id'] = $input['id'];
        $inputstatus['value'] = 'Issued';
        $inputstatus['details'] = $user->name;
        // $inputstatus['details'] = 'Creator';
        $inputstatus['date'] = $document->created_at;

        DocStatus::create($inputstatus);

        return 201;

    }
}
