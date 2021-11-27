<?php

$dbh = new PDO("mysql:host=localhost;dbname=schooldb","root","M@tech@pp1234");
$sql = "SELECT * FROM schoolstudents";
$studentQuery = $dbh->query($sql);
$getStudents = $studentQuery->fetchAll(PDO::FETCH_ASSOC);
print_r(json_encode($getStudents));

?>