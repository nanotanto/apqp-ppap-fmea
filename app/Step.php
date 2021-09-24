<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Step extends Model {

    use SoftDeletes;

    protected $connection = 'mysql_fmea';
    protected $table = "fmea_steps";
   
    protected $dates = ['deleted_at'];
    
    public $primaryKey = "id";

    protected $fillable = [
        'process_id',
        'name',
        'function',
        'user_id'
    ];

    public function process()
    {
        return $this->belongsTo(Process::class);
    }

    public function element()
    {
        return $this->hasMany(Element::class);
    }

    public function mode()
    {
        return $this->hasMany(Mode::class);
    }
        
}