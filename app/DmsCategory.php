<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class DmsCategory extends Model {

    use SoftDeletes;

    protected $table = "dms_categories";
   
    protected $dates = ['deleted_at'];

    public $primaryKey = "id";

    protected $fillable = [
        'name',
        'format'
    ];

}
