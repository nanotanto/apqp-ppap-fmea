<?php

namespace App\Http\Controllers;

use App\Step;
use Illuminate\Http\Request;
use Auth;

class StepController extends Controller
{
    public function index(){
        $data = Step::all();
        return response()->json($data);
    }
    
    public function view($id){
        $data = Step::findOrFail($id);
        return response()->json($data);
    }

    public function show($id){
        $data = Step::where("process_id",$id)->with('process')->get();
        return response()->json($data);
    }

    public function save(Request $request)
    {
        // Step::create($request->all());
        $user = Auth::user();
        $input = $request->all();
        $input['user_id'] = $user->id;
        Step::create($input);
    }

    public function update(Request $request, $id){
        $user = Auth::user();
        $data = Step::findOrFail($id);
        $data->fill($request->all());
        $data->user_id = $user->id;
        $data->save();
    }

    public function delete(Request $request, $id){
        // $data = Step::find($id);
        // $data->delete();

        $user = Auth::user(); 
        $data = Step::findOrFail($id);
        if ($data->user_id == $user->id) {
            $data->delete();
        }  
    }

    public function process_steps(){
        $data = Step::with('process')->orderBy('process_id','asc')->get();
        return response()->json($data);
    }

}
