<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Element extends Model {

    use SoftDeletes;

    protected $connection = 'mysql_fmea';
    protected $table = "fmea_elements";
   
    protected $dates = ['deleted_at'];
    
    
    public $primaryKey = "id";

    protected $fillable = [
        'step_id',
        'man',
        'machine',
        'material',
        'method',
        'measure',
        'enviro',
        'func_man',
        'func_machine',
        'func_material',
        'func_method',
        'func_measure',
        'func_enviro',
        'user_id'
    ];

    public function step()
    {
        return $this->belongsTo(Step::class);
    }

}