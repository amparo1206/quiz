const highScoreList = document.querySelector('#highScoreList')
console.log (highScoreList)
const highScores = JSON.parse(localStorage.getItem('highScores')) || []
console.log(highScores)

highScoreList.innerHTML = highScores.map(score => {
    console.log(score)
    return `<li class="high-score">${score.name} - ${score.score}</li>`
}).join('')
