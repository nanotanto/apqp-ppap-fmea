<?php


namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Part;
use Auth;
use App\User;

class PartController extends Controller
{
    //
    
    public function index()
    {
        return Part::with('project')->get();
    }

    public function get($project_id)
    {
        $user = Auth::user();

        if ($user->company_id > 0) {
            return Part::with('project')->where("project_id",$project_id)->where('division_id',$user->company_id)->get();
        } else {
            return Part::with('project')->where("project_id",$project_id)->get();
        }
        

    }
 
    public function show($id)
    {
        return Part::find($id);
    }

    public function store(Request $request)
    {
        $input = $request->all();
        $fileNameDrawing = date("Y_m_d_h",time()).'_'.$request->input('file_drawing');
        $fileNameRfq = date("Y_m_d_h",time()).'_'.$request->input('file_rfq');
        $fileNameSpk = date("Y_m_d_h",time()).'_'.$request->input('file_spk');
        $fileNamePqr = date("Y_m_d_h",time()).'_'.$request->input('file_pqr');
        $input['file_drawing'] = $fileNameDrawing;
        $input['file_rfq'] = $fileNameRfq;
        $input['file_spk'] = $fileNameSpk;
        $input['file_pqr'] = $fileNamePqr;

        return Part::create($input);
    }

    public function update(Request $request, $id)
    {
        $part = Part::findOrFail($id);
        $part->update($request->all());

        return $part;
    }

    public function delete(Request $request, $id)
    {
        $part = Part::findOrFail($id);
        $part->delete();

        return 204;
    }
}
