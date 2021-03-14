 /////////////////////////////////////////////////////////////////////////////

 /////////////////////// Do not modify the below code ////////////////////////

 /////////////////////////////////////////////////////////////////////////////

 (function() {
     function buildQuiz() {
         // we'll need a place to store the HTML output
         const output = [];

         // for each question...
         myQuestions.forEach((currentQuestion, questionNumber) => {
             // we'll want to store the list of answer choices
             const answers = [];

             // and for each available answer...
             for (letter in currentQuestion.answers) {
                 // ...add an HTML radio button
                 answers.push(
                     `<label>
           <input type="radio" name="question${questionNumber}" value="${letter}">
           ${letter} :
           ${currentQuestion.answers[letter]}
         </label>`
                 );
             }

             // add this question and its answers to the output
             output.push(
                 `<div class="question"> ${currentQuestion.question} </div>
       <div class="answers"> ${answers.join("")} </div>`
             );
         });

         // finally combine our output list into one string of HTML and put it on the page
         quizContainer.innerHTML = output.join("");
     }

     function showResults() {
         // gather answer containers from our quiz
         const answerContainers = quizContainer.querySelectorAll(".answers");

         // keep track of user's answers
         let numCorrect = 0;

         // for each question...
         myQuestions.forEach((currentQuestion, questionNumber) => {
             // find selected answer
             const answerContainer = answerContainers[questionNumber];
             const selector = `input[name=question${questionNumber}]:checked`;
             const userAnswer = (answerContainer.querySelector(selector) || {}).value;

             // if answer is correct
             if (userAnswer === currentQuestion.correctAnswer) {
                 // add to the number of correct answers
                 numCorrect++;

                 // color the answers green
                 //answerContainers[questionNumber].style.color = "lightgreen";
             } else {
                 // if answer is wrong or blank
                 // color the answers red
                 answerContainers[questionNumber].style.color = "red";
             }
         });

         // show number of correct answers out of total
         resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
     }

     const quizContainer = document.getElementById("quiz");
     const resultsContainer = document.getElementById("results");
     const submitButton = document.getElementById("submit");


     /////////////////////////////////////////////////////////////////////////////

     /////////////////////// Do not modify the above code ////////////////////////

     /////////////////////////////////////////////////////////////////////////////






     /////////////// Write the MCQ below in the exactly same described format ///////////////


     const myQuestions = [{
            question: "1. Given an undirected graph G with V vertices and E edges, the sum of the degrees of all vertices is _____. ", ///// Write the question inside double quotes
            answers: {
                a: "E ", ///// Write the option 1 inside double quotes
                b: "2E", ///// Write the option 2 inside double quotes
                c: "V", ///// Write the option 2 inside double quotes
                d: "2V", ///// Write the option 2 inside double quotes
            },
            correctAnswer: "b" ///// Write the correct option inside double quotes
        },

    {
      question: "2. Which of the following is an advantage of adjacency list representation over adjacency matrix representation of a graph? ",  ///// Write the question inside double quotes
      answers: {
        a: " In adjacency list representation, space is saved for sparse graphs",                  ///// Write the option 1 inside double quotes
        b: "DFS and BSF can be done in O(V + E) time for adjacency list representation. These operations take O(V^2) time in adjacency matrix representation. Here, V and E are number of vertices and edges respectively",                  ///// Write the option 2 inside double quotes
	c: "Adding a vertex in adjacency list representation is easier than adjacency matrix representation", ///// Write the option 3 inside double quotes
        d: " All of the above", ///// Write the option 4 inside double quotes
             },
      correctAnswer: "d"                ///// Write the correct option inside double quotes
    },

{
      question: "3. Which of the following is true about linked list implementation of queue? ",  ///// Write the question inside double quotes
      answers: {
        a: " In push operation, if new nodes are inserted at the beginning of linked list, then in pop operation, nodes must be removed from the end ",                  ///// Write the option 1 inside double quotes
        b: "In push operation, if new nodes are inserted at the end, then in pop operation, nodes must be removed from the beginning",                  ///// Write the option 2 inside double quotes
	c: "Both of the above ", ///// Write the option 3 inside double quotes
        d: "None of the above ", ///// Write the option 4 inside double quotes
             },
      correctAnswer: "c"                ///// Write the correct option inside double quotes
    },
{
      question: "4. What is the postcondition of enqueue?",  ///// Write the question inside double quotes
      answers: {
        a: "New item is at the front of the queue",                  ///// Write the option 1 inside double quotes
        b: "New item is at the middle of the queue",                  ///// Write the option 2 inside double quotes
	c: "New item is at the rear of the queue", ///// Write the option 3 inside double quotes
        d: "None of the above", ///// Write the option 4 inside double quotes
             },
      correctAnswer: "a"                ///// Write the correct option inside double quotes
    },
{
      question: "5. If the elements “A”, “B”, “C” and “D” are placed in a queue and are deleted one at a time, in what order will they be removed? ",  ///// Write the question inside double quotes
      answers: {
        a: "ABCD",                  ///// Write the option 1 inside double quotes
        b: "DCBA",                  ///// Write the option 2 inside double quotes
	c: "DCAB", ///// Write the option 3 inside double quotes
        d: "ABDC ", ///// Write the option 4 inside double quotes
             },
      correctAnswer: "a"                ///// Write the correct option inside double quotes
    },
{
      question: "6. How many queues are needed to implement a stack? Consider the situation where no other data structure like arrays, linked list is available to you.",  ///// Write the question inside double quotes
      answers: {
        a: "1",                  ///// Write the option 1 inside double quotes
        b: "2",                  ///// Write the option 2 inside double quotes
	c: "3", ///// Write the option 3 inside double quotes
        d: "4", ///// Write the option 4 inside double quotes
             },
      correctAnswer: "b"                ///// Write the correct option inside double quotes
    },
{
      question: "7. How many undirected graphs (not necessarily connected) can be constructed out of a given set V= {V 1, V 2,…V n} of n vertices?",  ///// Write the question inside double quotes
      answers: {
        a: "n(n-1)/2",                  ///// Write the option 1 inside double quotes
        b: "2^n",                  ///// Write the option 2 inside double quotes
	c: "n!", ///// Write the option 3 inside double quotes
        d: "2^(n(n-1)/2)", ///// Write the option 4 inside double quotes
             },
      correctAnswer: "d"                ///// Write the correct option inside double quotes
    },
{
      question: "8. Which of the following statements is/are TRUE for an undirected graph? <br>P: Number of odd degree vertices is even.<br>Q: Sum of degrees of all vertices is even. ",  ///// Write the question inside double quotes
      answers: {
        a: "P Only ",                  ///// Write the option 1 inside double quotes
        b: "Q Only",                  ///// Write the option 2 inside double quotes
	c: "Both P and Q", ///// Write the option 3 inside double quotes
        d: "Neither P nor Q", ///// Write the option 4 inside double quotes
             },
      correctAnswer: "c"                ///// Write the correct option inside double quotes
    },
{
      question: "9. Which of the following operations is not O(1) for an array of sorted data? You may assume that array elements are distinct.",  ///// Write the question inside double quotes
      answers: {
        a: "Find the ith largest element  ",                  ///// Write the option 1 inside double quotes
        b: " Delete an element",                  ///// Write the option 2 inside double quotes
	c: "Find the ith smallest element", ///// Write the option 3 inside double quotes
        d: " All of the above ", ///// Write the option 4 inside double quotes
             },
      correctAnswer: "b"                ///// Write the correct option inside double quotes
    },
     ];




     /////////////////////////////////////////////////////////////////////////////

     /////////////////////// Do not modify the below code ////////////////////////

     /////////////////////////////////////////////////////////////////////////////


     // display quiz right away
     buildQuiz();

     // on submit, show results
     submitButton.addEventListener("click", showResults);
 })();


 /////////////////////////////////////////////////////////////////////////////

 /////////////////////// Do not modify the above code ////////////////////////

 /////////////////////////////////////////////////////////////////////////////
