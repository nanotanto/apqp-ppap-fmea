<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use DB;
use App\Product;
use Auth;
use App\User;
use App\DocStatus;
use Carbon\Carbon;
use App\Comment;

class FMEAController extends Controller
{
    public function show($id){
        $datas =  Product::select(
                    'fmea_processes.name as process','fmea_processes.function as process_function','fmea_processes.function2 as process_function2','fmea_processes.function3 as process_function3',
                    'fmea_steps.name as step', 'fmea_steps.function as step_function',
                    'fmea_elements.man as man', 'fmea_elements.func_man as man_function',
                    'fmea_elements.machine as machine', 'fmea_elements.func_machine as machine_function',
                    'fmea_elements.material as material', 'fmea_elements.func_material as material_function',
                    'fmea_elements.method as method', 'fmea_elements.func_method as method_function',
                    'fmea_elements.measure as measure', 'fmea_elements.func_measure as measure_function',
                    'fmea_elements.enviro as enviro', 'fmea_elements.func_enviro as enviro_function',
                    'fmea_modes.name as failure','fmea_modes.category as category',
                    'fmea_modes.effect_in as effect_in','fmea_modes.effect_next as effect_next','fmea_modes.effect_end as effect_end',
                    'fmea_modes.s as s',
                    'fmea_currents.element as element', 
                    'fmea_currents.cause as cause', 
                    'fmea_currents.prevention as prevention', 
                    'fmea_currents.o as o', 
                    'fmea_currents.detection as detection', 
                    'fmea_currents.d as d', 
                    'fmea_currents.ap as ap', 
                    'fmea_currents.sc as sc',
                    'fmea_currents.filter as filter',
                    'fmea_actions.prevention as prevention_plan',
                    'fmea_actions.detection as detection_plan',
                    'fmea_actions.pic as pic',
                    'fmea_actions.target_date as target_date',
                    'fmea_actions.status as status',
                    'fmea_actions.prevention_act as prevention_act',
                    'fmea_actions.detection_act as detection_act',
                    'fmea_actions.finish_date as finish_date',
                    'fmea_actions.o as o2',
                    'fmea_actions.d as d2',
                    'fmea_actions.ap as ap2', 
                    'fmea_actions.sc as sc2',
                    'fmea_actions.action as action'
                )
                ->leftJoin('fmea_processes','fmea_processes.product_id','=','fmea_products.id')
                ->leftJoin('fmea_steps','fmea_steps.process_id','=','fmea_processes.id')
                ->leftJoin('fmea_elements','fmea_elements.step_id','=','fmea_steps.id')
                ->Join('fmea_modes','fmea_modes.step_id','=','fmea_steps.id')
                ->Join('fmea_currents','fmea_currents.mode_id','=','fmea_modes.id')
                ->leftJoin('fmea_actions','fmea_actions.current_id','=','fmea_currents.id')
                ->where('fmea_products.id',$id)
                ->get();
                
        $fmea = Product::where('id','=',$id)->first();    
        
        //return response()->json($data);

        return view('fmea.fmea-show',compact('datas','fmea'));
    }

    public function submitFMEA(Request $request, $id)
    {

        $users = User::join('document_users','users.id','document_users.user_id')
                    ->select('users.id as id', 'users.name as name', 'users.email as email', 'document_users.document_id as document_id')
                    ->where('document_users.document_id',$id)
                    ->get();

        $product = Product::find($id);
        $input = $request->all();
        $input['status'] = 'Send';
        $product->update($input);

            foreach ($users as $user) {
                $user->notify(new \App\Notifications\StatusFMEA($product));  
        } 

        $user = Auth::user();
        $inputstatus['document_id'] = $product->id;
        $inputstatus['value'] = 'Issued';
        $inputstatus['details'] = $user->name;
        $inputstatus['date'] = $product->created_at;
        DocStatus::create($inputstatus);
    }

    public function approve($id)
    {
        $product = Product::findOrFail($id);
        return view('fmea.fmea-approve', compact('product'));
    }

    public function updateStatusFMEA(Request $request, Product $product)
    {        

        $id = $request->input('id');
        $current = Carbon::now();
        $user = Auth::user();

        $product = Product::find($id);
        $inputStatusDoc = $request->all();

        $inputstatus['document_id'] = $id;
        if ($user->position_id == 2) {
            $inputstatus['value'] = 'Checked';
            $inputStatusDoc['status'] = 'Checked';
        } elseif ($user->position_id == 3) {
            $inputstatus['value'] = 'Approved';
            $inputStatusDoc['status'] = 'Approved';         
        } elseif ($user->position_id == 4) {
            $inputstatus['value'] = 'Approved';
            $inputStatusDoc['status'] = 'Approved';         
        } else{
            $inputstatus['value'] = 'Checked';     
            $inputStatusDoc['status'] = 'Checked';       
        }
        $inputstatus['details'] = $user->name;
        $inputstatus['date'] = $current;

        DocStatus::create($inputstatus);

        $product->update($inputStatusDoc);

        $user_id = $request->input('user_id');

        $user = User::find($user_id);

            $user->notify(new \App\Notifications\ApprovedFMEA($product));
        
        $input = $request->all();
        $input['user_id'] = Auth::user()->id;
    
        Comment::create($input);

        
        return redirect('/fmea')
                        ->with('success','submit successfully.');

    }

    public function RejectFMEA(Request $request, Product $product)
    {
        $id = $request->input('product_id');
        $product = Product::find($id);

        $user_id = $request->input('user_id');

        $user = User::find($user_id);

        // $user = Auth::user();
        // if (!empty($user->parent_id)) {
            $user->notify(new \App\Notifications\RejectedFMEA($product));
        // }   

        $request->validate([
            'body'=>'required',
        ]);
   
        $input = $request->all();
        $input['user_id'] = Auth::user()->id;
    
        Comment::create($input);
   
        // return back();
        return redirect('/fmea')
        ->with('success','submit successfully.');
    }

    public function highLevel(Request $request, Product $product, $id){
        $product = Product::find($id);
        $user = Auth::user();
        if (!empty($user->parent_id)) {
            $user->parent->notify(new \App\Notifications\HighLevelAP($product));
        }   
        return 200;
    }

    public function view_approval(Product $product)
    {
        $doc_checks = DocStatus::where('document_id',$product->id)->where('value','Checked')->get();
        $doc_approves = DocStatus::where('document_id',$product->id)->where('value','Approved')->get();

        return view('fmea.view',compact(array('product','doc_checks','doc_approves')));
    }

    public function getJson(){
        $a = User::all();
        $b = Product::all();

        $datas = json_encode(array_merge(json_decode($a, true),json_decode($b, true)));

        return $datas;
    }

}
