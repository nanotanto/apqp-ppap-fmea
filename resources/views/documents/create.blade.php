@extends('layouts.layout')


@section('content')
    <div class="row">
        <div class="col-lg-12 margin-tb">
            <div class="pull-left">
                <h2>Add New Document</h2>
            </div>
            <div class="pull-right">
                {{-- <a class="btn btn-primary" href="{{ url('/#!/top/draft') }}"> Back</a> --}}
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


    <form action="{{ route('documents.store') }}" method="POST" enctype='multipart/form-data'>
    	@csrf


         <div class="row">
		    <div class="col-xs-12 col-sm-12 col-md-12">
		        <div class="form-group">
		            <strong>No:</strong>
		            <input type="text" name="no" class="form-control" placeholder="No">
		        </div>
		    </div>
		    <div class="col-xs-12 col-sm-12 col-md-12">
		        <div class="form-group">
		            <strong>Nama Dokumen:</strong>
		            <input type="text" name="name" class="form-control" placeholder="Nama Dokumen">
		        </div>
            </div>
            <div class="col-xs-12 col-sm-12 col-md-12">
		        <div class="form-group">
		            <strong>I. Ruang Lingkup:</strong>
		            <textarea type="text" name="lingkup" class="form-control" placeholder="Ruang Lingkup"></textarea>
		        </div>
            </div>
            <div class="col-xs-12 col-sm-12 col-md-12">
		        <div class="form-group">
		            <strong>II. Tujuan:</strong>
		            <textarea type="text" name="tujuan" class="form-control" placeholder="Tujuan"></textarea>
		        </div>
            </div>
            <div class="col-xs-12 col-sm-12 col-md-12">
		        <div class="form-group">
		            <strong>III. Definisi:</strong>
		            <textarea type="text" name="definisi" class="form-control" placeholder="Definisi"></textarea>
		        </div>
            </div>
            <div class="col-xs-12 col-sm-12 col-md-12">
		        <div class="form-group">
		            <strong>IV. Uraian Umum:</strong>
		            <textarea type="text" name="uraian" class="form-control" placeholder="Uraian Umum"></textarea>
		        </div>
            </div>
            <div class="col-xs-12 col-sm-12 col-md-12">
		        <div class="form-group">
		            <strong>V. Prosedur:</strong>
		            <textarea type="text" name="prosedur" class="form-control" placeholder="Prosedur"></textarea>
		        </div>
            </div>
            <div class="col-xs-12 col-sm-12 col-md-12">
		        <div class="form-group">
		            <strong>VI. Lampiran:</strong>
		            <textarea type="text" name="lampiran" class="form-control" placeholder="Lampiran"></textarea>
                </div>
                <div class="form-group">
                    <strong>Attachment:</strong>
                    {{-- {!! Form::file('file1', null, array('placeholder' => '','class' => 'form-control','id' => 'preview_gambar')) !!}
                    <br/> --}}
                    <input type="file" name="file" id="preview_gambar" />
                    <img src="#" id="gambar_nodin" width="400" alt="Preview Gambar" />
                
                </div>
                <div class="form-group">
                    <strong>More Attachment:</strong>
                    {!! Form::file('file2', null, array('placeholder' => '','class' => 'form-control','id' => 'preview_file2')) !!}
                </div>
            </div>
            <div class="col-xs-12 col-sm-12 col-md-12">
		        <div class="form-group">
		            <strong>VII. Dokumen Terkait:</strong>
		            <textarea type="text" name="terkait" class="form-control" placeholder="Dokumen Terkait"></textarea>
		        </div>
            </div>
            

		    <div class="col-xs-12 col-sm-12 col-md-12 text-center">
		            <button type="submit" class="btn btn-primary">Submit</button>
		    </div>
		</div>       

    </form>
    

@endsection


 