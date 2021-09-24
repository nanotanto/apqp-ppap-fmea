<?php

namespace App;

use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Spatie\Permission\Traits\HasRoles;

class User extends Authenticatable
{
    use Notifiable;
    use HasRoles;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name', 'email', 'password', 'company_id', 'department_id', 'position_id', 'parent_id', 'sign', 'nik'
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password', 'remember_token',
    ];

    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

    public function children()
    {
        return $this->hasMany('App\User', 'parent_id', 'id');
    }

    public function parent()
    {
        return $this->belongsTo('App\User', 'parent_id', 'id');
    }

    public function company()
    {
        return $this->belongsTo('App\Company', 'company_id', 'id');
    }
    
    public function department()
    {
        return $this->belongsTo('App\Department', 'department_id', 'id');
    }

    public function position()
    {
        return $this->belongsTo('App\Position', 'position_id', 'id');
    }

    public function documents()
    {
        return $this->hasMany('App\Document');
    }

    public function document_users()
    {
        return $this->hasMany('App\DocumentUser');
    }


}
