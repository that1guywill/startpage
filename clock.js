function updateClock() {
    let time = new Date();
    document.getElementById('clock').innerHTML = time.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true }) ;
    setTimeout(updateClock, 1000);
}

updateClock();