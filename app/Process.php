<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Process extends Model {

    use SoftDeletes;

    protected $connection = 'mysql_fmea';
    protected $table = "fmea_processes";
   
    protected $dates = ['deleted_at'];

    public $primaryKey = "id";

    protected $fillable = [
        'product_id',
        'name',
        'function',
        'function2',
        'function3',
        'user_id'
    ];

    public function step()
    {
        return $this->hasMany(Step::class);
    }
}