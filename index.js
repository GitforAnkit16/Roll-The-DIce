var ranNo1 = Math.floor(Math.random()*6)+1;
document.querySelector(".img1").setAttribute("src",'./images/dice'+ranNo1+'.png');
var ranNo2 = Math.floor(Math.random()*6)+1;
document.querySelector(".img2").setAttribute("src",'./images/dice'+ranNo2+'.png');
if(ranNo1>ranNo2){
    document.querySelector("h1").innerHTML="Player1 Wins";
}
else if(ranNo1<ranNo2){
    document.querySelector("h1").innerHTML="Player2 Wins";
}
else  {
    document.querySelector("h1").innerHTML="Draw";
} 





