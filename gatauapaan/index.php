<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width,
    initial-scale=1.0">
    <title>Set Alarm</title>
    <link rel="stylesheet" href="style.css">
</head>

<body>
    <div id="myBox">
        <div id="time"> 000000 </div>
        <br>
        <h3>Set Alarm Time</h3>
        <select name="" id="alarmHrs"></select>
        <select name="" id="alarmMins"></select>
        <select name="" id="alarmSecs"></select>
        <br>
        <br>
        <div id="myDiv">
            <label for="">Choose Alarm Sound : </label>
            <br>
            <select name="" id="mySelect"></select>
        </div>
        <button id="mySetButton">Alarm Set</button>
        <button id="myClearButton">Alarm Clear</button>
    </div>
    <!--Javascript-->
    <!--alarm Action-->
    <script src="app.js"></script>
</body>
</html>