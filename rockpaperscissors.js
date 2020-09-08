let uTracker = 0;
let cTracker = 0;
let tTracker = 0;
let uwin;
let tie;
let loose;
// creates event listener on buttons to run rps game on button click.
function main(){
  btn1 = document.querySelector('#rock');
  btn1.addEventListener('click', ()=>{
    let [uwin, tie, loose] = game('rock');// calc game winner
    let [uTracker, tTracker, cTracker] = tracker(uwin, tie, loose); // tracks wins ties and loses
    scoreKeep(uTracker, tTracker, cTracker); // will end game when 5 rounds won have played

  })
  btn2 = document.querySelector('#paper');
  btn2.addEventListener('click',()=>{
  let [uwin, tie, loose] = game('paper');
  let [uTracker, tTracker, cTracker] = tracker(uwin, tie, loose); // tracks wins ties and looses
  scoreKeep(uTracker, tTracker, cTracker); // will end game when 5 rounds won have played

  })
  btn3 = document.querySelector('#scissor');
  btn3.addEventListener('click', ()=>{
  let [uwin, tie, loose] = game('scissor');
  let [uTracker, tTracker, cTracker] = tracker(uwin, tie, loose); // tracks wins ties and looses
  scoreKeep(uTracker, tTracker, cTracker); // will end game when 5 rounds won have played


  })
}

function game(userChoice){
  let computerChoice = Math.random();
  // gets computer choice at random.
  if (computerChoice <= 0.33) {
     computerChoice = "rock";
  } else if (computerChoice >= 0.66){
     computerChoice = "paper";
  }else if (computerChoice > 0.33 && computerChoice < .66){
     computerChoice = "scissor";
  }

  //decides who is winner comparing user choice vs computer choice. adds event outcome onto webpage
  if (userChoice === "rock" && computerChoice === "scissor"){
    let results = document.querySelector('#results');
    results.textContent = `YOU selected ${userChoice} and robot selected ${computerChoice}, YOU WIN!!`;
     uwin = true;
     tie = false;
     loose = false;
    return [uwin, tie, loose];

  }else if (userChoice === "scissor" && computerChoice === "paper"){
    let results = document.querySelector('#results');
    results.textContnet =`YOU selected ${userChoice} and robot selected ${computerChoice}, YOU WIN!!`;
     uwin = true;
     tie = false;
     loose = false;
    return [uwin, tie, loose];

  }else if (userChoice === "paper" && computerChoice === "rock"){
    let results = document.querySelector('#results');
    results.textContent = `YOU selected ${userChoice} and robot selected ${computerChoice}, YOU WIN!!`;
     uwin = true;
     tie = false;
     loose = false;
    return [uwin, tie, loose];

  }else if(userChoice === computerChoice){
    let results = document.querySelector('#results');
    results.textContent = `YOU selected ${userChoice} and robot selected ${computerChoice}, TIE GAME!!`;
     uwin = false;
     tie = true;
     loose = false;
    return [uwin, tie, loose];

  }else{
    let results = document.querySelector('#results');
    results.textContent = `YOU selected ${userChoice} and robot selected ${computerChoice}, ROBOT WINS!!`;
     uwin = false;
     tie = false;
     loose = true;
    return [uwin, tie, loose];
  }
}


function tracker (uwins, tie, loose){

  if (uwins == true){
    uTracker++; // adds +1 to score if condition is met
    let pageTracker = document.querySelector('#userWins');
    pageTracker.textContent = `You: ${uTracker}`;
    return [uTracker, tTracker, cTracker] // send to scoreKeep function

  }else if(tie == true){
    tTracker++;// adds +1 to score if condition is met
    let pageTracker1 = document.querySelector('#tie')
    pageTracker1.textContent = `Tie: ${tTracker}`
    return [uTracker, tTracker, cTracker]

  }else if (loose == true){
    cTracker++;// adds +1 to score if condition is met
    let pageTracker2 = document.querySelector('#robotWins')
    pageTracker2.textContent= `Robot: ${cTracker}`
    return [uTracker, tTracker, cTracker] // send to scoreKeep function

  }else{
    console.log('Error')
  }
}

//ends the game when first 5 wins is met. creates replay button.
function scoreKeep(uTracker, tTracker, cTracker){
  if (uTracker == 5){
    let finalResults = document.querySelector('#theResults');
    finalResults.textContent = 'YOU HAVE DEFEATED THE MACHINE!!!';

    refreshButton = document.createElement('button'); // creates relaod game button
    finalResults.appendChild(refreshButton);
    refreshButton.addEventListener('click',()=>{   // reloads game.
      window.location.reload();
    })
    refreshButton.textContent = 'CLICK HERE to play again!';
  }else if (cTracker == 5) {
    let finalResults = document.querySelector('#theResults');
    finalResults.textContent = 'YOU HAVE BEEN DEFEATED BY THE MACHINE!!!';

    refreshButton = document.createElement('button'); // creates relaod game button
    finalResults.appendChild(refreshButton);
    refreshButton.addEventListener('click',()=>{   // reloads game.
      window.location.reload();
  })
  refreshButton.textContent = 'CLICK HERE to play again!';
  }else{
    console.log('The game is not over')
  }
}

main()
