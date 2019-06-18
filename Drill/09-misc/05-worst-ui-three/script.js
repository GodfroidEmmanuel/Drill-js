/* becode/javascript
 *
 * /09-misc/05-worst-ui-three/script.js - 9.5: la pire interface (3) : phone slot
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    /*
    let a=document.getElementById('target');
    let txt=a.innerText
    let one=document.querySelector('#part-one').innerHTML
    a.innerText=""
    let newElement = document.createElement("span");
    
    let nb1= 460
    let nb2= 0
    let nb3= 0
    let nb4= 0
    
    newElement.innerText=txt="460"
    a.appendChild(newElement)
    newElement.setAttribute('class','un')
    
    let newElement2 = document.createElement("span");
    newElement2.innerText=txt="00"
    a.appendChild(newElement2)
    newElement2.setAttribute('class','deux')
    
    let newElement3 = document.createElement("span");
    newElement3.innerText=txt="00"
    a.appendChild(newElement3)
    newElement3.setAttribute('class','trois')
    
    let newElement4 = document.createElement("span");
    newElement4.innerText=txt="00"
    a.appendChild(newElement4)
    newElement4.setAttribute('class','quatre')
    let c=document.querySelector('#part-one').value;
    
    let test = document.querySelector("#part-one").innerHTML= c

    
    
    if (test > 459 && test < 501) {
        test++
        document.querySelector(".un").innerHTML = nb1;
    
        }
        if (nb1 === 499){
            nb1=460;
        }
    
    
   
    
    if (nb2 >= 00 && nb2 < 101) {
        
        document.querySelector(".deux").innerHTML = nb2++;
        document.querySelector("#part-two").innerHTML=nb2++
        }
        if (nb2 === 100){
            nb2=00;
        }
        if (nb2<10) {
            document.querySelector(".deux").innerHTML = "0"+ nb2;
            document.querySelector("#part-two").innerHTML= "0"+nb2
        }
    
    
   
    
    if (nb3 >= 00 && nb3 < 101) {
        nb3++;
        document.querySelector(".trois").innerHTML = nb3++;
        document.querySelector("#part-three").innerHTML=nb3
        }
        if (nb3 === 100){
        nb3=00;
    }
        if (nb3<10) {
            document.querySelector(".trois").innerHTML = "0"+ nb3;
            document.querySelector("#part-three").innerHTML="0"+ nb3
        }
    
    
    document.querySelector('#part-four').addEventListener('click',()=>{
    
    if (nb4 >= 00 && nb4 < 101) {
        nb4++;
        document.querySelector(".quatre").innerHTML = nb4;
        document.querySelector("#part-four").innerHTML= nb4
        }
        if (nb4 === 100){
            nb4=00;
        }
        if (nb4<10) {
            document.querySelector(".quatre").innerHTML = "0"+ nb4;
            document.querySelector("#part-four").innerHTML= "0"+nb4
        }
    })
    document.addEventListener("DOMContentLoaded", function() {
  
        let c=document.querySelector('#part-one');
        //var time = 1500;
        
      
        c.forEach(function(i) {
          let label = i.children[0];
          let line = i.children[1];
          let count = 460;
          let dataCount = label.getAttribute("data-max");
          let lineCount = line.children[0];
       
          let runTime = time/dataCount;
          
          let animationLineCount = setInterval(function(){
            if(count < dataCount){
              count++;
              label.innerHTML = count + '%';
              lineCount.style.width = count + '%';
            }
          },runTime);
        });
      });
      
    // your code here
    let bout1 = document.querySelector("#part-one");
    let bout2 = document.querySelector("#part-two");
    let bout3 = document.querySelector("#part-three");
    let bout4 = document.querySelector("#part-four");
    */

    let allinput = document.querySelectorAll(".field input");

    for(let i = 0; i < allinput.length; i++){
        let min = allinput[i].getAttribute("data-min")
        let max = allinput[i].getAttribute("data-max")

    
    let counter = setInterval(function() {
    if (allinput[i].value == max){ // when we're outside the range
        allinput[i].value = min
        }
        else{
            allinput[i].value++
        }
    }, 100);
    

    let a=document.getElementById('target');
    let txt=a.innerText
    let one=document.querySelector('#part-one').innerHTML
    a.innerText=""
    let newElement = document.createElement("span");
    
   
    newElement.innerText=txt="460"
    a.appendChild(newElement)
    newElement.setAttribute('class','un')
    
    let newElement2 = document.createElement("span");
    newElement2.innerText=txt="00"
    a.appendChild(newElement2)
    newElement2.setAttribute('class','deux')
    
    let newElement3 = document.createElement("span");
    newElement3.innerText=txt="00"
    a.appendChild(newElement3)
    newElement3.setAttribute('class','trois')
    
    let newElement4 = document.createElement("span");
    newElement4.innerText=txt="00"
    a.appendChild(newElement4)
    newElement4.setAttribute('class','quatre')
    let c=document.querySelector('part-one')

    document.getElementById("fix-part-one").addEventListener("click", () => {
        let valu = allinput[i].getAttribute("value")
        clearInterval(counter)
        document.querySelector(".un").innerHTML = allinput[0].value;
        document.querySelector("#part-one").innerHTML= allinput[0].value;
    
    })

    document.getElementById("fix-part-two").addEventListener("click", () => {

        clearInterval(allinput[1].value);
        document.querySelector(".deux").innerHTML = allinput[1].value;
        document.querySelector("#part-two").innerHTML= allinput[1].value;
    
    })
    document.getElementById("fix-part-three").addEventListener("click", () => {

        clearInterval(allinput[2].value);
        document.querySelector(".trois").innerHTML = allinput[2].value;
        document.querySelector("#part-three").innerHTML= allinput[2].value;
    
    })
    document.getElementById("fix-part-four").addEventListener("click", () => {

        clearInterval(allinput[3].value);
        document.querySelector(".quatre").innerHTML = allinput[3].value;
        document.querySelector("#part-four").innerHTML= allinput[3].value;
    
    })
}
    
})();

