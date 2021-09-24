<?php

namespace App\Http\Controllers;

use App\Position;
use Illuminate\Http\Request;

class PositionController extends Controller
{ 
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    function __construct()
    {
         $this->middleware('permission:position-list|position-create|position-edit|position-delete', ['only' => ['index','show']]);
         $this->middleware('permission:position-create', ['only' => ['create','store']]);
         $this->middleware('permission:position-edit', ['only' => ['edit','update']]);
         $this->middleware('permission:position-delete', ['only' => ['destroy']]);
    }
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $positions = position::latest()->paginate(5);
        return view('positions.index',compact('positions'))
            ->with('i', (request()->input('page', 1) - 1) * 5);
    }
    
    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return view('positions.create');
    }
    
    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        request()->validate([
            'name' => 'required',
        ]);
    
        $position = position::create($request->all());

        return redirect()->route('positions.index')
                        ->with('success','position created successfully.');
    }
    
    /**
     * Display the specified resource.
     *
     * @param  \App\position $position
     * @return \Illuminate\Http\Response
     */
    public function show(position $position)
    {
        return view('positions.show',compact('position'));
    }
    
    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\position $position
     * @return \Illuminate\Http\Response
     */
    public function edit(position $position)
    {
        return view('positions.edit',compact('position'));
    }
    
    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\position $position
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, position $position)
    {
         request()->validate([
            'name' => 'required',
        ]);
    
        $position->update($request->all());
    
        return redirect()->route('positions.index')
                        ->with('success','position updated successfully');
    }
    
    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\position $position
     * @return \Illuminate\Http\Response
     */
    public function destroy(position $position)
    {
        $position->delete();
    
        return redirect()->route('positions.index')
                        ->with('success','position deleted successfully');
    }
}
