
import { useState } from 'react';
function QuizApp(params) {

  const questions = [
    {
      questionText: 'What is the capital of France?',
      answerOptions: ["Berlin", "Madrid", "Paris", "Lisbon"],
      correctAnswer: "Paris"
    },
    {
      questionText: 'Which planet is known as the Red Planet?',
      answerOptions: ["Earth", "Mars", "Jupiter", "Saturn"],
      correctAnswer: "Mars"
    },
    {
      questionText: 'Who wrote "To Kill a Mockingbird"?',
      answerOptions: ["Harper Lee", "Mark Twain", "Ernest Hemingway", "F. Scott Fitzgerald"],
      correctAnswer: "Harper Lee"
    },
    {
      questionText: 'What is the largest ocean on Earth?',
      answerOptions: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"],
      correctAnswer: "Pacific Ocean"
    },
    {
      questionText: 'What is the chemical symbol for gold?',
      answerOptions: ["Au", "Ag", "Gd", "Go"],
      correctAnswer: "Au"
    }
  ]

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [score, setScore] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);

  const handleSelectAnswer = (answer) => {}
  const handleNextQuestion = () => {}
  const handleFinishQuiz = () => {}

  
  return (
    <>
    {
      !quizCompleted ? (
        
        <div>
          <div className="question-section"> 
            <h2>{questions[currentQuestion].questionText}</h2>
          </div>
          <div className="options">
            {questions[currentQuestion].answerOptions.map((answerOption) => (
              <button 
                key={answerOption}
                onClick={() => setSelectedAnswer(answerOption)}
                style={{ 
                  backgroundColor: selectedAnswer === answerOption ? 'lightblue' : 'white',
                  margin: '5px',
                  padding: '10px 20px',
                  border: '1px solid #ccc',
                  borderRadius: '5px',
                  cursor: 'pointer'
                }}
              > 
                {answerOption}
              </button>
            ))} 
            

          </div>
        </div>
      ) : (
        <h3>Completed</h3>
      )
    }
    </>
  )
  
}
export default QuizApp