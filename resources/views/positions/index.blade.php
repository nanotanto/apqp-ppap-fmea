@extends('layouts.app')


@section('content')
    <div class="row">
        <div class="col-lg-12 margin-tb">
            <div class="pull-left">
                <h2>Positions</h2>
            </div>
            <div class="pull-right">
                @can('position-create')
                <a class="btn btn-success" href="{{ route('positions.create') }}"> Create New Position</a>
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
            <th>Position Name</th>
            <th width="280px">Action</th>
        </tr>
	    @foreach ($positions as $position)
	    <tr>
	        <td>{{ ++$i }}</td>
	        <td>{{ $position->name }}</td>
	        <td>
                <form action="{{ route('positions.destroy',$position->id) }}" method="POST">
                    <a class="btn btn-info" href="{{ route('positions.show',$position->id) }}">Show</a>
                    @can('position-edit')
                    <a class="btn btn-primary" href="{{ route('positions.edit',$position->id) }}">Edit</a>
                    @endcan


                    @csrf
                    @method('DELETE')
                    @can('position-delete')
                    <button type="submit" class="btn btn-danger">Delete</button>
                    @endcan
                </form>
	        </td>
	    </tr>
	    @endforeach
    </table>


    {!! $positions->links() !!}


@endsection