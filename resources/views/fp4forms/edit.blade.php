@extends('layouts.layout')


@section('content')
    <div class="row">
        <div class="col-lg-12 margin-tb">
            <div class="pull-left">
                <h2>Edit Document</h2>
            </div>
            <div class="pull-right">
                <a class="btn btn-primary" href="{{ route('documents.index') }}"> Back</a>
            </div>
        </div>
    </div>


    @if ($errors->any())
        <div class="alert alert-danger">
            <strong>Whoops!</strong> There were some problems with your input.<br><br>
            <ul>
                @foreach ($errors->all() as $error)
                    <li>{{ $error }}</li>
                @endforeach
            </ul>
        </div>
    @endif


    <form action="{{ route('documents.update',$document->id) }}" method="POST" enctype='multipart/form-data'>
    	@csrf
        @method('PUT')


         <div class="row">
		    <div class="col-xs-12 col-sm-12 col-md-12">
		        <div class="form-group">
		            <strong>No:</strong>
		            <input type="text" name="no" value="{{ $document->no }}" class="form-control" placeholder="No">
		        </div>
		    </div>
		    <div class="col-xs-12 col-sm-12 col-md-12">
		        <div class="form-group">
		            <strong>Nama Dokumen:</strong>
		            <input type="text" name="name" value="{{ $document->name }}" class="form-control" placeholder="Name">
		        </div>
            </div>
            <div class="col-xs-12 col-sm-12 col-md-12">
                <div class="form-group">
                    <strong>Revisi Ke:</strong>
                    <input type="text" name="name" value="{{ $document->no_rev }}" class="form-control" placeholder="Revisi Ke">
                </div>
            </div>
            <div class="col-xs-12 col-sm-12 col-md-12">
                <div class="form-group">
                    <strong>Deskripsi:</strong>
                    <input type="text" name="name" value="{{ $document->revisi }}" class="form-control" placeholder="Deskripsi">
                </div>
            </div>
            <div class="col-xs-12 col-sm-12 col-md-12">
                <div class="form-group">
                    <strong>PIC:</strong>
                    <input type="text" name="name" value="{{ $document->user->name }}" class="form-control" placeholder="PIC">
                </div>
            </div>
            
            <div class="col-xs-12 col-sm-12 col-md-12">
		        <div class="form-group">
		            <strong>I. Ruang Lingkup:</strong>
		            <textarea type="text" name="lingkup" class="form-control" placeholder="Ruang Lingkup">{{ $document->lingkup }}</textarea>
		        </div>
            </div>
            <div class="col-xs-12 col-sm-12 col-md-12">
		        <div class="form-group">
		            <strong>II. Tujuan:</strong>
		            <textarea type="text" name="tujuan" class="form-control" placeholder="Tujuan">{{ $document->tujuan }}</textarea>
		        </div>
            </div>
            <div class="col-xs-12 col-sm-12 col-md-12">
		        <div class="form-group">
		            <strong>III. Definisi:</strong>
		            <textarea type="text" name="definisi" class="form-control" placeholder="Definisi">{{ $document->definisi }}</textarea>
		        </div>
            </div>
            <div class="col-xs-12 col-sm-12 col-md-12">
		        <div class="form-group">
		            <strong>IV. Uraian Umum:</strong>
		            <textarea type="text" name="uraian" class="form-control" placeholder="Uraian Umum">{{ $document->uraian }}</textarea>
		        </div>
            </div>
            <div class="col-xs-12 col-sm-12 col-md-12">
		        <div class="form-group">
		            <strong>V. Prosedur:</strong>
		            <textarea type="text" name="prosedur" class="form-control" placeholder="Prosedur">{{ $document->prosedur }}</textarea>
		        </div>
            </div>
            <div class="col-xs-12 col-sm-12 col-md-12">
		        <div class="form-group">
		            <strong>VI. Lampiran:</strong>
		            <textarea type="text" name="lampiran" class="form-control" placeholder="Lampiran">{{ $document->lampiran }}</textarea>
                </div>
                <div class="form-group">
                    <strong>Attachment:</strong>
                    {!! Form::file('file1', null, array('placeholder' => '','class' => 'form-control')) !!}
                </div>
                <div class="form-group">
                    <strong>More Attachment:</strong>
                    {!! Form::file('file2', null, array('placeholder' => '','class' => 'form-control')) !!}
                </div>
            </div>
            <div class="col-xs-12 col-sm-12 col-md-12">
		        <div class="form-group">
		            <strong>VII. Dokumen Terkait:</strong>
		            <textarea type="text" name="terkait" class="form-control" placeholder="Dokumen Terkait">{{ $document->terkait }}</textarea>
		        </div>
            </div>
            
		    <div class="col-xs-12 col-sm-12 col-md-12 text-center">
		      <button type="submit" class="btn btn-primary">Submit</button>
		    </div>
		</div>
  
    </form>


@endsection