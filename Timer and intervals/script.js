
// let count =5;

// let trvl = setInterval(() => {

//     if (count >= 0) {
//         console.log(count);
//         count--;
//     }else{
//     clearInterval(trvl);
//     }
// }, 1000)


// Timeout Example and Interval Example

document.getElementById('startTimeout').addEventListener('click', function() {  
    setTimeout(() => {
        document.getElementById('output').innerText = "Timeout executed after 3 seconds!";
    }, 3000);
});


let intervalId; 
document.getElementById('startInterval').addEventListener('click', function() {
    intervalId = setInterval(() => {
        const currentTime = new Date().toLocaleTimeString();
        document.getElementById('output').innerText = "Current Time: " + currentTime;
    }, 1000);
});

document.getElementById('stopInterval').addEventListener('click', function() {
    clearInterval(intervalId);
    document.getElementById('output').innerText = "Interval stopped.";
}); 




//advanced downloading progress bar using AI 

const startBtn = document.getElementById('startDownload');
const progressEl = document.getElementById('progressContainer');
const barEl = document.getElementById('progressBar');
const statusEl = document.getElementById('downloadStatus');
const labelEl = barEl ? barEl.querySelector('.progress__label') : null;

let downloadInterval = null;

function setProgress(value) {
    const clamped = Math.max(0, Math.min(100, value));
    if (barEl) barEl.style.width = clamped + '%';
    if (progressEl) progressEl.setAttribute('aria-valuenow', String(clamped));
    if (labelEl) labelEl.textContent = clamped + '%';
}

function startDownload() {
    if (downloadInterval) return;
    if (startBtn) startBtn.disabled = true;
    if (statusEl) statusEl.textContent = 'Downloading...';
    if (barEl) barEl.classList.remove('is-complete');
    setProgress(0);

    downloadInterval = setInterval(() => {
        const current = parseInt(progressEl?.getAttribute('aria-valuenow') || '0', 10) || 0;
        const step = Math.floor(Math.random() * 4) + 1; // 1-4%
        const next = current + step;
        setProgress(next);

        if (next >= 100) {
            clearInterval(downloadInterval);
            downloadInterval = null;
            setProgress(100);
            if (startBtn) startBtn.disabled = false;
            if (statusEl) statusEl.textContent = 'Download complete!';
            if (barEl) barEl.classList.add('is-complete');
            startBtn.textContent = 'Download Again';
        }
    }, 120);
}

if (startBtn) {
    startBtn.addEventListener('click', startDownload);
}