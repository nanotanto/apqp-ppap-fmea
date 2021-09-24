</br>
<header>
	<br><br>
<table style="border-collapse: collapse; width: 100%; height: 88px;" border="0">
<tbody>
	<tr style="height: 70px;">
		<td style=" text-align: center; height: 70px; font-size: 16pt" colspan="3"><strong>{{ $product->name }}</strong></td>
	</tr>
	<tr style="height: 18px;">
		<td style=" text-align: left; height: 18px;">FMEA No:&nbsp;{{ $product->number }}</td>
	</tr>
	<tr style="height: 18px;">
		<td style=" text-align: left; height: 18px;">FMEA Name/Subject:&nbsp;{{ $product->name }}</td>
	</tr>
	<tr style="height: 18px;">
		<td style=" text-align: left; height: 18px;">Attachment:&nbsp;<a href="../fmea/{{ $product->id }}">View P-FMEA Spreadsheet</a>
		</td>
	</tr>
</tbody>
</table>
</header>
<footer>        
</footer>