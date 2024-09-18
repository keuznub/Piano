import './style.css'
import * as Tone from "tone"


const synth = new Tone.Synth().toDestination()
let keys = document.querySelectorAll('.key')
for(let key of keys){
  let dataNote = key.getAttribute('data-note')
  key.addEventListener('mousedown', () => playNote(dataNote))
  key.addEventListener('mouseup', () => stopNote())
  key.addEventListener('mouseleave', () => stopNote())
}


function playNote(note){
  synth.triggerAttackRelease(note);
}

function stopNote(){
  synth.triggerRelease();
}
