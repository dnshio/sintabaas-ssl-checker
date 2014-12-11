<?php

//lines = file_get_contents('syslog');

$filename = "syslog";
$fp = fopen( $filename, "r" ) or die("Can't open File");
while ( ! feof( $fp )  ) {
    $url = fgets($fp);
    $file = file_get_contents($url, "r");
    echo $file;
}