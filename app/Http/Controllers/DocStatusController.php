<?php

namespace App\Http\Controllers;

use App\Document;
use Illuminate\Http\Request;

use App\Comment;
use App\User;
use App\DocStatus;
use Carbon\Carbon;
use Auth;

class DocStatusController extends Controller
{
	public function index()
    {
        return DocStatus::orderBy('date','asc')->orderby('created_at','asc')->get();
    }

    public function status($id)
    {
        $docstatus = DocStatus::where('document_id',$id)->orderby('created_at','asc')->get();
        return response()->json($docstatus);
    }

    public function updatedocstatus(Request $request, document $document)
    {        

    	$id = $request->input('id');
    	$current = Carbon::now();
        $user = Auth::user();

        $document = Document::find($id);
        $inputStatusDoc = $request->all();

        $inputstatus['document_id'] = $id;
        if ($user->position_id == 2) {
        	$inputstatus['value'] = 'Checked';
            $inputStatusDoc['status'] = 'Checked';
        } elseif ($user->position_id == 3) {
        	$inputstatus['value'] = 'Approved';
            $inputStatusDoc['status'] = 'Approved';        	
        } elseif ($user->position_id == 4) {
            $inputstatus['value'] = 'Approved';
            $inputStatusDoc['status'] = 'Approved';         
        } else{
            $inputstatus['value'] = 'Checked';     
            $inputStatusDoc['status'] = 'Checked';       
        }
        $inputstatus['details'] = $user->name;
        $inputstatus['date'] = $current;

        DocStatus::create($inputstatus);

        $document->update($inputStatusDoc);

        // if (!empty($user->parent_id)) {
        //     $user->parent->notify(new \App\Notifications\StatusDocument($document));            
        // }         

        // $id = $request->input('document_id');
        // $document = Document::where('id',$id)->first();

        $user_id = $request->input('user_id');

        $user = User::find($user_id);

        // $user = Auth::user();
        // if (!empty($user->parent_id)) {
            $user->notify(new \App\Notifications\ApprovedDocument($document));
        // }   

        // $request->validate([
        //     'body'=>'required',
        // ]);
   
        $input = $request->all();
        $input['user_id'] = Auth::user()->id;
    
        Comment::create($input);

        
        return redirect('/')
                        ->with('success','submit successfully.');

    }

}