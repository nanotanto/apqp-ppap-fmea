<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;


class Action extends Model {

    use SoftDeletes;

    protected $connection = 'mysql_fmea';
    protected $table = "fmea_actions";
   
    protected $dates = ['deleted_at'];

    public $primaryKey = "id";

    protected $fillable = [
        'mode_id',
        'current_id',
        'element',
        'cause',
        'prevention',
        'prevention_act',
        'o',
        'detection',
        'detection_act',
        'd',
        'ap',
        'sc',
        'filter',
        'pic',
        'target_date',
        'status',
        'prevention_act',
        'detection_act',
        'action',
        'finish_date',
        'user_id'
    ];

}