
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
    answerDesc: `<a href="http://www.mint.ca/store/coins/half-kilogram-fine-silver-coin-%E2%80%93-conservation-series-the-narwhal-%E2%80%93-mintage-500-2015-prod2530329">The Narwhal</a> was featured on a half kilogram fine silver coin, minted in 2015.`
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
    answerDesc:
      '<a href="http://www.cbc.ca/news/canada/calgary/java-creator-remembers-steve-jobs-1.1051435">James Gosling</a> from Calgary, Alberta, authored Java in 1995.'
  },
  {
    question:
      "True or False? Hidy and Howdy were the polar bear mascots at the 1988 Calgary Winter Olympics. They popularized usage of the phrase 'Howdy!' in Canada",
    questionDesc: "Bears are fluffy!",
    correctChoice: "b",
    choices: {
      a: "True",
      b: "False"
    },
    answerDesc: "Nope! I made that up :D"
  },
  {
    question:
      "Anyone can call the Canadian government for general information about the country. What is that phone number?",
    questionDesc: "Useful tip for people who haven't heard of Google",
    correctChoice: "b",
    choices: {
      a: "1-800-MPL-LEAF",
      b: "1-800-O-CANADA",
      c: "1-800-BVR-TOWN",
      d: "1-800-GO-LEAFS"
    },
    answerDesc:
      "Call 1-800-O-CANADA when you're really in the mood to wait on hold for 30 minutes. 😉"
  },
  {
    question:
      "Atwood is also an inventor. Which of the following did she invent?",
    questionDesc:
      "Margaret Atwood is a prominent Canadian author, poet, feminist and activist!",
    correctChoice: "",
    choices: {
      a: "Clothes hangers specifically for pants",
      b: "Magic Eye Technology (optical illusion posters)",
      c: "Microwave popcorn",
      d: "The LongPen (for remote writing)"
    },
    answerDesc:
      "Atwood invented the LongPen she she could greet fans and sign autographs from home."
  },
  {
    question:
      "True or False? The tiny town of St.Paul, Aberta is home to the world's first UFO landing pad. ",
    questionDesc: "If you build it, they will come.",
    correctChoice: "a",
    choices: {
      a: "True",
      b: "False"
    },
    answerDesc:
      '<a href="http://www.cbc.ca/archives/entry/an-invitation-thats-out-of-this-world">True fact!</a> They are still waiting for their first <em>Visitor.</em>'
  },
  {
    question:
      "True or False? Botanists claim that new bills feature the wrong species of maple leaf.",
    questionDesc:
      "The new polymer bills are rip-proof, water-proof and 120% more photogenic 📷",
    correctChoice: "a",
    choices: {
      a: "True",
      b: "False"
    },
    answerDesc:
      'True! Angry experts claimed that the bills used <a href="https://www.reuters.com/article/us-maple/canada-put-wrong-maple-leaf-on-new-canadian-dollar-20-bill-expert-idUSBRE90H16S20130118">a Norwegian species of maple rather than the sugar maple.</a>'
  },
  {
    question: "Which of these popular celebs is NOT Canadian?",
    questionDesc: "Pop quiz! Haha, get it?",
    correctChoice: "a",
    choices: {
      a: "Lady Gaga",
      b: "Keanu Reeves",
      c: "Cobie Smulders",
      d: "Pamela Anderson"
    },
    answerDesc:
      "Lady Gaga was born in NYC. But it's ok, we still love her!"
  }
];

canQuiz.masterResults = {
    lowScoreResults: ["Well... At least you learned something new!", "Brush up on your Canadiana, eh?", "Sorry you did not win, roll up the rim again!"],
    middleScoreResults: ["Very impressive!", "You know your Canada!", "Not bad, eh!"],
    highScoreResults: ["True Patriot!", "Maple syrup flows through your veins!", "A Canadian Legend, eh?"],
};

canQuiz.playerScore = 0;
canQuiz.playerAnsweringQuestion = 1;


canQuiz.events = () => {
    // when play button is pressed, startQuiz()
    $('.btn__play').on('click', function() {
        canQuiz.startQuiz(); 
        // disable play button once it is clicked
        $(this).attr("disabled", true);
    });

    // when an answer button is clicked, check isAnswerCorrect()
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

    $('.btn__playAgain').on('click', function() {
      window.location.reload(true); 
    })

};

canQuiz.init = () => {
    $(".answerDescArea").hide();
    $(".quizArea").hide();
    $(".resultsArea").hide();
    $(".btn__next").hide();
    //smoothscroll
    var scroll = new SmoothScroll('a[href*="#"]', {
      speed: 1000,
      easing: "easeOutQuad"
    });
}

canQuiz.startQuiz = () => {
    // show the quizArea (default hidden)
    $(".quizArea").show();
    // const randomListOfQs = canQuiz.chooseBanknumArr(canQuiz.masterQuestionListArr);

    canQuiz.shortList = canQuiz.chooseBanknumArr(canQuiz.masterQuestionListArr);

    for (let i = 0; i < 6; i++) {
        // this is the question it's looping through

        let currentQuestion =  canQuiz.shortList[i];

        // i + 1 to get 1-6!
        canQuiz.showAQuestion(currentQuestion, i+1);

    }  // end loop
};

canQuiz.chooseBanknumArr = (bankOfQs) => {
    // this function returns an array of 6 numbers
    const arr = [];
    while (arr.length < 6) {
      let aRandoBanknum = Math.floor(Math.random() * bankOfQs.length );
      // make each num unique
      if (arr.indexOf(bankOfQs[aRandoBanknum]) > -1) continue;
    
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
  for (key in currentQuestion.choices) {
    // properties of question: value, class, data-bankQuestionNum
    // key is "a" - "d"
    $(`.question${i} .answerArea`).append(`
        <button value = "${key}" class="btn__answer" data-banknum = "${i}">${
      currentQuestion.choices[key]
    }</button>`);
  }
};

canQuiz.isAnswerCorrect = (clickedButton) => {
  // start this event handler. When an answer button (.btn__answer) is clicked, check if answer is correct.

    // this = button.btn__answer
    // userAnswer = this.val = a/b/c/d
    const userAnswer = clickedButton.val();

    // -1 because question banknum starts from 0.
    const bankQuestionNum = clickedButton.data("banknum") - 1;
    const currentQuestion = canQuiz.shortList[bankQuestionNum];
    const correctAnswer = canQuiz.shortList[bankQuestionNum].correctChoice;
    
    
    // get the data-banknum associated with this question (dynamically added with populateAnswerField() )
    const correctAnswerButton = $(`.btn__answer[value="${correctAnswer}"][data-banknum="${canQuiz.questionInBankArr}]"`);


    // show user if their answer is right or wrong
    if (correctAnswer === userAnswer) {
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
        // show the update score in the bottom bar and in the final results area
        $('.scoreArea span').text(`${canQuiz.playerScore}`);
        $(".text--finalScore span").text(`${canQuiz.playerScore}`);
    };
};

canQuiz.showCorrectAnswerDesc = (currentQuestion) => {
    // put the right answer in the box and show the box
    const currentAnswerDesc = currentQuestion.answerDesc;

    const currentAnswerArea = `.question${canQuiz.playerAnsweringQuestion}`;

    
    $(currentAnswerArea + " .answerDescArea p").html(currentAnswerDesc);
    $(currentAnswerArea + " .answerDescArea").show();
    $(currentAnswerArea + " .btn__next").show();
    window.scrollBy(0, 200);


};

canQuiz.displayFinalResult = (finalScore) => {
    // choose 3 possible tiers of results, which each have 3 random sentences
    const randNum = Math.floor(Math.random() * 3);
    if(finalScore >= 5) {
        $(".text--results").text(canQuiz.masterResults.highScoreResults[randNum]);
        console.log(`score is 5 or 6`);
    } else if (finalScore >= 3) {
        $(".text--results").text(canQuiz.masterResults.middleScoreResults[randNum]);
        console.log(`score is 3 or 4`);
    } else {
        $(".text--results").text(canQuiz.masterResults.lowScoreResults[randNum]);
        console.log(`score is 0, 1, 2`);
    } 

    //show results area
    $('.resultsArea').show();
    $(".scoreArea").hide();

};

canQuiz.dynamicAnimations = () => {
  // call all animate.css functions
  canQuiz.animationHover('.btn', 'rubberBand');
};

canQuiz.animationHover = (element, animation) => {
    // https://codepen.io/tamak/pen/ApLcq
  element = $(element);
  element.hover(
    function() {
      element.addClass("animated " + animation);
    },
    function() {
      //wait for animation to finish before removing classes
      window.setTimeout(function() {
        element.removeClass("animated " + animation);
      }, 1000);
    }
  );
};

$(function() {

canQuiz.events();
canQuiz.init();
canQuiz.dynamicAnimations();

}); // end of "ready"
