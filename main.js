import getNoteFromKey from './noteUtils'
import './style.css'
import * as Tone from "tone"

const synth = new Tone.Sampler({
	urls: {
		C4: "sound/C4.mp3",
		D4: "sound/D4.mp3",
		F4: "sound/F4.mp3",
		A4: "sound/A4.mp3",
	},
	release: 1,
	baseUrl: "https://tonejs.github.io/audio/salamander/",
}).toDestination();

let keys = document.querySelectorAll('.key')
for(let key of keys){
  let dataNote = key.getAttribute('data-note')
  key.addEventListener('mousedown', () => playNote(dataNote))
  key.addEventListener('mouseup', () => stopNote)
  key.addEventListener('mouseleave', () => stopNote)
}

document.addEventListener("keypress", ctrlTeclado)
document.addEventListener("keyrelease", stopNote)

function ctrlTeclado(event){
  let note = getNoteFromKey(event.key)
  playNote(note)

}


function playNote(note){
  synth.triggerAttackRelease(note);
}

function stopNote(){
  synth.triggerRelease();
}
