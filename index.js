function shout(string){
    return string.toUpperCase();
}

function whisper(string){
    return string.toLowerCase()
}

string= 'hello'
function logShout(string){
    console.log(string.toUpperCase());
}
console.log(string.toUpperCase())

function logWhisper(string){
    console.log(string.toLowerCase())
}
console.log(string.toLowerCase())

let string
function sayHiToHeadphonedRoommate(string){
    if (string.toLowerCase()=== string){
        return "I can't hear you!"
    }
    if (string.toUpperCase()=== string){
        return "YES INDEED!"
    }
    if (string==="Let's have dinner together!"){
        return "I would love to!"
    }
}