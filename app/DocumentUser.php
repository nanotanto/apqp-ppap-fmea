<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Notifications\Notifiable;

class DocumentUser extends Model
{
    // use SoftDeletes;
    use Notifiable;

    // protected $dates = ['deleted_at'];

     /**
     * The attributes that are mass assignable.
     *	
     * @var array
     */
    protected $fillable = [
        'id',
        'document_id',
        'user_id', 
        'due_date'              
    ];    

    // public function user()
    // {
    //     return $this->belongsTo('App\User');
    // }

    public function document()
    {
        return $this->belongsTo('App\Document');
    }

    public function user()
    {
        return $this->belongsTo('App\User', 'user_id', 'id');
    }

}
