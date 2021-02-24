<?php
//connDB.php
class  lidhdb {
private $connection =null;

public function __construct($dbhost, $dbname, $user, $pass)
{
try{
$this->connection=new PDO("mysql:host={$dbhost};dbname={$dbname};", $user, $pass);
$this->connection->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION) . "<br/>";
$this->connection->setAttribute(PDO::ATTR_DEFAULT_FETCH_MODE, PDO::FETCH_ASSOC) . "<br/>";

echo "Lidhja me BDH eshte realizuar me sukses ! <br/>";

}
catch(Exception $e) {
throw new Exception ($e->getMessage());

}

}

public function getConnection(){
return $this->connection;
}
}

$konektoDB= new lidhdb("localhost","databaza","root","");
$konektoDB->getConnection();
?>


