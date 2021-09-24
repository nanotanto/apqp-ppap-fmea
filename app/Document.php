<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Document extends Model
{
    use SoftDeletes;

    protected $dates = ['deleted_at'];

     /**
     * The attributes that are mass assignable.
     *	
     * @var array
     */
    protected $fillable = [
        'id',
        'name',
        'file',
        'category_id',
        'part_id',
        'status',
        'user_id',
        'sent_to'                        
    ];    

    public function user()
    {
        return $this->belongsTo('App\User');
    }

    public function part()
    {
        return $this->belongsTo('App\Part');
    }

    public function comments()
    {
        return $this->hasMany(Comment::class)->whereNull('parent_id');
    }

}
