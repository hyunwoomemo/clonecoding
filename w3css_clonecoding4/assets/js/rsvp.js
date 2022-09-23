const rsvpBtn = document.querySelector('#RSVP');
const inputBox = document.querySelector('.input-box');
const removeBg = document.querySelector('.remove-bg');


rsvpBtn.addEventListener('click', (e) => {
  inputBox.classList.remove('hidden');
  removeBg.classList.remove('hidden');
})

removeBg.addEventListener('click', (e) =>{
  inputBox.classList.add('hidden');
  removeBg.classList.add('hidden');
})