// Write a function, which takes a non-negative integer (seconds) as input and returns the time in a human-readable format (HH:MM:SS)
//
// HH = hours, padded to 2 digits, range: 00 - 99
// MM = minutes, padded to 2 digits, range: 00 - 59
// SS = seconds, padded to 2 digits, range: 00 - 59
// The maximum time never exceeds 359999 (99:59:59)

function humanReadable (seconds) {
    if(seconds===0){
        return '00:00:00'
    }
    const hour=Math.floor(seconds/3600)
    console.log(hour)
    const minute=Math.floor((seconds-Math.floor(seconds/3600)*3600)/60)
    console.log(minute)
    const sec=seconds-Math.floor(seconds/3600)*3600-Math.floor((seconds-Math.floor(seconds/3600)*3600)/60)*60
    console.log(sec)
    return `${hour < 10 ? '0'+hour:hour}:${minute < 10 ? '0'+minute:minute}:${sec < 10 ? '0'+sec:sec}`;
}