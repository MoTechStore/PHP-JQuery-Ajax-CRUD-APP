<?php
$id = $_POST["sid"];
$dbh = new PDO("mysql:host=localhost;dbname=schooldb","root","M@tech@pp1234");
$sql = "DELETE FROM schoolstudents WHERE id = $id";
$getStudents = $dbh->prepare($sql);
$getStudents->execute();

?>