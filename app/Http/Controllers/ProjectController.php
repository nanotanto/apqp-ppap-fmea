<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Project;
use App\User;

class ProjectController extends Controller
{
    //
    public function index()
    {
        return Project::select("id","name","model","customer","file")->orderby("id",'asc')->get();
    }
 
    public function show($id)
    {
        return Project::find($id);
    }

    public function store(Request $request)
    {
        $input = $request->all();
        $fileName = date("Y_m_d_h",time()).'_'.$request->input('file');
        $input['file'] = $fileName;

        return Project::create($input);
    }

    public function update(Request $request, $id)
    {
        $project = Project::findOrFail($id);

        $input = $request->all();
        $fileName = date("Y_m_d_h",time()).'_'.$request->input('file');
        $input['file'] = $fileName;

        $project->update($input);

        return $project;
    }

    public function delete(Request $request, $id)
    {
        $project = Project::findOrFail($id);
        $project->delete();

        return 204;
    }

    public function submitProject(Request $request, $id)
    {

        $users = User::all();

        $project = Project::find($id);

            foreach ($users as $user) {
                $user->notify(new \App\Notifications\NewProject($project));  
            }
        return 201;
    }
}
