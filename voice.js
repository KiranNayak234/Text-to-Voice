// let speech=new SpeechSynthesisUtterance();

// document.getElementById("click",()=>{
//     speech.text =document.getElementById("text").value;
//     window.speechSynthesis.speak(speech);
// })


let sp=new SpeechSynthesisUtterance();

document.getElementById("button").addEventListener("click",()=>{
    sp.text =document.getElementById("text").value;
    window.speechSynthesis.speak(sp);
})