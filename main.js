import getNoteFromKey, {synth} from './noteUtils'
import './style.css'
import * as Tone from "tone"

const synth = new Tone.Synth().toDestination();

let keys = document.querySelectorAll('.key')
for(let key of keys){
  let dataNote = key.getAttribute('data-note')
  key.addEventListener('mousedown', () => playNote(dataNote))
  key.addEventListener('mouseup', stopNote)
  key.addEventListener('mouseleave', stopNote)
}

document.addEventListener("keydown", ctrlTeclado)
document.addEventListener("keyup", stopNote)

function ctrlTeclado(event){
  let note = getNoteFromKey(event.key)
  let key = document.querySelector('[data-note="'+note+'"]')
  key && key.classList.add('pressed')
  playNote(note)

}


function playNote(note){
  console.log(note)
  synth.triggerAttack(note);
}

function stopNote(event){
  console.log("Release")
  let note = getNoteFromKey(event.key)
  let key = document.querySelector('[data-note="'+note+'"]')
  key.classList.remove('pressed')
  synth.triggerRelease();
}
