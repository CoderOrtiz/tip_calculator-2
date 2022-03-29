// Function Expression
const calculate = function () {

    // Arrow Function
    const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;

    // calcAverage called twice with two different set values and stored in two different variables
    const team1Scores = calcAverage(44, 23, 71);
    const team2Scores = calcAverage(65, 540, 49);

    // The winning team must score at least twice as much as the other team to win
    if (team1Scores >= 2 * team2Scores) {
        document.querySelector("h3").textContent = `Team 1 wins with a score of ${team1Scores} vs ${team2Scores}.`;
    }
    else if (team2Scores >= 2 * team1Scores) {
        document.querySelector("h3").textContent = `Team 2 wins with a score of ${team2Scores} vs ${team1Scores}.`;
    }
    else {
        document.querySelector("h3").textContent = `Neither team quailifies.`;
    }
}
