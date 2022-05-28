const input = document.querySelector('input#validation-input');

//input.addEventListener('focus',onFocusInput);
input.addEventListener('blur',(event)=>{
  let inputText = event.currentTarget;
  if(inputText.value.length===parseInt(inputText.dataset.length)){
    console.log('Sovpalo')
    inputText.className='valid'
  }else {
    inputText.className='invalid'
      console.log(inputText)
  }
});
