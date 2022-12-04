// adding system time
function clock(){
    var time= new Date();
    var hour=time.getHours();
    var mint=time.getMinutes();
    var sec=time.getSeconds();

// target in html divs

document.getElementById("hr").innerHTML = hour;
document.getElementById("mi").innerHTML= mint;
document.getElementById("se").innerHTML= sec;

// changing 24hour format to 12 hour format with "AM" and "PM".
if(hour>12){
    hour = hour-12;
    document.getElementById("hr").innerHTML = hour;
    document.getElementById("text-ampm").innerHTML="PM"
}
else{
document.getElementById("text-ampm").innerHTML="AM";}
}
setInterval(clock,1000); //here 1000 is mili-seconds so it is treated as 1 sec.

function valuediv1(){
    // for wakeup
    var values1=document.getElementById("wake-select");
    var valuesMsg1=values1.options[values1.selectedIndex].text;
    document.getElementById("valueMsg1").innerHTML="Wake-Up Time: " + valuesMsg1;

}
function valuediv2(){
        // for party
        var values2=document.getElementById("lunch-select");
        var valuesMsg2=values2.options[values2.selectedIndex].text;
        document.getElementById("valueMsg2").innerHTML="Lunch Time: " + valuesMsg2;
}
function valuediv3(){
    // for nap
    var values3=document.getElementById("nap-select");
    var valuesMsg3=values3.options[values3.selectedIndex].text;
    document.getElementById("valueMsg3").innerHTML="Nap Time: " + valuesMsg3;
}
function valuediv4(){
    // for night
    var values2=document.getElementById("night-select");
    var valuesMsg2=values2.options[values2.selectedIndex].text;
    document.getElementById("valueMsg4").innerHTML="Night Time: " + valuesMsg2;
}

function settime(){
    var i = document.getElementById("wake-select").value;
    var j = document.getElementById("lunch-select").value;
    var k = document.getElementById("nap-select").value;
    var l = document.getElementById("night-select").value;
    var hourr=new Date().getHours();

    if(i== hourr){

        document.getElementById("image-select").style.backgroundImage= "url(./goodMorning.png)";
        document.getElementById("left-scr-msg").innerHTML="WakeUp and See The Sun-Shine";
    }
    else if(j==hourr){
        document.getElementById("image-select").style.backgroundImage= "url(./partyTime.png)";
        document.getElementById("left-scr-msg").innerHTML="Let's make a Party";
    }
    else if(k==hourr){
        document.getElementById("image-select").style.backgroundImage= "url(./goodEvening.png)";
        document.getElementById("left-scr-msg").innerHTML="it's time to tea";
    }
    else if(l==hourr){
        document.getElementById("image-select").style.backgroundImage= "url(./goodNight.png)";
        document.getElementById("left-scr-msg").innerHTML="Relax And Take Rest!!";
    }
    else{
        document.getElementById("image-select").style.backgroundImage= "url(./constant.jpg)";
        document.getElementById("left-scr-msg").innerHTML="Set Alaram!!";

    }

    valuediv1();
    valuediv2();
    valuediv3();
    valuediv4();
}

function msg2(){
    var newtime = new Date();
    var hrr = newtime.getHours();

 if(hrr>=4 && hrr<12){
    document.getElementById("right-scr-msg").innerHTML="Just know that you always bring out the best in me. Good morning, sunshine!";
}
else if(hrr>=12 && hrr<16){
    document.getElementById("right-scr-msg").innerHTML="What a beautiful day. Try to leave work early to enjoy this wonderful day.";
}
else if(hrr>=16 && hrr>20){
    document.getElementById("right-scr-msg").innerHTML="Evenings are for relaxing with a cup of tea and preparing yourself for tomorrow. Good evening buddy!";
}
else if(hrr>=20 || hrr<4){
    document.getElementById("right-scr-msg").innerHTML="May the brightest stars twinkle upon your head while you sleep tonight and may your life shine when you wake up tomorrow. Have a good sleep!";
}


}
msg2();