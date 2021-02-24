<?php

include_once 'dbConnect.php';
class mBDH extends lidhdb{


public function krijoTabel($sql){
try{
$conn=$this->getConnection();
$conn->exec($sql);
echo "Tabela eshte krijuar me Suksses: <br/>";

}
catch (PDOException $e){
echo $sql."<br/>".$e->getMessage();
}
$conn=null;
}
}

$table="Create table if not exists `Perdoruesi`(
`ID_p` int not null AUTO_INCREMENT Primary key,
`Emri` varchar(50) not null,
`Password` varchar(30) not null
)";

$table= "Insert into `Perdoruesi`(ID_p,Emri,Password)

Values ('','labinot','1234')";

$table= "Insert into `Perdoruesi`(ID_p,Emri,Password)

Values ('','Filan','1234')";


$newTable = new mBDH("localhost","databaza","root","");
$newTable->krijoTabel($table);


?>



