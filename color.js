var numSq=6;

var color=[];

var colorpicked;
var squares=document.querySelectorAll(".square");

var picking=document.querySelector("#rgb");
var tryagain=document.querySelector("#try");
var h1=document.querySelector("h1");
var resetbutton=document.querySelector("#resetbutton");
var mode=document.querySelectorAll(".mode");
init();
picking.textContent=colorpicked;



// var easybtn=document.querySelector("#easybtn");
// var hardbtn=document.querySelector("#hardbtn");

function init(){
  compare();
  setupSquares();
    reset();
}

function compare(){
    for(var i=0;i<mode.length;i++)
    {
        mode[i].addEventListener("click",function(){
            // mode.classList.remove("selected");
            // mode.classList.remove("selected");
            
            mode[0].classList.remove("selected");
            mode[1].classList.remove("selected");
            this.classList.add("selected");
            this.textContent==="Easy"?numSq=3:numsq=6;
            reset();
        });
    }
}

function setupSquares()
{
    for(var i=0;i<squares.length ;i++)
    {
        squares[i].style.backgroundColor=color[i];
        
    
    
    
    squares[i].addEventListener("click",function(){
        var clickedColor=this.style.backgroundColor;
        
        if(colorpicked===clickedColor)
        {
            
            tryagain.textContent="Correct";
            resetbutton.textContent="Play Again";
            changeColor(clickedColor);
            h1.style.backgroundColor=clickedColor;
        }
        else{
            this.style.backgroundColor="#232323";
            tryagain.textContent="Try again";
        }
    
            });
        }
}



function reset(){  color=generateColor(numSq);
    colorpicked=pickColor();
    picking.textContent=colorpicked;
    tryagain.textContent="";
    resetbutton.textContent="New Colors"
    for(var i=0;i<squares.length;i++)
    {
       
        if(color[i])
        {
            
            //not working
            
             squares[i].style.display="block";
             
            squares[i].style.backgroundColor=color[i];
           
        }
        else{
            squares[i].style.display="none";
        }
        
    }
    h1.style.backgroundColor="#232323";




}





resetbutton.addEventListener("click",function(){
  reset();
});



function changeColor(color){
    for(var i=0;i<squares.length;i++)
    {
        squares[i].style.backgroundColor=color;
    }
}


function pickColor(){
   var random= Math.floor(Math.random()*color.length);
    return color[random];
}


function generateColor(num)
{
    var arr=[];

    for(var i=0;i<num;i++)
    {
        arr.push(randomColor());
       
    }

    return arr;
}

function randomColor(){
     var r=Math.floor(Math.random()*256);
     var g=Math.floor(Math.random()*256);
     var b=Math.floor(Math.random()*256);

     return "rgb(" + r + ", " + g + ", " + b + ")";
     
}