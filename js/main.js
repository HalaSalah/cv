var qestionNameInput = document.getElementById("question");
var answerOneInput = document.getElementById("ans1");
var answerTwoInput = document.getElementById("ans2");
var answerThreeInput = document.getElementById("ans3");
var answerFourInput = document.getElementById("ans4");
var rad = document.getElementsByClassName("correct");
radioArray = [];
var questionsContainer;
if (localStorage.getItem("allQuestions") == null) {
    questionsContainer = [];

} else {
    questionsContainer = JSON.parse(localStorage.getItem("allQuestions"));
    displayQuestions();
}


function questionBank() {
    len = radioArray.length;
    val = radioArray[len - 1];
    console.log(val)
    var Question = {
        name: qestionNameInput.value,
        ans1: answerOneInput.value,
        ans2: answerTwoInput.value,
        ans3: answerThreeInput.value,
        ans4: answerFourInput.value,
        val: radioArray[len - 1]
    }
    questionsContainer.push(Question);

    localStorage.setItem("allQuestions", JSON.stringify(questionsContainer));
    console.log(questionsContainer);
    clearForm();
    displayQuestions();

}

function getValue(radio) {
    radioArray.push(radio.value);
    console.log(radioArray);
}


function clearForm() {
    qestionNameInput.value = "";
    answerOneInput.value = "";
    answerTwoInput.value = "";
    answerThreeInput.value = "";
    answerFourInput.value = "";

}


function displayQuestions() {
    var cartoona = "";
    for (var i = 0; i < questionsContainer.length; i++) {
        cartoona += ` <tr>
        <td>` + questionsContainer[i].name + `</td>
        <td> <input type="radio" name="correct" value="one" class="` + questionsContainer[i].val + `" onchange="checkValue(this)">` + questionsContainer[i].ans1 + `</td>
        <td> <input type="radio" name="correct" value="two" class="` + questionsContainer[i].val + `" onchange="checkValue(this)">` + questionsContainer[i].ans2 + `</td>
        <td> <input type="radio" name="correct" value="three" class="` + questionsContainer[i].val + `" onchange="checkValue(this)">` + questionsContainer[i].ans3 + `</td>
        <td> <input type="radio" name="correct" value="four" class="` + questionsContainer[i].val + `" onchange="checkValue(this)">` + questionsContainer[i].ans4 + `</td>
        <td><button onclick="deleteQuestion(` + i + `)" class="btn btn-danger">delete</button></td>
    </tr>`
    }
    document.getElementById("tableBody").innerHTML = cartoona;
}

function deleteQuestion(i) {
    questionsContainer.splice(i, 1);
    localStorage.setItem("allQuestions", JSON.stringify(questionsContainer));
    displayQuestions()
}

function checkValue(radio) {
    $("td").removeClass("correct").removeClass("wrong")
    if ($(radio).hasClass(radio.value)) {
        $(radio).parent("td").addClass("correct")
    } else {
        $(radio).parent("td").addClass("wrong")
    }

}