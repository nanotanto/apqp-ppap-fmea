@extends('layouts.app')


@section('content')
    <div class="row">
        <div class="col-lg-12 margin-tb">
            <div class="pull-left">
                <h2>Departments</h2>
            </div>
            <div class="pull-right">
                @can('department-create')
                <a class="btn btn-success" href="{{ route('departments.create') }}"> Create New Department</a>
                @endcan
            </div>
        </div>
    </div>


    @if ($message = Session::get('success'))
        <div class="alert alert-success">
            <p>{{ $message }}</p>
        </div>
    @endif


    <table class="table table-bordered">
        <tr>
            <th>No</th>
            <th>Department Name</th>
            <th width="280px">Action</th>
        </tr>
	    @foreach ($departments as $department)
	    <tr>
	        <td>{{ ++$i }}</td>
	        <td>{{ $department->name }}</td>
	        <td>
                <form action="{{ route('departments.destroy',$department->id) }}" method="POST">
                    <a class="btn btn-info" href="{{ route('departments.show',$department->id) }}">Show</a>
                    @can('department-edit')
                    <a class="btn btn-primary" href="{{ route('departments.edit',$department->id) }}">Edit</a>
                    @endcan


                    @csrf
                    @method('DELETE')
                    @can('department-delete')
                    <button type="submit" class="btn btn-danger">Delete</button>
                    @endcan
                </form>
	        </td>
	    </tr>
	    @endforeach
    </table>


    {!! $departments->links() !!}


@endsection