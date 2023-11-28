<?php
date_default_timezone_set("Asia/Jakarta");

class Clock {
    private $jam;

    function __construct($jam) {
      $this->jam = $jam; 
    }
}

class Alarm extends Clock{
  private $alarm;

  function __construct($alarm){
    $this->alarm = $alarm;
    
  }
}

