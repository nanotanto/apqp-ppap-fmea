<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Current extends Model {

    use SoftDeletes;

    protected $connection = 'mysql_fmea';
    protected $table = "fmea_currents";
   
    protected $dates = ['deleted_at'];


    public $primaryKey = "id";

    protected $fillable = [
        'mode_id',
        'current_id',
        'element',
        'cause',
        'prevention',
        'o',
        'detection',
        'd',
        'ap',
        'sc',
        'user_id'
        // 'filter',
        // 'pic',
        // 'target_date',
        // 'status',
        // 'prevention_act',
        // 'detection_act',
        // 'action',
        // 'finish_date'
    ];

    public function mode()
    {
        return $this->belongsTo(Mode::class);
    }
}