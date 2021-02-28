
   let num    = document.getElementById('zero');
   let button1 = document.getElementById('increment');
  let button2  = document.getElementById('decrement');
    let int = 0;
  button1.addEventListener('click',(e)=>{
       e.preventDefault()
  
       int = int + 1;
  
       num.innerHTML = int;
   });
  button2.addEventListener('click',(e)=>{
       e.preventDefault();
  
        int = int - 1;
        num.innerHTML = int;
   
  });
   
