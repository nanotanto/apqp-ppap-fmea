@extends('layouts.A4')


@section('content')

    <section class="sheet">

@include('layouts.header')
    
<br/>
<br/>
<br/>
      <p style="text-align: center;"><strong>Halaman Pemeriksaan dan Persetujuan</strong></p>
<table style="border-collapse: collapse; width: 99.8532%; height: 180px;" border="1">
<tbody>
<tr style="height: 18px;">
<td style="width: 25%; height: 18px;" colspan="4"><strong>Disiapkan oleh:</strong></td>
</tr>
<tr style="height: 18px;">
<td style="width: 25%; text-align: center; height: 18px;"><strong>Nama</strong></td>
<td style="width: 25%; text-align: center; height: 18px;"><strong>Jabatan</strong></td>
<td style="width: 25%; text-align: center; height: 18px;"><strong>Tanggal</strong></td>
</tr>
<tr style="height: 18px;">
<td style="width: 25%; height: 18px;">&nbsp;{{ $document->user->name }}</td>
<td style="width: 25%; height: 18px;">&nbsp;{{ $document->user->position->name }}</td>
<td style="width: 25%; height: 18px;">&nbsp;{{ $document->created_at }}</td>
</tr>
<tr style="height: 18px;">
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
<td style="width: 25%; text-align: center; height: 18px;"><strong>Tanggal</strong></td>
</tr>
@foreach($doc_checks as $doc_check)
<tr style="height: 18px;">
<td style="width: 25%; height: 18px;">&nbsp;{{ $doc_check->user->name }}</td>
<td style="width: 25%; height: 18px;">&nbsp;{{ $doc_check->user->position->name }}</td>
<td style="width: 25%; height: 18px;">&nbsp;{{ $doc_check->created_at }}</td>
</tr>
@endforeach
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
<td style="width: 25%; text-align: center; height: 18px;"><strong>Tanggal</strong></td>
</tr>
@foreach($doc_approves as $doc_approve)
<tr style="height: 18px;">
<td style="width: 25%; height: 18px;">&nbsp;{{ $doc_approve->user->name }}</td>
<td style="width: 25%; height: 18px;">&nbsp;{{ $doc_approve->user->position->name }}</td>
<td style="width: 25%; height: 18px;">&nbsp;{{ $doc_approve->created_at }}</td>
</tr>
@endforeach
</tbody>
</table>
<p>&nbsp;</p>

    </section>

<!--     <section><center>
      <iframe src="../public/uploads/2021_06_16_07_l16013e-a.pdf" width="900px" height="500px">
      </iframe></center>
    </section> -->


@endsection