let container = document.getElementById("container")



for (let i = 0; i < data.length; i++) {
    let myDiv = document.createElement("div")
    myDiv.innerHTML = `
    <div>
        <img src="${data[i].image}"
        <h3>Question ${i+1}:</h3>
        <p>${data[i].question}</p>
        <input class="answerAttempt" type="text" placeholder="Answer"/>
        <button onclick="checkAnswer(event,'${data[i].answer}')"> Check answer </button>

        <p class="result"></p>
    </div>
`

    container.appendChild(myDiv)
}

function checkAnswer(event, answer){
    let entry = event.target.parentElement.querySelector(".answerAttempt").value
    // console.log("clicked")
    // console.log(answer)
    if (entry.toLowerCase() === answer.toLowerCase()) {
        event.target.parentElement.querySelector(".result").innerHTML = "Correct!"
    } else {
        event.target.parentElement.querySelector(".result").innerHTML = "Wrong :("
    }

}