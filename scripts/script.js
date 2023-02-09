
//get el
const outputEl=document.getElementById('output');
const btnCopyEl=document.getElementById('btn-copy');
const lengthEl=document.getElementById('length');
const numbersEl=document.getElementById('number');
const capitalEl=document.getElementById('capital');
const smallEl=document.getElementById('small');
const symbolEl=document.getElementById('symbol');
const buttonEl=document.getElementById('submit');
const formEl=document.getElementById('form')



//copy
btnCopyEl.addEventListener('click',async()=>{
    const password=outputEl.value;


    if(password){
        await navigator.clipboard.writeText(password);
        alert("Copied to clipboard");
    }else{
      alert("There is no password to copy");
    }
  
})
//random function
function generateRandomChar(min,max){
  const limit=max-min+1;
  return String.fromCharCode(Math.floor(Math.random()*limit)+min)
}
//calling random and assigning value ascii value
function numberValue(){
  return generateRandomChar(48,57);
}

function capitalValue(){
  return generateRandomChar(65,90);
}

function smallValue(){
  return generateRandomChar(97,122);
}

function symbolValue(){
  const symbols="!@#$%^&*/*-.,+?~"
  return symbols[Math.floor(Math.random()*symbols.length)]
}

//assigning types & random ascii value in array
const functionArray=[
  {
    element:numbersEl,
    fun:numberValue
  },
  {
    element:capitalEl,
    fun:capitalValue
  },
  {
    element:smallEl,
    fun:smallValue
  },
  {
    element:symbolEl,
    fun:symbolValue
  }
];

formEl.addEventListener('submit',(e)=>{
  e.preventDefault();
  const limits=lengthEl.value;

  let generatePassword="";

  const funArray=functionArray.filter(({element})=>element.checked);
  console.log(funArray)

  for(i=0;i<limits;i++){
    const index=Math.floor(Math.random()*funArray.length);

   const letter=funArray[index].fun();
   generatePassword=generatePassword+letter;
  }
  outputEl.value=generatePassword;
});