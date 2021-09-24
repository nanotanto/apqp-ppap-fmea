<?php

namespace App\Http\Controllers;

use App\Action;
use Illuminate\Http\Request;
use Auth;


class ActionController extends Controller
{
    public function index(){
        $data = Action::all();
        return response()->json($data);
    }

    public function view($id){
        $data = Action::findOrFail($id);
        return response()->json($data);
    }

    public function show($id){
        $data = Action::where("current_id",$id)->get();
        return response()->json($data);
    }

    public function save(Request $request)
    {
        //$data = Action::create($request->all());
        $user = Auth::user();
        $data = new Action();
        $data->fill($request->all());

        if ($request->input("target_date") == "") {            
            $data->target_date = null;
            $data->user_id = $user->id;
        }else{
            $data->target_date = $request->input("target_date");
            $data->user_id = $user->id;
        }

        if ($request->input("finish_date") == "") {            
            $data->finish_date = null;
            $data->user_id = $user->id;
        }else{
            $data->finish_date = $request->input("finish_date");
            $data->user_id = $user->id;
        }

        $data->save();
    }

    public function update(Request $request, $id){
        $user = Auth::user();
        $data = Action::findOrFail($id);
        $data->fill($request->all());

        if ($request->input("target_date") == "") {            
            $data->target_date = null;
            $data->user_id = $user->id;
        }else{
            $data->target_date = $request->input("target_date");
            $data->user_id = $user->id;
        }

        if ($request->input("finish_date") == "") {            
            $data->finish_date = null;
            $data->user_id = $user->id;
        }else{
            $data->finish_date = $request->input("finish_date");
            $data->user_id = $user->id;
        }

        $data->save();
    }

    public function delete(Request $request, $id){
        // $data = Action::find($id);
        // $data->delete();

        $user = Auth::user(); 
        $data = Action::findOrFail($id);
        if ($data->user_id == $user->id) {
            $data->delete();
        }
    }
}
