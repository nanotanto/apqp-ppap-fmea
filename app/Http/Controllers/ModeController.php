<?php

namespace App\Http\Controllers;

use App\Mode;
use App\Process;
use Illuminate\Http\Request;
use Auth;

class ModeController extends Controller
{
    // public function index(){
    //     $data = Mode::all();
    //     return response()->json($data);
    // }

    public function index($id){
        $data = Process::select('fmea_modes.*')
            ->Join('fmea_steps', 'fmea_steps.process_id', '=', 'fmea_processes.id')
            ->Join('fmea_modes', 'fmea_modes.step_id', '=', 'fmea_steps.id')
            ->orderBy('fmea_steps.id','asc')
            ->where('fmea_processes.product_id',$id)
            ->where('fmea_modes.deleted_at',null)
            ->get();
        return response()->json($data);
    }

    public function show($id){
        $data = Mode::where("step_id",$id)->get();
        return response()->json($data);
    }

    public function view($id){
        $data = Mode::findOrFail($id);
        return response()->json($data);
    }

    public function save(Request $request)
    {
        // Mode::create($request->all());
        $user = Auth::user();
        $input = $request->all();
        $input['user_id'] = $user->id;
        Mode::create($input);
    }

    public function update(Request $request, $id){
        $user = Auth::user(); 
        $data = Mode::findOrFail($id);
        $data->fill($request->all());
        $data->user_id = $user->id;
        $data->save();
    }

    public function delete(Request $request, $id){
        // $data = Mode::find($id);
        // $data->delete();

        $user = Auth::user(); 
        $data = Mode::findOrFail($id);
        if ($data->user_id == $user->id) {
            $data->delete();
        }
    }

    public function indexAll($id){
        $data = Process::select(
            'fmea_processes.name as item',
            'fmea_steps.name as step',
            'fmea_modes.id as id',
            'fmea_modes.name as mode',
            'fmea_modes.category as category',
            'fmea_modes.effect_in as in',
            'fmea_modes.effect_next as next',
            'fmea_modes.effect_end as end',
            'fmea_modes.s as s'
            )->Join('fmea_steps', 'fmea_steps.process_id', '=', 'fmea_processes.id')
            ->Join('fmea_modes', 'fmea_modes.step_id', '=', 'fmea_steps.id')
            ->orderBy('fmea_steps.id','asc')
            // ->orderBy('s','desc')
            ->where('fmea_processes.product_id',$id)
            ->where('fmea_modes.deleted_at',null)
            ->get();
        return response()->json($data);
    }

}
