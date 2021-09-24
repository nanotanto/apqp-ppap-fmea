<?php

namespace App\Http\Controllers;

use App\DmsCategory;
use Illuminate\Http\Request;
use Auth;

class DmsCategoryController extends Controller
{
    public function index(){
        $data = DmsCategory::all();
        return response()->json($data);
    }
        
    public function show($id){
        // $data = DmsCategory::where("step_id",$id)->get();
        $data = DmsCategory::findOrFail($id);
        return response()->json($data);
    }

    public function store(Request $request)
    {
        DmsCategory::create($request->all());
    }
    

    public function update(Request $request, $id){
        $data = DmsCategory::findOrFail($id);
        $data->fill($request->all());
        $data->save();
    }

    public function delete(Request $request, $id){
        $data = DmsCategory::find($id);
        $data->delete();
    }
}
