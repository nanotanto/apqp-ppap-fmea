<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
// use Illuminate\Database\Eloquent\SoftDeletes;

class DocStatus extends Model
{
    // use SoftDeletes;

    // protected $dates = ['deleted_at'];

     /**
     * The attributes that are mass assignable.
     *	
     * @var array
     */
    protected $fillable = [
        'document_id',
        'value',
        'details',
        'date'
    ];    

}
