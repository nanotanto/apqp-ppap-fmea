<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
// use Illuminate\Database\Eloquent\SoftDeletes;

class Fp4Status extends Model
{
    // use SoftDeletes;

    // protected $dates = ['deleted_at'];

     /**
     * The attributes that are mass assignable.
     *	
     * @var array
     */
    protected $fillable = [
        'fp4_form_id',
        'value',
        'details',
        'date'
    ];    

}
