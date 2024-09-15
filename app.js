let confirmsg=confirm("Do you want to play rock,paper,scissor game");
if(confirmsg){
let userinput=prompt("Enter your choise(rock,paper,scissor)");
if(userinput===""){
    alert("You hava not entered (rock,paper,scissor)!");
}else if(!userinput) {
  let inp=confirm("Are you sure to quit");
  if(inp){
    alert("Thank you!");
  }else{
    location.reload();
  }
}
userinput=userinput.trim().toLowerCase();
if(userinput==="rock" || userinput==="paper" || userinput==="scissor"){
let computernumber=Math.floor(Math.random()*3+1);
let computerinput;
computerinput=computernumber===1?"rock":computernumber===2?"paper":"scissor";
  if(userinput===computerinput){
    confirm(`COMPUTER:${computerinput} \n USER:${userinput}\n MATCH TIE!`)
  }
  else if(userinput==="paper" && computerinput==="scissor"){
    confirm(`COMPUTER:${computerinput} \n USER:${userinput}\n COMPUTER WINS!`)
  }
  else if(userinput==="paper" && computerinput==="rock"){
    confirm(`COMPUTER:${computerinput} \n USER:${userinput}\n YOU WON!`)
  }
  else if(userinput==="rock" && computerinput==="paper"){
    confirm(`COMPUTER:${computerinput} \n USER:${userinput}\n COMPUTER WINS!`)
  }
  else if(userinput==="rock" && computerinput==="scissor"){
    confirm(`COMPUTER:${computerinput} \n USER:${userinput}\n YOU WON!`)
  }
  else if(userinput==="scissor" && computerinput==="rock"){
    confirm(`COMPUTER:${computerinput} \n USER:${userinput}\n COMPUTER WINS!`)
  }
  else if(userinput==="scissor" && computerinput==="paper"){
    confirm(`COMPUTER:${computerinput} \n USER:${userinput}\n YOU WON!`)
  }
  let message= confirm("Do you want to play again");
    if(message){
        location.reload();
    }
    else{
        confirm("Thank You!");
    }
}else{
    alert("You hava not entered (rock,paper,scissor)!")
    location.reload();
   
}
}