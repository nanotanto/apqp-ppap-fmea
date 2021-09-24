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
  width: 21cm;
  height: 14.8cm;  
}

header,
footer {
  position: absolute;
  left: 0;
  right: 0;
  background-color: #fff;
  padding-right: 1.5cm;
  padding-left: 1.5cm;
}
header:after{
  content: "";
}
footer:after{
  content: "";
}

header {
  top: 0;
  padding-top: 5mm;
  padding-bottom: 3mm;
}
footer {
  bottom: 0;
  color: #000;
  padding-top: 3mm;
  padding-bottom: 5mm;
}

@media print {
  body, page {
    margin: 0;
    box-shadow: 0;
  }
  header,
  footer {
    position: fixed;
    left: 0;
    right: 0;
    background-color: #fff;
    padding-right: 1.5cm;
    padding-left: 1.5cm;
  }
}
    </style>
</head>
<body>

    <page size="A4">
        <header>
          <img src="{{ asset('img/header.png') }}">
          </header>
      <footer>        
        <img src="{{ asset('img/footer.png') }}">
      </footer>

    <div class="row">
        {{-- <div class="col-xs-12 col-sm-12 col-md-12">
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
        </div> --}}
        
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
    </div>

    </page>

    <page size="A4">
      <header>
        <img src="{{ asset('img/header.png') }}">
        </header>
    <footer>        
      <img src="{{ asset('img/footer.png') }}">
    </footer>

        <div class="form-group">
                <strong>Attachment:</strong><br/>
                {{ $document->file1 }}
            </div>
    </page>

    <page size="A4">      
      <header>
        <img src="{{ asset('img/header.png') }}">
        </header>
    <footer>        
      <img src="{{ asset('img/footer.png') }}">
    </footer>

            <div class="form-group">
                <strong>More Attachment:</strong><br/>
                {{ $document->file2 }}
            </div>
    </page>

            <div class="col-xs-12 col-sm-12 col-md-12">
                <div class="form-group">
                    <strong>Comment:</strong>
                    <textarea type="text" name="terkait" class="form-control" placeholder="Comment"></textarea>
                </div>
            </div>
        <div class="row">
            <div class="col-xs-6 col-sm-6 col-md-6 text-left">
              <button type="submit" class="col-xs-12 btn btn-primary">Revised</button>
            </div>

            <div class="col-xs-6 col-sm-6 col-md-6 text-right">           
              <button type="submit" class="btn btn-primary">Submit</button>
            </div>
        </div>
</body>
</html>


@endsection