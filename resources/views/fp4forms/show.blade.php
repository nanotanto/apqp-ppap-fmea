@extends('layouts.layout')


@section('content')

<!DOCTYPE html>
<html>
<head>
    <title></title>
    <style type="text/css">
        body {
  background: rgb(204,204,204); 
}
page {
  padding: 4cm 1.5cm 4cm 1.5cm;
  position: relative;
  background: white;
  display: block;
  margin: 0 auto;
  margin-bottom: 0.5cm;
  box-shadow: 0 0 0.5cm rgba(0,0,0,0.5);
}
page[size="A4"] {  
  width: 21cm;
  height: 29.7cm; 
}
page[size="A4"][layout="portrait"] {
  width: 29.7cm;
  height: 21cm;  
}
page[size="A3"] {
  width: 29.7cm;
  height: 42cm;
}
page[size="A3"][layout="portrait"] {
  width: 42cm;
  height: 29.7cm;  
}
page[size="A5"] {
  width: 14.8cm;
  height: 21cm;
}
page[size="A5"][layout="portrait"] {  
  padding: 0.5cm 0cm 0.5cm 0cm;
  width: 21cm;
  height: 14.8cm;  
  /*height: 14.8cm;  */
}

header,
footer {
  position: absolute;
  left: 0;
  right: 0;
  background-color: #fff;
  padding-right: 1.5cm;
  padding-left: 1.5cm;
  text-align: center;
}

header {
  top: 0;
  padding-top: 4mm;
  padding-bottom: 3mm;
}
footer {
  bottom: 0;
  color: #000;
  padding-top: 3mm;
  padding-bottom: 4mm;
}

@media print {
  body, page {    
  /* width: 21cm;
  height: 29.7cm;  */
  font-size: 12pt;
  padding-top: 2.5cm;
  padding-right: 0px;
  padding-bottom: 2.5cm;
  padding-left: 0px;
            border: initial;
            border-radius: initial;
            width: initial;
            min-height: initial;
            box-shadow: initial;
            background: initial;
            page-break-after: always;
  }
  header,
  footer {
    position: fixed;
    left: 0;
    right: 0;
    background-color: #ccc;
    /* padding-right: 1.5cm;
    padding-left: 1.5cm; */
  }

  
}
    </style>
</head>
<body>

    <page size="A4">

    <div class="row">
        <div class="col-xs-12 col-sm-12 col-md-12">
            <div class="form-group">
                <strong>Nama Lengkap Pemohon:</strong><br/>
                {{ $fp4form->user->name }}
            </div>
        </div>
        <div class="col-xs-12 col-sm-12 col-md-12">
            <div class="form-group">
                <strong>Departemen:</strong><br/>
                {{ $fp4form->department->name }}
            </div>
        </div>
        
        <div class="col-xs-12 col-sm-12 col-md-12">
            <div class="form-group">
                <strong>Tanggal Permohonan:</strong><br/>
                {{ $fp4form->created_at }}
            </div>
        </div>
        <div class="col-xs-12 col-sm-12 col-md-12">
            <div class="form-group">
                <strong>Jenis Permohonan:</strong><br/>
                {{ $fp4form->jenis }}
            </div>
        </div>
        <div class="col-xs-12 col-sm-12 col-md-12">
            <div class="form-group">
                <strong>Jumlah Dokumen:</strong><br/>
                {{ $fp4form->jumlah }}
            </div>
        </div>
        <div class="col-xs-12 col-sm-12 col-md-12">
            <div class="form-group">
                <strong>Nama Dokumen:</strong><br/>
                {{ $fp4form->dokumen }}
            </div>
        </div>
        <div class="col-xs-12 col-sm-12 col-md-12">
            <div class="form-group">
                <strong>Alasan:</strong><br/>
                {{ $fp4form->alasan }}
            </div>
        </div>
        <div class="col-xs-12 col-sm-12 col-md-12">
            <div class="form-group">
                <strong>Lampiran:</strong><br/>
                <a target="_blank" href="/uploads/{{ $fp4form->file }}">Buka</a>                
            </div>
        </div>

    </div>

    </page>
    
  <form action="{{ url('updatefp4status') }}" method="POST" >
    @csrf
    <input name="id"  type="hidden" value="{{ $fp4form->id }}">

      <div class="col-xs-12 col-sm-12 col-md-12 text-center">           
        <button type="submit" name="submit" class="btn btn-primary">Checked/ Approved</button>
      </div>
  {{-- <form> --}}
  <br/>
  
  <hr/>

 
</body>
</html>


@endsection