const element=document.querySelector("#app");


let ants=[];

console.log(ants.length);

function setup(){
     createCanvas(element.clientWidth,element.clientHeight).parent(element)     
     
     angleMode(DEGREES);
     noStroke();
     background(0)
     frameRate(240);
     pixelDensity(1);
     
     
     for (let index = 0; index <10000; index++) {
         ants.push(new Ant());
     }
     for (let index = 0; index < ants.length; index++) {
         ants[index].display()
     }
         
     console.log(ants[0]);
     

    }
    
  function  draw(){
    // console.log(ants);
    
        background(0,10)
        loadPixels();
        for (let index = 0; index < ants.length; index++) {
            ants[index].update()
        }
    }





