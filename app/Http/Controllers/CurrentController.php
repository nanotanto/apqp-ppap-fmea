<?php

namespace App\Http\Controllers;

use App\Current;
use App\Process;
use Illuminate\Http\Request;
use Auth;


class CurrentController extends Controller
{
    public function index(){
        $data = Current::all();
        return response()->json($data);
    }

    public function view($id){
        $data = Current::findOrFail($id);
        return response()->json($data);
    }

    public function show($id){
        $data = Current::where("mode_id",$id)->get();
        return response()->json($data);
    }

    public function save(Request $request)
    {
        // Current::create($request->all());
        $user = Auth::user();
        $input = $request->all();
        $input['user_id'] = $user->id;
        Current::create($input);
    }

    public function update(Request $request, $id){
        $user = Auth::user(); 
        $data = Current::findOrFail($id);
        $data->fill($request->all());
        $data->user_id = $user->id;
        $data->save();
    }

    public function delete(Request $request, $id){
        // $data = Current::find($id);
        // $data->delete();

        $user = Auth::user(); 
        $data = Current::findOrFail($id);
        if ($data->user_id == $user->id) {
            $data->delete();
        }
    }

    public function indexAll($id){
        $data = Process::select(
            'fmea_processes.name as item',
            'fmea_steps.name as step',
            'fmea_modes.id as mode_id',
            'fmea_modes.name as mode',
            'fmea_modes.category as category',
            'fmea_modes.effect_in as in',
            'fmea_modes.effect_next as next',
            'fmea_modes.effect_end as end',
            'fmea_modes.s as s',
            'fmea_currents.id as id',
            'fmea_currents.element as element',
            'fmea_currents.cause as cause',
            'fmea_currents.prevention as prevention',
            'fmea_currents.o as o',
            'fmea_currents.detection as detection',
            'fmea_currents.d as d',
            'fmea_currents.ap as ap',
            'fmea_currents.sc as sc'
            )->Join('fmea_steps', 'fmea_steps.process_id', '=', 'fmea_processes.id')
            ->Join('fmea_modes', 'fmea_modes.step_id', '=', 'fmea_steps.id')
            ->Join('fmea_currents', 'fmea_currents.mode_id', '=', 'fmea_modes.id')
            ->orderBy('fmea_processes.id','asc')
            ->where('fmea_processes.product_id',$id)
            ->where('fmea_currents.deleted_at',null)
            ->get();
        return response()->json($data);
    }
}
