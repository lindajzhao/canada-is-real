
// namespace
const canQuiz = {};

// List of all questions (currently 6)
canQuiz.masterQuestionListArr = [
    {
        title: "charities",
        question: "Which of the following charities were NOT founded by Canadians?",
        questionDesc: "Canada is known for its humanitarian presence around the world.",
        correctChoice: 'd',
        choices: {
            a: "Greenpeace",
            b: "The Salvation Army",
            c: "WE Foundation (Me to We)",
            d: "Doctors Without Borders"
        },
        answerDesc: "The only charity that is not Canadian is Doctors Without Borders",
    },
    {
        title: "cats",
        question: "True or False? A man in Oakville, Ontario created a cat sanctuary in his house, which is currently home to 300 cats!",
        questionDesc: "Canadians love cats!",
        correctChoice: "b",
        choices: {
            a: "True",
            b: "False"
        },
        answerDesc: "False! This awesome cat santuary is actually located in Medford, New York",
    },
    {
        title: "coin",
        question: "What exotic creature was featured on a limited-edition silver coin?",
        questionDesc: "There is an unicorn on the Canadian Coat of Arms.",
        correctChoice: "c",
        choices: {
            a: "Killer Whale",
            b: "Dragon",
            c: "Narwhal",
            d: "Griffin"
        },
        answerDesc: "The Narwhal was featured on a half kilogram fine silver coin, minted in 2015.",
    },
    {
        title: "java",
        question: "True or False? The inventor of the Java programming language, James Gosling, is a Canadian. ",
        questionDesc: "Java != javaScript",
        correctChoice: "a",
        choices: {
            a: "True",
            b: "False"
        },
        answerDesc: "James Gosling from Calgary, Alberta, authored Java in 1995.",
    },
    {
        title: "mascots",
        question: "True or False? Hidy and Howdy were the mascots at the 1988 Calgary Winter Olympics. They popularized usage of the phrase 'Howdy!' in Canada",
        questionDesc: "They were suuper popular!",
        correctChoice: "b",
        choices: {
            a: "True",
            b: "False"
        },
        answerDesc: "James Gosling from Calgary, Alberta, authored Java in 1995.",
    },
    {
        title: "phone",
        question: "Anyone can call the Canadian government for general information about the country. What is the phone number?",
        questionDesc: "wow cool fact",
        correctChoice: "b",
        choices: {
            a: "1-800-MPL-LEAF",
            b: "1-800-O-CANADA",
            c: "1-800-BVR-TOWN",
            d: "1-800-GO-LEAFS",
        },
        answerDesc: "https://www.canada.ca/en/contact/contact-1-800-o-canada.html",
    },
];

canQuiz.playerScore = 0;
canQuiz.events = () => {
    $('.btn__play').on('click', function() {
        console.log('clicked play button');
        canQuiz.startQuiz(); 
    });
};

canQuiz.init = () => {

}

canQuiz.startQuiz = () => {
    // show the quizArea (default hidden)
    $(".quizArea").show();

    for (let i = 0; i < 6; i++) {
        // this is the question it's looping through
        let currentQuestion = canQuiz.masterQuestionListArr[i];

        // i + 1 to get 1-6!
        canQuiz.showAQuestion(currentQuestion, i+1);

        
    }  // end loop

    $(".answerArea").on("click", ".btn__answer", function(e) {
      e.preventDefault();
      canQuiz.isAnswerCorrect($(this));
    });

    

};

canQuiz.showAQuestion = (currentQuestion, i) => {
    // append questionDesc to paragraph
    $(`.question${i} .text--questionDesc`).append(`${currentQuestion.questionDesc}`);
    
    // append question to question h3
    $(`.question${i} .heading--question`).append(`${currentQuestion.question}`);

    canQuiz.populateAnswerField(currentQuestion, i);
};

canQuiz.populateAnswerField = (currentQuestion, i) => {
    // iterate twice for T/F and 4 times for M/C
    for(key in currentQuestion.choices){
        // properties of question: value, class, data-bankQuestionNum
        // key is "a" - "d"
        $(`.question${i} .answerArea`).append(`
        <button value = "${key}" class="btn__answer" data-banknum = "${i}">${currentQuestion.choices[key]}</button>`
        );
    }
};

canQuiz.isAnswerCorrect = (clickedButton) => {
  // start this event handler. When an answer button (.btn__answer) is clicked, check if answer is correct.

    // this = button.btn__answer
    // userAnswer = this.val = a/b/c/d
    const userAnswer = clickedButton.val();

    // -1 because question banknum starts from 0.
    const bankQuestionNum = clickedButton.data("banknum") - 1;
    const currentQuestion = canQuiz.masterQuestionListArr[bankQuestionNum];

    const correctAnswer = canQuiz.masterQuestionListArr[bankQuestionNum].correctChoice;

    // ??? how do i select the correct answer??
    const correctAnswerButton = $(`.btn__answer[value="${correctAnswer}"][data-banknum="${bankQuestionNum}]"`);
    // console.log("correst answer button is  ", correctAnswerButton);
    // get the data-banknum associated with this question (dynamically added with populateAnswerField() )
    // console.log("current question is ", currentQuestion)
    // console.log("user answer is ",userAnswer);

    
    // console.log("the banknum of clicked button is ", bankQuestionNum);

    // console.log("current ans should be", correctAnswer);

    if (canQuiz.masterQuestionListArr[bankQuestionNum].correctChoice === userAnswer) {
        canQuiz.incrementAndUpdateScore(clickedButton);
        clickedButton.addClass("btn--rightAns");
    } else {
        clickedButton.addClass("btn--wrongAns");
    }

};
    
canQuiz.incrementAndUpdateScore = (clickedButton) => {
    // do not add a point if it's already been clicked.
    if(!clickedButton.hasClass('btn--rightAns')) {
        canQuiz.playerScore++;
        console.log(`clicked on ${clickedButton} add a point! Now you have ${canQuiz.playerScore} points`);
        $('.scoreArea span').text(`${canQuiz.playerScore}`);
    };
};

canQuiz.showCorrectAnswer(currentQuestion) {

};

$(function() {
// console.log("ready");
// $('.quizArea').hide();
canQuiz.startQuiz();
    // canQuiz.isAnswerCorrect();
canQuiz.events();
canQuiz.init();


    
}); // end of "ready"


// masterQuestionList
// -----
// show question and choices in dom
// repeat 6 times
// ----
// keeping score 
// - add when correctChoice is chosen
// - display score at the end

// -----
// currentQuestion
// - display this all the time (1/6, 4/6 etc)
// - don't show if 0: game hasn't started yet

// ----
// when user clicks:
// - recalc userScore
// - add 1 to currentQuestion
// - scroll to next question


// -----
// html: radio. name is question, id is choices. 
// add questions, choices on load
// add answer on submit
// add to userScore

// ----
// randomize question selection
// - random number
// - don't show questions that have been answered already
// - choose next question one at a time after each answerclick

// ----
// replay

// - score resets to 0
// - current q resets to 0
// - take user to beginning
// - reset question pool





