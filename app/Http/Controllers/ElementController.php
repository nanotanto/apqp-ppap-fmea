<?php

namespace App\Http\Controllers;

use App\Element;
use Illuminate\Http\Request;
use Auth;

class ElementController extends Controller
{
    public function index(){
        $data = Element::all();
        return response()->json($data);
    }
        
    public function show($id){
        $data = Element::where("step_id",$id)->get();
        return response()->json($data);
    }

    public function save(Request $request)
    {
        // Element::create($request->all());
        $user = Auth::user();
        $input = $request->all();
        $input['user_id'] = $user->id;
        Element::create($input);
    }
    

    public function update(Request $request, $id){
        $user = Auth::user(); 
        $data = Element::findOrFail($id);
        $data->fill($request->all());
        $data->user_id = $user->id;
        $data->save();
    }

    public function delete(Request $request, $id){
        // $data = Element::find($id);
        // $data->delete();

        $user = Auth::user(); 
        $data = Element::findOrFail($id);
        if ($data->user_id == $user->id) {
            $data->delete();
        }
    }
}
