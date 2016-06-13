<?php
include("config.php");

function addRoom($ime_sobe, $broj_kvadrata, $broj_kreveta){
	global $conn;
	$rarray = array();
	$stmt = $conn->prepare("INSERT INTO sobe (ime_sobe, broj_kvadrata, broj_kreveta) VALUES (?, ?, ?)");
	$stmt->bind_param("sii", $ime_sobe, $broj_kvadrata, $broj_kreveta);
	if($stmt->execute()){
		$rarray['sucess'] = "ok";
	}else{
		$rarray['error'] = "Database connection error";
	}
	return json_encode($rarray);
}

function addHotel($ime_hotela){
	global $conn;
	$rarray = array();
	$stmt = $conn->prepare("INSERT INTO hotel (ime_hotela) VALUE (?)");
	$stmt->bind_param("s", $ime_hotela);
	if($stmt->execute()){
		$rarray['sucess'] = "ok";
	}else{
		$rarray['error'] = "Database connection error";
	}
	return json_encode($rarray);
}

?>