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

    printLetterByLetter('lastlogin',printDate,100);
}

function printStarterText(){
    printCurrDate();
    printLetterByLetter('defaultmsg', 'avarubin@Avas-Portfolio ~ %', 100);
}




