<?php

namespace App\Http\Controllers;

use App\Element;
use Illuminate\Http\Request;
use App\Document;
use App\Part;
use App\Project;

class ZController extends Controller
{
    public function index(){
        $process = Document::select('created_at','name','status')->get();
        $part = Part::select('created_at','name')->get();

        $gabung = json_encode(array_merge(json_decode($process, true),json_decode($part, true)));

        // $data=[];
        // foreach ($gabung as $key => $value) {
        //     $data[] = array(
        //         "dokumen" => $value->name,
        //         "part" => $value->part->name, 
        //     );

        // }
        
        return $gabung;
    }
}
