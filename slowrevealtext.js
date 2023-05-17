function printLetterByLetter(destination, message, speed){
    var i = 0;
    var interval = setInterval(function(){
        document.getElementById(destination).innerHTML += message.charAt(i);
        i++;
        if (i > message.length){
            clearInterval(interval);
        }
    }, speed);
}

function printCurrDate(){
    currDate =  new Date();
    
    var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August','September','November','December'];
    month = months[currDate.getMonth()];
    
    date = currDate.getDate();
    
    var days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat'];
    day = days[currDate.getDay()];

    hour = currDate.getHours().toString().padStart(2, '0');
    min = currDate.getMinutes().toString().padStart(2, '0');
    sec = currDate.getSeconds().toString().padStart(2, '0');

    printDate = "Last login: " + day + " " + month + " " + date + " " + hour + ":" + min + ":" +sec;

    printLetterByLetter('lastlogin',printDate,65);
}

function printStarterText(){
    printCurrDate();
    setTimeout(function() {
        printLetterByLetter('defaultmsg', 'avarubin@Avas-Portfolio ~ % ', 65);
      }, 2600);
      setTimeout(function() {
        printLetterByLetter('defaultmsg', 'ls', 65);
      }, 5000);
      setTimeout(function() {
        document.getElementById('project1').innerHTML = 'project 1';
        document.getElementById('project2').innerHTML = 'project 2';
        document.getElementById('project3').innerHTML = 'project 3';
      }, 5600);
}




