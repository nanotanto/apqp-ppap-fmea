<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Mode extends Model {

    use SoftDeletes;

    protected $connection = 'mysql_fmea';
    protected $table = "fmea_modes";
   
    protected $dates = ['deleted_at'];

    public $primaryKey = "id";

    protected $fillable = [
        'step_id',
        'name',
        'category',
        'effect_in',
        'effect_next',
        'effect_end',
        's',
        'user_id'
    ];

    public function step()
    {
        return $this->belongsTo(Step::class);
    }

    public function process()
    {
        return $this->belongsTo(Process::class);
    }

    public function current()
    {
        return $this->hasMany(Current::class);
    }
        
}