//UI
const togglebtn = document.getElementById('toggle');
const openbtn = document.getElementById('open');

const modal = document.getElementById('modal');
const closebtn = document.getElementById('close');

//Event listener nav
togglebtn.addEventListener('click',()=>{
	document.body.classList.toggle('shownav');
});

// Show Modal
openbtn.addEventListener('click',()=>{
	modal.classList.add('showmodal');
});

// Close modal
closebtn.addEventListener('click',()=>{
    modal.classList.remove('showmodal');
});

// // Hide modal on outside click
// window.addEventListener('click',(e)=>{
//     if(e.target===modal){
//     	modal.classList.remove('showmodal');
//     }
// });

window.addEventListener('click',(e)=>e.target === modal ? modal.classList.remove('showmodal') : false);