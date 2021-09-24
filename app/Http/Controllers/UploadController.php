<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use File;

class UploadController extends Controller
{
	public function uploadfile(Request $request)
	{
		// $fileName1 = time().'.'.$request->upload_fullpath->getClientOriginalName();
  //       $request->file->move(public_path('uploads'), $fileName1);


    	ini_set('max_execution_time', 120);
   		$destination = public_path('uploads');

        if (isset($_FILES['upload'])){
        $file = $_FILES['upload'];
        
        $filename = $destination."/".preg_replace("|[\\\/]|", "", date("Y_m_d_h",time()).'_'.$file["name"]);
        // $filename = $destination."/".preg_replace("|[\\\/]|", "", time().'_'.$file["name"]);
        $sname = md5($file["name"]);

        //check that file name is valid
        if ($filename !== "" && !file_exists($filename)){
            move_uploaded_file($file["tmp_name"], $filename);
            $res = array("status" => "server", "sname" => $sname);
        } else {
            $res = array("status" => "error");
        }

        echo json_encode($res);
    	}

	}
}