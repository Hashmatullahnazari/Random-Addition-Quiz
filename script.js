
      // This function generates a random addition question and displays
      // the question on the page
      function generateQuestion() {
        // Generate two random numbers between 1 and 10
        const num1 = Math.floor(Math.random() * 10) + 1;
        const num2 = Math.floor(Math.random() * 10) + 1;

        // Calculate the correct answer
        const answer = num1 + num2;

        // Store the correct answer in a global variable
        // so we can check it later
        window.correctAnswer = answer;

        // Display the question on the page
        document.getElementById("question").innerHTML = `${num1} + ${num2} = ?`;
      }

      // This function checks the user's answer and displays
      // whether it is correct or not
      function checkAnswer() {
        // Get the user's answer from the input field
        const userAnswer = Number(document.getElementById("answer-input").value);

        // Check if the user's answer is correct
        if (userAnswer === window.correctAnswer) {
          // If the answer is correct, display a success message
          document.getElementById("result").innerHTML = "Correct!";
        } else {
          // If the answer is incorrect, display an error message
          document.getElementById("result").innerHTML = "Incorrect. Try again.";
        }
      }
  
