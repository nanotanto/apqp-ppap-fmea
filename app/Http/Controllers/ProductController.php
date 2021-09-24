<?php

namespace App\Http\Controllers;

use App\Product;
use Illuminate\Http\Request;
use Auth;
use App\User;

class ProductController extends Controller
{
    public function index(){
        $user = Auth::user();

        if ($user->company_id > 0) {
            $data = Product::where('division_id',$user->company_id)->get();
            return response()->json($data);
        } else {
            $data = Product::all();
            return response()->json($data);
        }
        

        
    }

    public function show($id){
        $data = Product::where("id",$id)->get();
        return response()->json($data);
    }

    public function save(Request $request)
    {
        $user = Auth::user();
        $input = $request->all();
        $input['user_id'] = $user->id;

        Product::create($input);
    }

    public function newFmea(){
        $data = Product::latest()->first();
        return response()->json($data);
    }

    public function update(Request $request, $id){
        $user = Auth::user(); 
        $data = Product::findOrFail($id);
        $data->fill($request->all());

        if ($request->input("revision_date") == "") {            
            $data->revision_date = null;
            $data->user_id = $user->id;
        }else{
            $data->revision_date = $request->input("revision_date");
            $data->user_id = $user->id;
        }
        $data->save();
    }

    public function delete(Request $request, $id){
        $user = Auth::user(); 
        $data = Product::findOrFail($id);
        if ($data->user_id == $user->id) {
            $data->delete();
        }   
        

        return 204;
        
        // $data = Product::find($id);
        // $data->delete();
    }

}
