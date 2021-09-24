</br>
<header>
	<br><br>
<table style="border-collapse: collapse; width: 100%; height: 88px;" border="0">
<tbody>
	<tr style="height: 70px;">
		<td style=" text-align: center; height: 70px; font-size: 16pt" colspan="3"><strong>{{ $document->name }}</strong></td>
	</tr>
	<tr style="height: 18px;">
		<td style=" text-align: left; height: 18px;">Part No:&nbsp;{{ $document->no }}</td>
		<!-- <td style=" text-align: center; height: 18px;">Part Name:&nbsp;shshsrtb</td> -->
	</tr>
	<tr style="height: 18px;">
		<!-- <td style=" text-align: center; height: 18px;">Part No:&nbsp;{{ $document->no }}</td> -->
		<td style=" text-align: left; height: 18px;">Part Name:&nbsp;{{ $document->part->name }}</td>
	</tr>
	<tr style="height: 18px;">
		<!-- <td style=" text-align: center; height: 18px;">Part No:&nbsp;{{ $document->no }}</td> -->
		<td style=" text-align: left; height: 18px;">Attachment:&nbsp;<a href="../public/uploads/{{ $document->file }}">{{ $document->file }}</a>
		</td>
	</tr>
</tbody>
</table>
</header>
<footer>        
</footer>