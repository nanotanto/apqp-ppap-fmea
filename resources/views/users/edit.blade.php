@extends('layouts.app')


@section('content')
<div class="row">
    <div class="col-lg-12 margin-tb">
        <div class="pull-left">
            <h2>Edit New User</h2>
        </div>
        <div class="pull-right">
            <a class="btn btn-primary" href="{{ route('users.index') }}"> Back</a>
        </div>
    </div>
</div>


@if (count($errors) > 0)
  <div class="alert alert-danger">
    <strong>Whoops!</strong> There were some problems with your input.<br><br>
    <ul>
       @foreach ($errors->all() as $error)
         <li>{{ $error }}</li>
       @endforeach
    </ul>
  </div>
@endif


{!! Form::model($user, ['method' => 'PATCH','route' => ['users.update', $user->id], 'enctype' => 'multipart/form-data']) !!}
<div class="row">
    
    <div class="col-xs-12 col-sm-12 col-md-12">
        <div class="form-group">
            <strong>Name:</strong>
            {!! Form::text('name', null, array('placeholder' => 'Name','class' => 'form-control')) !!}
        </div>
    </div>
    <div class="col-xs-12 col-sm-12 col-md-12">
        <div class="form-group">
            <strong>Email:</strong>
            {!! Form::text('email', null, array('placeholder' => 'Email','class' => 'form-control')) !!}
        </div>
    </div>
    <div class="col-xs-12 col-sm-12 col-md-12">
        <div class="form-group">
            <strong>Password:</strong>
            {!! Form::password('password', array('placeholder' => 'Password','class' => 'form-control')) !!}
        </div>
    </div>
    <div class="col-xs-12 col-sm-12 col-md-12">
        <div class="form-group">
            <strong>Confirm Password:</strong>
            {!! Form::password('confirm-password', array('placeholder' => 'Confirm Password','class' => 'form-control')) !!}
        </div>
    </div>
    
    <div class="col-xs-12 col-sm-12 col-md-12">
        <div class="form-group">
            <strong>No. ID:</strong>
            {!! Form::text('nik', null, array('placeholder' => 'No. ID','class' => 'form-control')) !!}
        </div>
    </div>
    <div class="col-xs-12 col-sm-12 col-md-12">
        <div class="form-group">
            <strong>Company:</strong>
            @if(!empty($user->company->name))
            {!! Form::select('company_id', [$user->company_id=>$user->company->name]  +$companies,array('class' => 'form-control')) !!}
            @else                
            {!! Form::select('company_id', [null=>'Please Select']  +$companies,array('class' => 'form-control')) !!}
            @endif
        </div>
    </div>

    <div class="col-xs-12 col-sm-12 col-md-12">
        <div class="form-group">
            <strong>Department:</strong>
            @if(!empty($user->department->name))
            {!! Form::select('department_id', [$user->department_id=>$user->department->name] +$departments,array('class' => 'form-control')) !!}
            @else                
            {!! Form::select('department_id', [null=>'Please Select'] +$departments,array('class' => 'form-control')) !!}
            @endif
        </div>
    </div>

    <div class="col-xs-12 col-sm-12 col-md-12">
        <div class="form-group">
            <strong>Position:</strong>
            @if(!empty($user->position->name))
            {!! Form::select('position_id', [$user->position_id=>$user->position->name] +$positions,array('class' => 'form-control')) !!}
            @else                
            {!! Form::select('position_id', [null=>'Please Select'] +$positions,array('class' => 'form-control')) !!}
            @endif

        </div>
    </div>

    <div class="col-xs-12 col-sm-12 col-md-12">
        <div class="form-group">
            <strong>Related User:</strong>
            @if(!empty($user->parent->name))
                {!! Form::select('parent_id', [$user->parent_id=>$user->parent->name] +$parents,array('class' => 'form-control')) !!}
            @else                
            {!! Form::select('parent_id', [null=>'Please Select'] +$parents,array('class' => 'form-control')) !!}
            @endif
        </div>
    </div>

    <div class="col-xs-12 col-sm-12 col-md-12">
        <div class="form-group">
            <strong>Sign:</strong>
            {!! Form::file('sign', null, array('placeholder' => 'Sign','class' => 'form-control')) !!}
        </div>
    </div>

    <div class="col-xs-12 col-sm-12 col-md-12">
        <div class="form-group">
            <strong>Role:</strong>
            {!! Form::select('roles[]', $roles,$userRole, array('class' => 'form-control','multiple')) !!}
        </div>
    </div>
    <div class="col-xs-12 col-sm-12 col-md-12 text-center">
        <button type="submit" class="btn btn-primary">Submit</button>
    </div>
</div>
{!! Form::close() !!}


@endsection