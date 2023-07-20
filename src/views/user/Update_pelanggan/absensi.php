<?php
$nama_host="localhost";
$user_db="absensi";
$password_db="absensi123";
$nama_db="internal_abs";
	//koneksi database
$koneksi= mysqli_connect($nama_host, $user_db, $password_db);
	//bila terkoneksi
if($koneksi){
	//pilih database
	mysqli_select_db($koneksi,'internal_abs');
	echo " LAPORAN ABSENSI PEGAWAI ";
}else{
	echo "Database tidak terkoneksi";
}
		$date = date('Y-m-d');
		//print_r($date);
		$cday = 5; // Jumlah hari ke belakang ==> Tujuan supaya yg kelewatan kemarin terisi
		//print_r($cday);
			$port = 7878;
			$Key="0";
			$address = "103.76.149.49";
			//print_r($address);
					if(!empty($address) && !empty($port)){
						//echo "Hai";
						try {
							
							$Connect = fsockopen($address, $port, $errno, $errstr, 1);
							if($Connect){
								/* ==> Load data Finger <== */
								$soap_request="<GetAttLog>
									<ArgComKey xsi:type=\"xsd:integer\">".$Key."</ArgComKey>
									<Arg><PIN xsi:type=\"xsd:integer\">All</PIN></Arg>
									</GetAttLog>";
								
								$newLine="\r\n";
								fputs($Connect, "POST /iWsService HTTP/1.0".$newLine);
								fputs($Connect, "Content-Type: text/xml".$newLine);
								fputs($Connect, "Content-Length: ".strlen($soap_request).$newLine.$newLine);
								fputs($Connect, $soap_request.$newLine);
								$buffer = "";
								while($Response=fgets($Connect, 1024)){
									$buffer=$buffer.$Response;
								}
								$buffer = Parse_Data($buffer,"<GetAttLogResponse>","</GetAttLogResponse>");
								$buffer = explode("\r\n",$buffer);
								$countInsert = 0;
								$isJalan = false;
								$date_start = date('Y-m-d 00:00:00', strtotime($date. ' - '.$cday.' days'));
								$date_end = date('Y-m-d 00:00:00', strtotime($date. ' + 1 days')); 
								for($a=0; $a<count($buffer); $a++){
									$data = Parse_Data($buffer[$a],"<Row>","</Row>");
									$pin = Parse_Data($data,"<PIN>","</PIN>");
									$datetime = Parse_Data($data,"<DateTime>","</DateTime>");
									if($pin && $datetime && $date_start <= $datetime && $date_end >= $datetime){
										$verified = Parse_Data($data,"<Verified>","</Verified>");
										$status = Parse_Data($data,"<Status>","</Status>");
										if($date_start <= $datetime && $date_end >= $datetime){
											$prosescek= mysqli_query($koneksi,"SELECT COUNT(*) FROM absensi WHERE user_absensi='".$pin."' AND absensi_in='".$datetime."'");
											$row = mysqli_fetch_assoc($prosescek);
											//print_r($row);
											if(!($row['COUNT(*)'] > 0)){
												$countInsert += 1;
												$isJalan = true;
												$sql = "INSERT INTO absensi (ip_finger, user_absensi, absensi_in,created_at, updated_at) VALUES ('".$address.':'.$port."', '".$pin."', '".$datetime."' , '".time()."', '".time()."')";
												//mysqli_query($koneksi,"INSERT INTO absensi (ip_finger, user_absensi, absensi_in,created_at, updated_at) VALUES ('".$address.':'.$port."', '".$pin."', '".$datetime."' , '".time()."', '".time()."'),");
												 mysqli_query($koneksi,$sql) or exit(mysqli_error());
												// $log_query = "INSERT INTO internal_abs (ip_finger, user_absensi, absensi_in, created_at, updated_at,nama) VALUES ";
												// $log_query .= " , ";
												//echo $prosescek;
												//echo "berhasil";
											}else{
												//echo "gagal";
											}
										}
									}
								}
							}else{
								echo "gagal";
							}
						}catch (ErrorException  $ex) {
							echo $e;
						}
					}else{
						echo "gagal";
					}
function Parse_Data($data, $p1, $p2)
{
	$data = " ".$data;
	$hasil = "";
	$awal = strpos($data,$p1);
	if($awal != "") {
		$akhir = strpos(strstr($data,$p1),$p2);
		if($akhir != "") {
			$hasil = substr($data, $awal+strlen($p1), $akhir - strlen($p1));
		}
	}
	return $hasil;
}
function shell_execute($command)
{
	exec($command, $output);
	$arr = [];
	foreach($output as $val){
		$arr[] = str_replace('.', '_', trim($val));
	}
	return $arr;
}					
?>
<html>
<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
	
<body>
		<table style="width:100%" class="table table-bordered">
		<thead class="thead-light">
			<tr>
				<th>No</th>
				<th>User</th>
				<th>Tgl</th>
				<th>Masuk</th>
				<th>Keluar</th>
				<th>Hari Normal</th>
				<th>Absensi</th>
			</tr>
		</thead><tbody>
		<?php
		$nomor = 0;
		$date = strtotime('first day of this month');
		$date2 = strtotime('now');

		$pegawai = mysqli_query($koneksi,"select * from pegawai order by Nama");
		foreach ($pegawai as $row3){ 
		$nomor++;
		?>
				<tr>
					<td><?=$nomor?></td>
					<td><?=$row3['Nama']?></td>
					
					<td>
					<?php
					for($i = $date; $i <= $date2; $i = $i + 86400){
					echo date( 'Y-m-d', $i )."<br/>";
					}
					?>
					</td>
					<td>
					<?php
					for($i = $date; $i <= $date2; $i = $i + 86400){
					$dta2 = mysqli_query($koneksi,"select distinct(time(absensi_in)) as 'jam' 
					from absensi where 
					user_absensi='".$row3['id_pegawai']."' and 
					date(absensi_in) = '".date('Y-m-d', $i)."' and time(absensi_in) < time('12:00:00') limit 1");
						if (mysqli_num_rows($dta2 ) == 0){
						echo "-<br/>";    						
}else{
						foreach($dta2 as $baris){
							 echo $baris['jam']."<br/>";
						}
}
					}
					?>
					</td>
					<td><?php
					for($i = $date; $i <= $date2; $i = $i + 86400){
					$dbData2 = mysqli_query($koneksi,"select distinct(time(absensi_in)) as 'jam'
					from absensi where 
					user_absensi='".$row3['id_pegawai']."' and
					date(absensi_in) = '".date('Y-m-d', $i)."' and time(absensi_in) > time('12:00:00') limit 1");
						
						if (mysqli_num_rows($dbData2 ) == 0){
							echo "-<br/>";    						
						}else{
							foreach($dbData2 as $row2){
								echo $row2['jam']."<br/>";
							}
						}
					}
					?>
					</td>
					<td>25</td>
					<td><?php 
					$datas =  mysqli_query($koneksi,"select COUNT(user_absensi) as 'jumlah_absen' from absensi where user_absensi = '".$row3['id_pegawai']."'");
					
						foreach($datas as $rows){ 
							echo $rows['jumlah_absen'];
						}
					?>
					</td>
				</tr>
		<?php } ?>
		</tbody>
		</table>
		<script src="https://code.jquery.com/jquery-3.4.1.slim.min.js" integrity="sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js" integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6" crossorigin="anonymous"></script>
	</body>
</html>

