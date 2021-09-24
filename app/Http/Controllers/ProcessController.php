<?php

namespace App\Http\Controllers;

use App\Process;
use Illuminate\Http\Request;
use DB;
use Auth;

class ProcessController extends Controller
{
    public function index(){
        $data = Process::select('id')->get();
        return response()->json($data);
    }

    public function view($id){
        $data = Process::findOrFail($id);
        return response()->json($data);
    }

    public function show($id){
        $data = Process::where("product_id",$id)->get();
        return response()->json($data);
    }

    public function save(Request $request)
    { 
        // Process::create($request->all());
        $user = Auth::user();
        $input = $request->all();
        $input['user_id'] = $user->id;
        Process::create($input);
        
    }

    public function update(Request $request, $id){
        $user = Auth::user();
        $data = Process::findOrFail($id);
        $data->fill($request->all());
        $data->user_id = $user->id;
        $data->save();
    }

    public function delete(Request $request, $id){
        // $data = Process::find($id);
        // $data->delete();
        $user = Auth::user(); 
        $data = Process::findOrFail($id);
        if ($data->user_id == $user->id) {
            $data->delete();
        }  
    }

    public function process_steps($id){
        $data = Process::join('fmea_steps', 'fmea_steps.process_id', '=', 'fmea_processes.id')
        ->select('fmea_processes.name as process_id', 'fmea_steps.name as name', 'fmea_steps.id as id')
        ->where('product_id',$id)    
        ->where('.fmea_steps.deleted_at', null)    
        ->orderBy('process_id','asc')->get();
        return response()->json($data);
    }

    
}
