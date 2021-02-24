<?php

class Perdoruesi extends lidhdb{

public function getALL_Perdoruesi(){

$array=array();
$conn=$this->getConnection();


$rezult=$conn->query("select * from Perdoruesi");

while($row=$rezult->fetchAll()){
$array[]=$row;
}
return $array;

}

}



?>