const subhanAllahDisplay=document.getElementById('subhanAllahDisplay');
const subhanAllahIncrimentBtn=document.getElementById('subhanAllahIncrimentBtn');
const subhanAllahDecrimentBtn=document.getElementById('subhanAllahDecrimentBtn');



const alhamdulillahDisplay=document.getElementById('alhamdulillahDisplay');
const alhamdulillahIncrimentBtn=document.getElementById('alhamdulillahIncrimentBtn');
const alhamdulillahDecrimentBtn=document.getElementById('alhamdulillahDecrimentBtn');



const allahAkberDisplay=document.getElementById('allahAkberDisplay');
const allahAkberIncrimentBtn=document.getElementById('allahAkberIncrimentBtn');
const allahAkberDecrimentBtn=document.getElementById('allahAkberDecrimentBtn');


const resetBtn=document.getElementById('resetBtn');
resetBtn.addEventListener('click',function(){
    subhanAllahDisplay.innerText=0;
    alhamdulillahDisplay.innerText=0;
    allahAkberDisplay.innerText=0;
})

let subhanAllahinitialValue=0;
let alhamdulillahinitialValue=0;
let allahAkberinitialValue=0;



subhanAllahIncrimentBtn.addEventListener('click',function(){
    if(subhanAllahinitialValue===33){
        return alert('all done go to next one')
    }
    subhanAllahinitialValue +=1;
   subhanAllahDisplay.innerText=subhanAllahinitialValue;
})
subhanAllahDecrimentBtn.addEventListener('click',function(){
    if(subhanAllahinitialValue===0){
      return alert('minus is not allowed')
    }
    subhanAllahinitialValue -=1;
   subhanAllahDisplay.innerText=subhanAllahinitialValue;
})

alhamdulillahIncrimentBtn.addEventListener('click',function(){
    if(alhamdulillahinitialValue===33){
        return alert('all done go to next one')
    }
    alhamdulillahinitialValue +=1;
   alhamdulillahDisplay.innerText=alhamdulillahinitialValue;
})
alhamdulillahDecrimentBtn.addEventListener('click',function(){
    if(alhamdulillahinitialValue===0){
      return alert('minus is not allowed');
    }
    alhamdulillahinitialValue -=1;
   alhamdulillahDisplay.innerText=alhamdulillahinitialValue;
})


allahAkberIncrimentBtn.addEventListener('click',function(){
    if(allahAkberinitialValue===33){
        return alert('all done go to next one')
    }
    allahAkberinitialValue +=1;
    allahAkberDisplay.innerText=allahAkberinitialValue;
})
allahAkberDecrimentBtn.addEventListener('click',function(){
    if(allahAkberinitialValue===0){
      return alert('minus is not allowed')
    }
    allahAkberinitialValue -=1;
    allahAkberDisplay.innerText=allahAkberinitialValue;
})






