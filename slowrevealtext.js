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

    hour = currDate.getHours();
    min = currDate.getMinutes();
    sec = currDate.getSeconds();

    printDate = "Last login: " + day + " " + month + " " + date + " " + hour + ":" + min + ":" +sec;

    printLetterByLetter('msg',printDate,100);

    
}




