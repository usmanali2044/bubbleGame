var score = 0;
var rn =0;
function addBubble(){
    var bubble = "";
    for(var i =1 ;i<=100;i++){
        var rn = Math.floor(Math.random()*10);
        bubble+= `<div id="bubble"><div class="number">${rn}</div></div>`;
    }
    
   
    document.querySelector("#btmpanel").innerHTML = bubble;
}

function addTimer(){
    var timer =60;
    setInterval(function(){
        if(timer>=0){
            document.querySelector("#timerval").textContent =timer;
            timer--;
        }else{
            clearInterval(timer);
            document.querySelector("#btmpanel").innerHTML = `Game Over`;
        }
    },1000)

}
   
function generateHit(){
     rn =Math.floor(Math.random()*10);
    var a= document.querySelector("#hitval");
    a.textContent = rn;
}

    
function addScore(){
    score+=10;
    document.querySelector("#scoreval").textContent = score;
}

document.querySelector("#btmpanel").addEventListener("click",function(dets){
  var num =  (Number(dets.target.textContent));
  if(num==rn){
    addScore();
    addBubble();
    generateHit();

  }

  
})

addBubble();

addTimer();

generateHit();







