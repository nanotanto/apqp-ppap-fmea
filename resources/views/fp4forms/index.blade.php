@extends('layouts.layout')


@section('content')
    <div class="row">
        <div class="col-lg-12 margin-tb">
            <div class="pull-left">
                <h2>Documents</h2>
            </div>
            <div class="pull-right">
                @can('document-create')
                <a class="btn btn-success" href="{{ route('documents.create') }}"> Create New Document</a>
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
            <th>Document No.</th>
            <th>Document Name</th>
            <th>Revision</th>
            <th width="280px">Action</th>
        </tr>
	    @foreach ($documents as $document)
	    <tr>
	        <td>{{ ++$i }}</td>
	        <td>{{ $document->no }}</td>
	        <td>{{ $document->name }}</td>
	        <td>{{ $document->no_rev }}</td>
	        <td>
                <form action="{{ route('documents.destroy',$document->id) }}" method="POST">
                    <a class="btn btn-info" href="{{ route('documents.show',$document->id) }}">Show</a>
                    @can('document-edit')
                    <a class="btn btn-primary" href="{{ route('documents.edit',$document->id) }}">Edit</a>
                    @endcan


                    @csrf
                    @method('DELETE')
                    @can('document-delete')
                    <button type="submit" class="btn btn-danger">Delete</button>
                    @endcan
                </form>
	        </td>
	    </tr>
	    @endforeach
    </table>


    {!! $documents->links() !!}


@endsection