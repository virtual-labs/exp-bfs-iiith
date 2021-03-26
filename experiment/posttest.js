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
	answerContainers.forEach(e => e.style.color = "black");

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
            question: "1. Which of the following algorithms can be used to most efficiently to determine the presence of a cycle in a given graph?", ///// Write the question inside double quotes
            answers: {
                a: "Depth First Search ", ///// Write the option 1 inside double quotes
                b: "Breadth First Search", ///// Write the option 2 inside double quotes
 		c: "Prim’s Minimum Spanning Tree Algorithm", ///// Write the option 3 inside double quotes
                d: " Kruskal’ Minimum Spanning Tree Algorithm ", ///// Write the option 4 inside double quotes
            },
            correctAnswer: "a" ///// Write the correct option inside double quotes
        },

    {
      question: "2. Traversal of a graph is different from tree because _______.",  ///// Write the question inside double quotes
      answers: {
        a: "There can be a loop in graph so we must maintain a visited flag for every vertex ",                  ///// Write the option 1 inside double quotes
        b: "DFS of a graph uses stack, but inorder traversal of a tree is recursive",                  ///// Write the option 2 inside double quotes
	c: "BFS of a graph uses queue, but a time efficient BFS of a tree is recursive.", ///// Write the option 3 inside double quotes
        d: "All of the above", ///// Write the option 4 inside double quotes
              },
      correctAnswer: "a"                ///// Write the correct option inside double quotes
    },

{
      question: "3. Given two vertices in a graph S and T, which of the two traversals (BFS and DFS) can be used to find if there is path from S to T? ",  ///// Write the question inside double quotes
      answers: {
        a: "Only BFS",                  ///// Write the option 1 inside double quotes
        b: "Only DFS ",                  ///// Write the option 2 inside double quotes
	c: "Both BFS and DFS ", ///// Write the option 3 inside double quotes
        d: "Neither BFS nor DFS", ///// Write the option 4 inside double quotes
              },
      correctAnswer: "c"                ///// Write the correct option inside double quotes
    },

{
      question: "4. Let G be a graph with 'n' vertices and 'm' edges. What is the tightest upper bound on the running time on Depth First Search of G? Assume that the graph is represented using adjacency matrix. ",  ///// Write the question inside double quotes
      answers: {
        a: "O(n) ",                  ///// Write the option 1 inside double quotes
        b: "O(m+n)",                  ///// Write the option 2 inside double quotes
	c: "O(n^2) ", ///// Write the option 3 inside double quotes
        d: "O(mn)", ///// Write the option 4 inside double quotes
	 
              },
      correctAnswer: "c"                ///// Write the correct option inside double quotes
    },

{
      question: "5. In an adjacency list representation of an undirected simple graph G = (V, E), each edge (u, v) has two adjacency list entries: [v] in the adjacency list of u, and [u] in the adjacency list of v. These are called twins of each other. A twin pointer is a pointer from an adjacency list entry to its twin. If |E| = m and |V | = n, and the memory size is not a constraint, what is the time complexity of the most efficient algorithm to set the twin pointer in each entry in each adjacency list? ",  ///// Write the question inside double quotes
      answers: {
        a: "Θ(n^2) ",                  ///// Write the option 1 inside double quotes
        b: "Θ(m+n)",                  ///// Write the option 2 inside double quotes
	c: "Θ(m^2) ", ///// Write the option 3 inside double quotes
        d: "Θ(n^4) ", ///// Write the option 4 inside double quotes
	 
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
