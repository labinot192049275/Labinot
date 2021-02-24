<?php

include_once 'dbConnect.php';
include_once 'Perdoruesi.php';



$Perdoruesi= new Perdoruesi('localhost','databaza','root','');

?>

<!Doctype html>
<html>
<body>

<table>
<thead>
<tr>
<th> ID_p </th>
<th> Emri </th>
<th> Password </th>

</tr>
</thead>
<?php
$arrayPerdoruesi=$Perdoruesi->getALL_Perdoruesi();
/*echo "<pre>";
var_dump($arrayPerdoruesi);
echo "</pre>";*/


$keys=array_keys($arrayPerdoruesi);

for($i=0;$i<count($arrayPerdoruesi);$i++){

    foreach($arrayPerdoruesi[$keys[$i]] as $key=>$x){
?>
<tr>
    <td><?php echo $x["ID_p"]; ?> </td>
    <td><?php echo $x["Emri"]; ?> </td>
    <td><?php echo $x["Password"]; ?> </td>
</tr>
<?php
}
}
?>


</table>
</body>
</html>