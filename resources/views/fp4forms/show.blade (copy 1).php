@extends('layouts.app')


@section('content')
    <div class="row">
        <div class="col-lg-12 margin-tb">
            <div class="pull-left">
                <h2> Show Document</h2>
            </div>
            <div class="pull-right">
                <a class="btn btn-primary" href="{{ route('documents.index') }}"> Back</a>
            </div>
        </div>
    </div>


    <div class="row">
        <div class="col-xs-12 col-sm-12 col-md-12">
            <div class="form-group">
                <strong>No:</strong><br/>
                {{ $document->no }}
            </div>
        </div>
        <div class="col-xs-12 col-sm-12 col-md-12">
            <div class="form-group">
                <strong>Nama Dokumen:</strong><br/>
                {{ $document->name }}
            </div>
        </div>
        
        <div class="col-xs-12 col-sm-12 col-md-12">
            <div class="form-group">
                <strong>I. Ruang Lingkup:</strong><br/>
                {{ $document->lingkup }}
            </div>
        </div>
        <div class="col-xs-12 col-sm-12 col-md-12">
            <div class="form-group">
                <strong>II. Tujuan:</strong><br/>
                {{ $document->tujuan }}
            </div>
        </div>
        <div class="col-xs-12 col-sm-12 col-md-12">
            <div class="form-group">
                <strong>III. Definisi:</strong><br/>
                {{ $document->definisi }}
            </div>
        </div>
        <div class="col-xs-12 col-sm-12 col-md-12">
            <div class="form-group">
                <strong>IV. Uraian Umum:</strong><br/>
                {{ $document->uraian }}
            </div>
        </div>
        <div class="col-xs-12 col-sm-12 col-md-12">
            <div class="form-group">
                <strong>V. Prosedur:</strong><br/>
                {{ $document->prosedur }}
            </div>
        </div>
        <div class="col-xs-12 col-sm-12 col-md-12">
            <div class="form-group">
                <strong>VI. Lampiran:</strong><br/>
                {{ $document->lampiran }}
            </div>
            <div class="form-group">
                <strong>Attachment:</strong><br/>
                {{ $document->file1 }}
            </div>
            <div class="form-group">
                <strong>More Attachment:</strong><br/>
                {{ $document->file2 }}
            </div>
        </div>
        <div class="col-xs-12 col-sm-12 col-md-12">
            <div class="form-group">
                <strong>VII. Dokumen Terkait:</strong><br/>
                {{ $document->terkait }}
            </div>
        </div>

    </div>
@endsection