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
        <header>
          <img style="width: 100%;" src="{{ asset('img/header.png') }}">
          </header>
      <footer>        
        <img style="width: 100%;" src="{{ asset('img/footer.png') }}">
      </footer>

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
            
        </div>
        <div class="col-xs-12 col-sm-12 col-md-12">
            <div class="form-group">
                <strong>VII. Dokumen Terkait:</strong><br/>
                {{ $document->terkait }}
            </div>
        </div>

        <div class="col-xs-12 col-sm-12 col-md-12">
          <div class="form-group">
              <strong>VIII. Catatan Revisi:</strong><br/>
              <table class="table table-bordered">
                <thead>
                  <tr>
                    <th style="width: 100px;" scope="col">Revisi Ke:</th>
                    <th scope="col">Deskripsi</th>
                    <th scope="col">PIC</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">{{ $document->no_rev }}</th>
                    <td>{{ $document->revisi }}</td>
                    <td>{{ $document->user->name }}</td>
                  </tr>
                </tbody>
              </table>
          </div>
      </div>

    </div>

    </page>

    <page size="A4">
      <header>
        <img style="width: 100%;" src="{{ asset('img/header.png') }}">
        </header>
    <footer>        
      <img style="width: 100%;" src="{{ asset('img/footer.png') }}">
    </footer>

        <div class="form-group">
                <strong>Attachment:</strong><br/>
                <img style="width: 100%;" src="{{ asset('uploads/'.$document->file1) }}">
                {{-- {{ $document->file1 }} --}}
            </div>
    </page>

    <page size="A4">    
      <header>
        <img style="width: 100%;" src="{{ asset('img/header.png') }}">
        </header>
    <footer>        
      <img style="width: 100%;" src="{{ asset('img/footer.png') }}">
    </footer>
  
            <div class="form-group">
                <strong>More Attachment:</strong><br/>
                <img style="width: 100%;" src="{{ asset('uploads/'.$document->file2) }}">
                {{-- {{ $document->file2 }} --}}
            </div>
    </page>

 
</body>
</html>


@endsection