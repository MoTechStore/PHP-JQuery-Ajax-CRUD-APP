<?php
$dbh = new PDO("mysql:host=localhost;dbname=schooldb","root","M@tech@pp1234");
$sql = "INSERT INTO schoolstudents(firstname,lastname,course) VALUES (:firstname, :lastname,:course)";
$addStudentsQuery = $dbh->prepare($sql);
$addStudentsQuery->bindParam(":firstname",$_POST["firstname"],PDO::PARAM_STR);
$addStudentsQuery->bindParam(":lastname",$_POST["lastname"],PDO::PARAM_STR);
$addStudentsQuery->bindParam(":course",$_POST["course"],PDO::PARAM_STR);
$addStudentsQuery->execute();

?>