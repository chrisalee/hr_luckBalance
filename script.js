/*
 * Complete the 'luckBalance' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER k
 *  2. 2D_INTEGER_ARRAY contests
 */

function luckBalance(k, contests) {
    let balance = 0;
    let importantContestScores = [];

    for(let i = 0; i < contests.length; i++) {
        balance += contests[i][0];
        if(contests[i][1] === 1) importantContestScores.push(contests[i][0]);
    }

    importantContestScores.sort((a, b) => a - b);  
    for(let i = 0; i < importantContestScores.length - k; i++) {
        balance -=(importantContestScores[i] * 2)
    }
    
    console.log(balance);
    return balance;
}
