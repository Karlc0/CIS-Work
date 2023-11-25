//Author: Karl Cesar
//Date:   11/24/23

//Filename: quiz.hmtl


// Questions that will be asked
const Questions = [{
	q: "Which is the best Class",
	a: [{ text: "01", isCorrect: false },
	{ text: "15", isCorrect: false },
	{ text: "35", isCorrect: true },
	{ text: "36", isCorrect: false }
	]

},
{
	q: "Best Learning Community",
	a: [{ text: "Placeholder", isCorrect: false, isSelected: false },
	{ text: "Lcsp", isCorrect: false },
	{ text: "Lci", isCorrect: false },
	{ text: "Lcj", isCorrect: true }
	]

},
{
	q: "Best fashion",
	a: [{ text: "same guy", isCorrect: false },
	{ text: "other guy", isCorrect: false },
	{ text: "You", isCorrect: true },
	{ text: "that guy", isCorrect: false }
	]

}

]

let currQuestion = 0
let score = 0

function loadQues() {
	const question = document.getElementById("ques")
	const opt = document.getElementById("opt")

	question.textContent = Questions[currQuestion].q;
	opt.innerHTML = ""

	for (let i = 0; i < Questions[currQuestion].a.length; i++) {
		const choicesdiv = document.createElement("div");
		const choice = document.createElement("input");
		const choiceLabel = document.createElement("label");

		choice.type = "radio";
		choice.name = "answer";
		choice.value = i;

		choiceLabel.textContent = Questions[currQuestion].a[i].text;

		choicesdiv.appendChild(choice);
		choicesdiv.appendChild(choiceLabel);
		opt.appendChild(choicesdiv);
	}
}

loadQues();

function loadScore() {
	const totalScore = document.getElementById("score")
	totalScore.textContent = `You scored ${score} out of ${Questions.length}`
}


function nextQuestion() {
	if (currQuestion < Questions.length - 1) {
		currQuestion++;
		loadQues();
	} else {
		document.getElementById("opt").remove()
		document.getElementById("ques").remove()
		document.getElementById("btn").remove()
		loadScore();
	}
}

function checkAns() {
	const selectedAns = parseInt(document.querySelector('input[name="answer"]:checked').value);

	if (Questions[currQuestion].a[selectedAns].isCorrect) {
		score++;
		console.log("Correct")
		nextQuestion();
	} else {
		nextQuestion();
	}
}
