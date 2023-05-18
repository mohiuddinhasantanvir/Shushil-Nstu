score=0;
cross=true;
audio1=new Audio('audio1.wav');
audio2=new Audio('audio2.mp3');

document.onkeydown = function(e)
{
    console.log("key code is: ", e.keyCode)
    if(e.keyCode==38 || e.keyCode==32)
    {
        ami= document.querySelector('.ami');
        ami.classList.add('animateami');
        setTimeout(() => {
            ami.classList.remove('animateami')},700);
        }
        else if(e.keyCode==39)
        {
            ami= document.querySelector('.ami');
            x1=parseInt(window.getComputedStyle(ami,null).getPropertyValue('left'));
            ami.style.left=(x1+112)+"px";
            }
            else if(e.keyCode==37)
                {
                ami= document.querySelector('.ami');
                x1=parseInt(window.getComputedStyle(ami,null).getPropertyValue('left'));
                ami.style.left=(x1-112)+"px";
                }
    }
setInterval(() => {
    ami = document.querySelector('.ami');
    gameOver=document.querySelector('.gameOver');
    obstacle= document.querySelector('.obstacle');
    x1=parseInt(window.getComputedStyle(ami,null).getPropertyValue('left'));
    y1=parseInt(window.getComputedStyle(ami,null).getPropertyValue('top'));
    x2=parseInt(window.getComputedStyle(obstacle,null).getPropertyValue('left'));
    y2=parseInt(window.getComputedStyle(obstacle,null).getPropertyValue('top'));
    offsetX=Math.abs(x1-x2);
    offsetY=Math.abs(y1-y2);
    if(offsetX<73 && offsetY<52)
    {
        gameOver.style.visibility='visible';
        obstacle.classList.remove('obstacleani');
        audio1.play();
        setTimeout(()=> {
            audio1.pause();
            audio2.pause();
        },500);
    }
    else if(offsetX<145&&cross)
    {
        score++;
        updateScore(score);
        setTimeout(() => {
            audio2.play();
            }, 1000);
        cross=false;
        setTimeout(()=>{
            cross=true;
        },1000);
        setTimeout(()=>{
            aniDuration=parseFloat(window.getComputedStyle(obstacle,null).getPropertyValue('animation-duration'));
            newDuration=aniDuration-.0005;
            obstacle.style.animationDuration = newDuration + 's';
        },500);       
    }
}, 10);
function updateScore(score)
{
    scoreCount.innerHTML = "Skipped Seminars: " + score;
}