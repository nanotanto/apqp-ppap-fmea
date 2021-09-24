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
        'no', 'name',
        'no_rev','revisi','user_id','fp4form_id','department_id',
        'lingkup',
        'tujuan',
        'definisi',
        'uraian',
        'prosedur',
        'lampiran',
        'terkait',
        'file1',
        'file2'
    ];    

    public function user()
    {
        return $this->belongsTo('App\User');
    }

    public function department()
    {
        return $this->belongsTo('App\Department');
    }

    public function comments()
    {
        return $this->hasMany(Comment::class)->whereNull('parent_id');
    }

}
