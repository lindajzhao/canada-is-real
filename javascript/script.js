// Pseudocode

// // -----
// // create questions object
// // each question is an object with keys: question, copy, correctChoice, incorrectChoices, answer


// choices[correctChoice]

$(function() {
    // list of 6 questions
    const masterQuestionListObj = {
        charities: 
        {
            question: "Which of the following charities were NOT founded by Canadians?",
            questionDesc: "Canada is known for its humanitarian presence around the world.",
            correctChoice: 'd',
            choices: {
                a: "Greenpeace",
                b: "The Salvation Army",
                c: "WE Foundation (Me to We)",
                d: "Doctors Without Borders"
            },
            answerDesc: "The only charity that is not Canadian is Doctors Without Borders"
        },
        cats: 
        {
            // title: "cats",
            question: "True or False? A man in Oakville, Ontario created a cat sanctuary in his house, which is currently home to 300 cats!",
            questionDesc: "Canadians love cats!",
            correctChoice: "b",
            choices: {
                a: "True",
                b: "False"
            },
            answerDesc: "False! This awesome cat santuary is actually located in Medford, New York"
        },
        coin:
        {
            // title: "coin",
            question: "What exotic creature was featured on a limited-edition silver coin?",
            questionDesc: "There is an unicorn on the Canadian Coat of Arms.",
            correctChoice: "a",
            choices: {
                a: "Narwhal",
                b: "Dragon",
                c: "Gryffin",
                d: "Platypus"
            },
            answerDesc: "The Narwhal was featured on a half kilogram fine silver coin, minted in 2015."
        },
        java:
        {
            // title: "java",
            question: "True or False? The inventor of the Java programming language, James Gosling, is a Canadian. ",
            questionDesc: "Java != javaScript",
            correctChoice: "a",
            choices: {
                a: "True",
                b: "False"
            },
            answerDesc: "James Gosling from Calgary, Alberta, authored Java in 1995."
        },
        bears:
        {
            // title: "bears",
            question: "True or False? Hidy and Howdy were the mascots at the 1988 Calgary Winter Olympics. They popularized usage of the phrase 'Howdy!' in Canada",
            questionDesc: "They were suuper popular!",
            correctChoice: "a",
            choices: {
                a: "True",
                b: "False"
            },
            answerDesc: "James Gosling from Calgary, Alberta, authored Java in 1995."
        },
        phone:
        {
            // title: "phone",
            question: "Anyone can call the Canadian government for general information about the country. What is the phone number?",
            questionDesc: "wow cool fact",
            correctChoice: "b",
            choices: {
                a: "1-800-MPL-LEAF",
                b: "1-800-O-CANADA",
                c: "1-800-BVR-TOWN",
                d: "1-800-GO-LEAFS",
            },
            answerDesc: "https://www.canada.ca/en/contact/contact-1-800-o-canada.html"
        },
    }

    const masterQuestionListArr = [
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
                answerDesc: "The only charity that is not Canadian is Doctors Without Borders"
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
                answerDesc: "False! This awesome cat santuary is actually located in Medford, New York"
            },
            {
                title: "coin",
                question: "What exotic creature was featured on a limited-edition silver coin?",
                questionDesc: "There is an unicorn on the Canadian Coat of Arms.",
                correctChoice: "a",
                choices: {
                    a: "Narwhal",
                    b: "Dragon",
                    c: "Gryffin",
                    d: "Platypus"
                },
                answerDesc: "The Narwhal was featured on a half kilogram fine silver coin, minted in 2015."
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
                answerDesc: "James Gosling from Calgary, Alberta, authored Java in 1995."
            },
            {
                title: "bears",
                question: "True or False? Hidy and Howdy were the mascots at the 1988 Calgary Winter Olympics. They popularized usage of the phrase 'Howdy!' in Canada",
                questionDesc: "They were suuper popular!",
                correctChoice: "a",
                choices: {
                    a: "True",
                    b: "False"
                },
                answerDesc: "James Gosling from Calgary, Alberta, authored Java in 1995."
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
                answerDesc: "https://www.canada.ca/en/contact/contact-1-800-o-canada.html"
            },
        ]
    // console.log(masterQuestionList);
    // just testing appending
    // let firstQuestion = masterQuestionList.cats;

    // $('.heading--question').append(`<li>${firstQuestion.question}</li>`);
    // console.log(firstQuestion.question);

    // for(let i in masterQuestionList) {
    //     const currentQuestion = masterQuestionList[i];
    //     $(`.question1 .heading--question`).append(`hi`);
        // console.log(`${currentQuestion.question}`);
        // $(`.question${i} .text--question`).append(`${currentQuestion.question}`);
        // $(`.question${i} .text--questionDesc`).append(`${currentQuestion.questionDesc}`);
        // $(`.question${i} ul`).append(`<li>${currentQuestion.choices.a}</li>`);
    // }
    for(let n = 1; n <= 3; n++) {
        // use n for css. use i for index of questions
        i = n - 1;
        let currentQuestion = masterQuestionListArr[i];
        // append questionDesc
        $(`.question${n} .text--questionDesc`).append(`${currentQuestion.questionDesc}`);

        // append question
        $(`.question${n} .heading--question`).append(`${currentQuestion.question}`);

        

        // below: append a radio button and a label for a, and b, and c and d. Make loop for t/f eventually
        $(`.question${n} .answerArea`).append(`
            <input type="radio" name="${currentQuestion.title}" id="${currentQuestion.choices.a}" value="${currentQuestion.choices.a}">
            <label for= "${currentQuestion.choices.a}">${currentQuestion.choices.a}</label>`);

        $(`.question${n} .answerArea`).append(`
            <input type="radio" name="${currentQuestion.title}" id="${currentQuestion.choices.b}" value="${currentQuestion.choices.b}">
            <label for= "${currentQuestion.choices.b}">${currentQuestion.choices.b}</label>`);

        $(`.question${n} .answerArea`).append(`
            <input type="radio" name="${currentQuestion.title}" id="${currentQuestion.choices.c}" value="${currentQuestion.choices.c}">
            <label for= "${currentQuestion.choices.c}">${currentQuestion.choices.c}</label>`);
        $(`.question${n} .answerArea`).append(`
            <input type="radio" name="${currentQuestion.title}" id="${currentQuestion.choices.d}" value="${currentQuestion.choices.d}">
            <label for= "${currentQuestion.choices.d}">${currentQuestion.choices.d}</label>`);
    }
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





