@extends('layouts.A4')


@section('content')

    <section class="sheet">

@include('layouts.header')
<!-- <header></header> -->
    
<br/>
      <p style="text-align: center;"><strong>HALAMAN PEMERIKSAAN DAN PERSETUJUAN</strong></p>
<table style="border-collapse: collapse; width: 99.8532%; height: 180px;" border="1">
<tbody>
<tr style="height: 18px;">
<td style="width: 25%; height: 18px;" colspan="4"><strong>Disiapkan oleh:</strong></td>
</tr>
<tr style="height: 18px;">
<td style="width: 25%; text-align: center; height: 18px;"><strong>Nama</strong></td>
<td style="width: 25%; text-align: center; height: 18px;"><strong>Jabatan</strong></td>
<td style="width: 25%; text-align: center; height: 18px;"><strong>Tanda Tangan</strong></td>
<td style="width: 25%; text-align: center; height: 18px;"><strong>Tanggal</strong></td>
</tr>
<tr style="height: 18px;">
<td style="width: 25%; height: 18px;">&nbsp;</td>
<td style="width: 25%; height: 18px;">&nbsp;</td>
<td style="width: 25%; height: 18px;">&nbsp;</td>
<td style="width: 25%; height: 18px;">&nbsp;</td>
</tr>
<tr style="height: 18px;">
<td style="width: 25%; height: 18px;">&nbsp;</td>
<td style="width: 25%; height: 18px;">&nbsp;</td>
<td style="width: 25%; height: 18px;">&nbsp;</td>
<td style="width: 25%; height: 18px;">&nbsp;</td>
</tr>
</tbody>
</table>
<p>&nbsp;</p>
<table style="border-collapse: collapse; width: 100.147%; height: 181px;" border="1">
<tbody>
<tr style="height: 18px;">
<td style="width: 25%; height: 18px;" colspan="4"><strong>Diperiksa oleh:</strong></td>
</tr>
<tr style="height: 18px;">
<td style="width: 25%; text-align: center; height: 18px;"><strong>Nama</strong></td>
<td style="width: 25%; text-align: center; height: 18px;"><strong>Jabatan</strong></td>
<td style="width: 25%; text-align: center; height: 18px;"><strong>Tanda Tangan</strong></td>
<td style="width: 25%; text-align: center; height: 18px;"><strong>Tanggal</strong></td>
</tr>
<tr style="height: 18px;">
<td style="width: 25%; height: 18px;">&nbsp;</td>
<td style="width: 25%; height: 18px;">&nbsp;</td>
<td style="width: 25%; height: 18px;">&nbsp;</td>
<td style="width: 25%; height: 18px;">&nbsp;</td>
</tr>
<tr style="height: 18px;">
<td style="width: 25%; height: 18px;">&nbsp;</td>
<td style="width: 25%; height: 18px;">&nbsp;</td>
<td style="width: 25%; height: 18px;">&nbsp;</td>
<td style="width: 25%; height: 18px;">&nbsp;</td>
</tr>
</tbody>
</table>
<p>&nbsp;</p>
<table style="border-collapse: collapse; width: 100%; height: 182px;" border="1">
<tbody>
<tr style="height: 18px;">
<td style="width: 100%; height: 18px;" colspan="4"><strong>Disetujui oleh:</strong></td>
</tr>
<tr style="height: 18px;">
<td style="width: 25%; text-align: center; height: 18px;"><strong>Nama</strong></td>
<td style="width: 25%; text-align: center; height: 18px;"><strong>Jabatan</strong></td>
<td style="width: 25%; text-align: center; height: 18px;"><strong>Tanda Tangan</strong></td>
<td style="width: 25%; text-align: center; height: 18px;"><strong>Tanggal</strong></td>
</tr>
<tr style="height: 18px;">
<td style="width: 25%; height: 18px;">&nbsp;</td>
<td style="width: 25%; height: 18px;">&nbsp;</td>
<td style="width: 25%; height: 18px;">&nbsp;</td>
<td style="width: 25%; height: 18px;">&nbsp;</td>
</tr>
<tr style="height: 18px;">
<td style="width: 25%; height: 18px;">&nbsp;</td>
<td style="width: 25%; height: 18px;">&nbsp;</td>
<td style="width: 25%; height: 18px;">&nbsp;</td>
<td style="width: 25%; height: 18px;">&nbsp;</td>
</tr>
</tbody>
</table>
<p>&nbsp;</p>

    </section>

    <section class="sheet">
      @include('layouts.header')
          <p style="text-align: center;"><strong>RIWAYAT REVISI</strong></p>
<table style="border-collapse: collapse; width: 100%; height: 467px;" border="1">
<tbody>
<tr style="height: 15px;">
<td style="width: 25%; height: 15px; text-align: center;"><strong>BAGIAN</strong></td>
<td style="width: 35.1471%; height: 15px; text-align: center;"><strong>ISI</strong> <strong>PERUBAHAN</strong></td>
<td style="width: 14.8529%; height: 15px; text-align: center;"><strong>REVISI KE</strong></td>
<td style="width: 25%; height: 15px; text-align: center;"><strong>TGL REVISI</strong></td>
</tr>
<tr style="height: 15px;">
<td style="width: 25%; height: 15px;">&nbsp;{{$document->department_id}}</td>
<td style="width: 35.1471%; height: 15px;">&nbsp;{{$document->revisi}}</td>
<td style="width: 14.8529%; height: 15px;">&nbsp;{{$document->no_rev}}</td>
<td style="width: 25%; height: 15px;">&nbsp;{{$document->updated_at}}</td>
</tr>
<tr style="height: 15px;">
<td style="width: 25%; height: 15px;">&nbsp;</td>
<td style="width: 35.1471%; height: 15px;">&nbsp;</td>
<td style="width: 14.8529%; height: 15px;">&nbsp;</td>
<td style="width: 25%; height: 15px;">&nbsp;</td>
</tr>
<tr style="height: 15px;">
<td style="width: 25%; height: 15px;">&nbsp;</td>
<td style="width: 35.1471%; height: 15px;">&nbsp;</td>
<td style="width: 14.8529%; height: 15px;">&nbsp;</td>
<td style="width: 25%; height: 15px;">&nbsp;</td>
</tr>
<tr style="height: 15px;">
<td style="width: 25%; height: 15px;">&nbsp;</td>
<td style="width: 35.1471%; height: 15px;">&nbsp;</td>
<td style="width: 14.8529%; height: 15px;">&nbsp;</td>
<td style="width: 25%; height: 15px;">&nbsp;</td>
</tr>
<tr style="height: 15px;">
<td style="width: 25%; height: 15px;">&nbsp;</td>
<td style="width: 35.1471%; height: 15px;">&nbsp;</td>
<td style="width: 14.8529%; height: 15px;">&nbsp;</td>
<td style="width: 25%; height: 15px;">&nbsp;</td>
</tr>
<tr style="height: 15px;">
<td style="width: 25%; height: 15px;">&nbsp;</td>
<td style="width: 35.1471%; height: 15px;">&nbsp;</td>
<td style="width: 14.8529%; height: 15px;">&nbsp;</td>
<td style="width: 25%; height: 15px;">&nbsp;</td>
</tr>
<tr style="height: 15px;">
<td style="width: 25%; height: 15px;">&nbsp;</td>
<td style="width: 35.1471%; height: 15px;">&nbsp;</td>
<td style="width: 14.8529%; height: 15px;">&nbsp;</td>
<td style="width: 25%; height: 15px;">&nbsp;</td>
</tr>
<tr style="height: 15px;">
<td style="width: 25%; height: 15px;">&nbsp;</td>
<td style="width: 35.1471%; height: 15px;">&nbsp;</td>
<td style="width: 14.8529%; height: 15px;">&nbsp;</td>
<td style="width: 25%; height: 15px;">&nbsp;</td>
</tr>
<tr style="height: 15px;">
<td style="width: 25%; height: 15px;">&nbsp;</td>
<td style="width: 35.1471%; height: 15px;">&nbsp;</td>
<td style="width: 14.8529%; height: 15px;">&nbsp;</td>
<td style="width: 25%; height: 15px;">&nbsp;</td>
</tr>
</tbody>
</table>
    </section>

    <section class="sheet">
      @include('layouts.header')
      <!-- {!! $document->prosedur !!} -->

      <?=str_replace(['$document->no_rev','$document->no','$document->name','$document->date'], [$document->no_rev,$document->no,$document->name,$document->data], $document->prosedur)?>

    </section>

    <section class="sheet">
      

    
  {{-- @include('documents.approved') --}}
{{-- <page size="A4" layout=""> --}}

  <!-- <form action="{{ url('documents.submit') }}" method="POST" > -->
  <form action="{{ url('updatedocstatus') }}" method="POST" >
    @csrf
    <input name="id"  type="hidden" value="{{ $document->id }}">

      <div class="col-xs-12 col-sm-12 col-md-12 text-center">           
        <button type="submit" name="submit" class="btn btn-primary">Approved</button>
      </div>
  {{-- <form> --}}
  <br/>
  
  <hr/>

  <div class="col-xs-12 col-sm-12 col-md-12">
    <h4>Display Comments</h4>
  
  @include('documents.commentsDisplay', ['comments' => $document->comments, 'document_id' => $document->id])

  <hr />
  <h4>Add comment</h4>
  {{-- <form method="post" action="{{ route('comments.store') }}"> --}}
      @csrf
      <div class="form-group">
          <textarea class="form-control" name="body"></textarea>
          <input type="hidden" name="document_id" value="{{ $document->id }}" />
      </div>

      <input name="user_id"  type="hidden" value="{{ $document->user_id }}">
      <input name="document_id"  type="hidden" value="{{ $document->id }}">

      <div class="form-group text-right">
          <input type="submit" name="comment" class="btn btn-success" value="Add Comment & Request Revise" formaction="{{ route('comments.store') }}"/>
      </div>
  </form>
  </div>
  

  {{-- <form action="{{ url('documents.revised') }}" method="POST" >
      @csrf
      <input name="user_id"  type="hidden" value="{{ $document->user->email }}">
      <input name="document_id"  type="hidden" value="{{ $document->id }}">

            <div class="col-xs-12 col-sm-12 col-md-12">
            
                  <button type="submit" name="revised" class="col-xs-12 btn btn-primary">Revised</button>
                
              </div>
  </form> --}}
<hr/>
 

    </section>

@endsection