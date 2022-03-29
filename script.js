const info = function(){

const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3; 
const team1Scores = calcAverage(44, 530, 71);
const team2Scores = calcAverage(65, 54, 49);

const checkWinner = team1Scores > team2Scores ? `Team 1 wins with a score of ${team1Scores} vs ${team2Scores}` : `Team 2 wins with a score of ${team2Scores} vs ${team1Scores}.`;
document.querySelector("h3").textContent = checkWinner;

}