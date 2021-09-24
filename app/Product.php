<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Product extends Model {   

    use SoftDeletes;

    protected $connection = 'mysql_fmea';
    protected $table = "fmea_products";
   
    protected $dates = ['deleted_at'];
    
    public $primaryKey = "id";

    protected $fillable = [
        'number',
        'code',
        'name',
        'issued',
        'company',
        'location',
        'customer',
        'model',
        'subject',
        'start_date',
        //'revision_date',
        'team',
        'respons',
        'level',
        'division_id',
        'status',
        'user_id'
    ];

    public function comments()
    {

        return $this->hasMany(Comment::class)->whereNull('parent_id');
    }

    public function user()
    {
        return $this->belongsTo('App\User');
    }

}