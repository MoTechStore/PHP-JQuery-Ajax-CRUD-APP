<?php
$id = $_POST["sid"];
$dbh = new PDO("mysql:host=localhost;dbname=schooldb","root","M@tech@pp1234");
$sql = "UPDATE schoolstudents SET firstname = :firstname, lastname= :lastname, course = :course WHERE id = $id";
$addStudentsQuery = $dbh->prepare($sql);
$addStudentsQuery->bindParam(":firstname",$_POST["firstname"],PDO::PARAM_STR);
$addStudentsQuery->bindParam(":lastname",$_POST["lastname"],PDO::PARAM_STR);
$addStudentsQuery->bindParam(":course",$_POST["course"],PDO::PARAM_STR);
$addStudentsQuery->execute();

?>