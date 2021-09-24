<?php


namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\DocumentUser;

class DocumentUserController extends Controller
{
    //
    public function index()
    {
        // return DocumentUser::with('document','user')->get();
        return DocumentUser::select('id','document_id','user_id','due_date')->get();
    }

    public function get($document_id)
    {
        return DocumentUser::with('document')->where("document_id",$document_id)->get();
    }
 
    public function show($id)
    {
        return DocumentUser::find($id);
    }

    public function store(Request $request)
    {
        return DocumentUser::create($request->all());
    }

    public function update(Request $request, $id)
    {
        $DocumentUser = DocumentUser::findOrFail($id);
        $DocumentUser->update($request->all());

        return $DocumentUser;
    }

    public function delete(Request $request, $id)
    {
        $DocumentUser = DocumentUser::findOrFail($id);
        $DocumentUser->delete();

        return 204;
    }
}
