Pseudocode

-----
create questions object
each question is an object with keys: question, copy, correctChoice, incorrectChoices, answer
-----
show question and choices in dom
repeat 6 times
----
keeping score 
- add when correctChoice is chosen
- display score at the end

-----
currentQuestions
- display this all the time (1/6, 4/6 etc)

----
when user clicks:
- recalc userScore
- add 1 to currentQuestion
- scroll to next question


-----
html: radio. name is question, id is choices. 
add questions, choices on load
add answer on submit
add to userScore

----
randomize question selection
- random number
- don't show questions that have been answered already
- choose next question one at a time after each answerclick

----
replay

- score resets to 0
- current q resets to 0
- take user to beginning
- reset question pool





