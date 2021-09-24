<?php

namespace App\Http\Controllers;

use App\Fp4Form;
use Illuminate\Http\Request;

use App\Fp4Status;
use Carbon\Carbon;
use Auth;

class Fp4StatusController extends Controller
{
	public function status($id)
    {
        $fp4status = Fp4Status::where('fp4_form_id',$id)->get();
        return response()->json($fp4status);
    }

    public function updatefp4status(Request $request, fp4form $fp4form)
    {        
    	$id = $request->input('id');
    	$current = Carbon::now();
        $user = Auth::user();

        $inputstatus['fp4_form_id'] = $id;
        if ($user->position_id == 3) {
        	$inputstatus['value'] = 'Checked';
        } elseif ($user->position_id == 4) {
        	$inputstatus['value'] = 'Approved';        	
        }         
        $inputstatus['details'] = $user->name;
        $inputstatus['date'] = $current;

        Fp4Status::create($inputstatus);

        $fp4form = Fp4Form::find($id);

        if (!empty($user->parent_id)) {
            $user->parent->notify(new \App\Notifications\FormRequest($fp4form));
        }         

        
        return redirect('/#!/top/fp4_form')
                        ->with('success','Form submit successfully.');

    }

}