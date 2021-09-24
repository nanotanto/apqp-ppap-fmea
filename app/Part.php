<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Part extends Model
{
    //
    protected $fillable = [
        'id',
    	'name',
    	'no',
    	'drawing',
    	'division_id',
    	'project_id',
        'proto',
    	'file_drawing',
    	'file_rfq',
    	'file_spk',
    	'file_pqr'
    ];

    public function project()
    {
        return $this->belongsTo(Project::class);
    }
}
