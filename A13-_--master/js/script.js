/* CODE HERE */
const day = document.querySelector('#day');
const hour = document.querySelector('#hour');
const minute = document.querySelector('#minute');
const seconde = document.querySelector('#second');
const deadline = "02 Nov 2020"

function countdownTimer() {
    /* CODE HERE */
    const deadlinedate = new Date(deadline);
    const currentdate = new Date().getTime();
    const timeinseconde = (deadlinedate - currentdate)/1000;
    const dayremaining = Math.floor(timeinseconde / 3600/24);
    const hourremaining = Math.floor(timeinseconde/3600 % 24);
    const minuteremaining = Math.floor(timeinseconde/60)% 60;
    const seconderemaining = Math.floor(timeinseconde) %60;
    
    day.innerHTML = formattime(dayremaining) ;
    hour.innerHTML = formattime(hourremaining) ;
    minute.innerHTML = formattime(minuteremaining) ;
    seconde.innerHTML = formattime(seconderemaining) ;
}
// countdownTimer();
//execute in the setInterval
setInterval(countdownTimer,1000);
/* CODE HERE */


// fonction ecriture normale
    // function formattime(time){
    //     if(time <10){
    //     return'0'+ time
    //      }else{
    //         return time
    //      }
    // }
    // condition ternaire simpliflie l'ecriture a utiliser 
    function formattime(time){
        return time < 10 ? '0' + time : time;
    }


