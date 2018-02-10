
// namespace
const canQuiz = {};

// List of all questions (currently 6)
canQuiz.masterQuestionListArr = [
  {
    question: "Which of the following charities were NOT founded by Canadians?",
    questionDesc:
      "Canada is known for its humanitarian presence around the world.",
    correctChoice: "d",
    choices: {
      a: "Greenpeace",
      b: "The Salvation Army",
      c: "WE Foundation (Me to We)",
      d: "Doctors Without Borders"
    },
    answerDesc:
      "The only charity that is not Canadian is Doctors Without Borders"
  },
  {
    question:
      "True or False? A man in Oakville, Ontario created a cat sanctuary in his house, which is currently home to 300 cats!",
    questionDesc: "Canadians love cats!",
    correctChoice: "b",
    choices: {
      a: "True",
      b: "False"
    },
    answerDesc:
      'False! This <a href="http://metro.co.uk/2018/02/05/man-transforms-home-sanctuary-300-cats-7288992/"> awesome cat santuary</a> is actually located in Medford, New York'
  },
  {
    question:
      "What exotic creature was featured on a limited-edition silver coin?",
    questionDesc: "There is an unicorn on the Canadian Coat of Arms.",
    correctChoice: "c",
    choices: {
      a: "Killer Whale",
      b: "Dragon",
      c: "Narwhal",
      d: "Griffin"
    },
    answerDesc: `<a href="http://www.mint.ca/store/coins/half-kilogram-fine-silver-coin-%E2%80%93-conservation-series-the-narwhal-%E2%80%93-mintage-500-2015-prod2530329">The Narwhal was featured on a half kilogram fine silver coin, minted in 2015.</a>`
  },
  {
    question:
      "True or False? The inventor of the Java programming language, James Gosling, is a Canadian. ",
    questionDesc: "Java != javaScript",
    correctChoice: "a",
    choices: {
      a: "True",
      b: "False"
    },
    answerDesc: '<a href="http://www.cbc.ca/news/canada/calgary/java-creator-remembers-steve-jobs-1.1051435">James Gosling</a> from Calgary, Alberta, authored Java in 1995.'
  },
  {
    question:
      "True or False? Hidy and Howdy were the mascots at the 1988 Calgary Winter Olympics. They popularized usage of the phrase 'Howdy!' in Canada",
    questionDesc: "They were suuper popular!",
    correctChoice: "b",
    choices: {
      a: "True",
      b: "False"
    },
    answerDesc: "James Gosling from Calgary, Alberta, authored Java in 1995."
  },
  {
    question:
      "Anyone can call the Canadian government for general information about the country. What is that phone number?",
    questionDesc: "wow cool fact",
    correctChoice: "b",
    choices: {
      a: "1-800-MPL-LEAF",
      b: "1-800-O-CANADA",
      c: "1-800-BVR-TOWN",
      d: "1-800-GO-LEAFS"
    },
    answerDesc: "https://www.canada.ca/en/contact/contact-1-800-o-canada.html"
  },
  {
    question:
      "Atwood is also an inventor. Which of the following did she invent?",
    questionDesc:
      "Margaret Atwood is a prominent Canadian author, poet, feminist and activist!",
    correctChoice: "",
    choices: {
      a: "Clothes hangers specifically for pants",
      b: "Magic Eye Technology(optical illusion posters)",
      c: "Microwave popcorn",
      d: "The LongPen(for remote writing)"
    },
    answerDesc:
      "Atwood invented the LongPen is that she wouldn't have to go on long book tours to greet fans and sign autographs."
  },
  {
    question:
      "True or False? The tiny town of St.Paul, Aberta is home to the world's first UFO landing pad? They are still waiting for their first Visitor.",
    questionDesc: "If you build it, they will come.",
    correctChoice: "a",
    choices: {
      a: "True",
      b: "False"
    },
    answerDesc:
      '<a href="http://www.cbc.ca/archives/entry/an-invitation-thats-out-of-this-world">True fact</a>'
  },
  {
    question:
      "True or False? The new Canadian bills caused a kerfuffle among botanists when it first came out because it featured the wrong species of maple leaf.",
    questionDesc:
      "The new polymer bills are rip-proof, water-proof and 120% more photogenic. 📷",
    correctChoice: "a",
    choices: {
      a: "True",
      b: "False"
    },
    answerDesc:
      '<a href="https://www.reuters.com/article/us-maple/canada-put-wrong-maple-leaf-on-new-canadian-dollar-20-bill-expert-idUSBRE90H16S20130118">Experts claimed that the bills used a Norway species of maple rather than the sugar maple.</a>'
  }
];

canQuiz.masterResults = {
    lowScoreResults: ["You did bad but learned a lot, so good job!", "Brush up on your Canadiana, eh?", "You just made a polar bear cry :("],
    middleScoreResults: ["Pretty good!", "You know your Canada!", "Not bad, eh!"],
    highScoreResults: ["True Patriot!", "Maple syrup flows through your veins!", "A Canadian Legend, eh?"],
};

canQuiz.playerScore = 0;
canQuiz.playerAnsweringQuestion = 1;


canQuiz.events = () => {
    // when play button is pressed
    $('.btn__play').on('click', function() {
        canQuiz.startQuiz(); 
        // disable play button once it is clicked
        $(this).attr("disabled", true);
    });

    // when an answer button is clicked
    $(".answerArea").on("click", ".btn__answer", function(e) {
      e.preventDefault();
      canQuiz.isAnswerCorrect($(this));
      // once user clicks one answer button, disable all answer buttons for that question
      $(`.btn__answer[data-banknum="${$(this).data('banknum')}"]`).attr("disabled", true);
        // console.log(this);
          
        //increment counter
        canQuiz.playerAnsweringQuestion++;
    });

    // when last answer is chosen, show final score and results
    $('.btn__last').on('click', function() {
        canQuiz.displayFinalResult(canQuiz.playerScore);
    });
};

canQuiz.init = () => {
    $(".answerDescArea").hide();
    $(".quizArea").hide();
    //smoothscroll
    var scroll = new SmoothScroll('a[href*="#"]');
}

canQuiz.startQuiz = () => {
    // show the quizArea (default hidden)
    $(".quizArea").show();
    // const randomListOfQs = canQuiz.chooseBanknumArr(canQuiz.masterQuestionListArr);

    const shortList = canQuiz.chooseBanknumArr(canQuiz.masterQuestionListArr);

    for (let i = 0; i < 6; i++) {
        // this is the question it's looping through
        // let currentQuestion = randomListOfQs[i];
        // let currentQuestion = canQuiz.masterQuestionListArr[randomListOfQs[i]];
        // let currentQuestion = canQuiz.masterQuestionListArr[i];
        let currentQuestion =  shortList[i];
        // console.log()
        
        console.log(currentQuestion);
        // console.log(randomListOfQs[i]);
        // i + 1 to get 1-6!
        canQuiz.showAQuestion(currentQuestion, i+1);

    }  // end loop
};

canQuiz.chooseBanknumArr = (bankOfQs) => {
    const arr = [];
    while (arr.length < 6) {
      let aRandoBanknum = Math.floor(Math.random() * bankOfQs.length );
      if (arr.indexOf(aRandoBanknum) > -1) continue;
      // ??????
      arr[arr.length] = canQuiz.masterQuestionListArr[aRandoBanknum];
    } 
    return arr;
   
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

    // how do i select the correct answer??
    const correctAnswerButton = $(`.btn__answer[value="${correctAnswer}"][data-banknum="${bankQuestionNum}]"`);
    // console.log("correst answer button is  ", correctAnswerButton);
    // get the data-banknum associated with this question (dynamically added with populateAnswerField() )
    // console.log("current question is ", currentQuestion)
    // console.log("user answer is ",userAnswer);
 
    
    // console.log("the banknum of clicked button is ", bankQuestionNum);

    // console.log("current ans should be", correctAnswer);
    // if 


    if (canQuiz.masterQuestionListArr[bankQuestionNum].correctChoice === userAnswer) {
        canQuiz.incrementAndUpdateScore(clickedButton);
        clickedButton.addClass("btn--rightAns");
    } else {
        clickedButton.addClass("btn--wrongAns");
    }
    canQuiz.showCorrectAnswerDesc(currentQuestion);

};
    
canQuiz.incrementAndUpdateScore = (clickedButton) => {
    // do not add a point if it's already been clicked.
    if(!clickedButton.hasClass('btn--rightAns')) {
        canQuiz.playerScore++;
        // console.log(`add a point! Now you have ${canQuiz.playerScore} points`);
        $('.scoreArea span').text(`${canQuiz.playerScore}`);

    };
};

canQuiz.showCorrectAnswerDesc = (currentQuestion) => {
    const currentAnswerDesc = currentQuestion.answerDesc;

    const currentAnswerArea = `.question${canQuiz.playerAnsweringQuestion}`;

    
    $(currentAnswerArea + " .answerDescArea p").html(currentAnswerDesc);
    $(currentAnswerArea + " .answerDescArea").show();
};

canQuiz.displayFinalResult = (finalScore) => {
    const randNum = Math.floor(Math.random() * 3);
    // console.log(finalScore);
    if(finalScore >= 5) {
        $('.results p').text(canQuiz.masterResults.highScoreResults[randNum]);
        console.log(`score is 5 or 6`);
    } else if (finalScore >= 3) {
        $('.results p').text(canQuiz.masterResults.middleScoreResults[randNum]);
        console.log(`score is 3 or 4`);
    } else {
        $(".results p").text(canQuiz.masterResults.lowScoreResults[randNum]);
        console.log(`score is 0, 1, 2`);
    }
};

$(function() {

canQuiz.events();
canQuiz.init();
canQuiz.startQuiz();

canQuiz.chooseBanknumArr(canQuiz.masterQuestionListArr);



    
}); // end of "ready"
