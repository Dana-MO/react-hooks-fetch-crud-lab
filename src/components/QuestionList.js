import React, { useState, useEffect } from "react";
import QuestionItem from "./QuestionItem";

function QuestionList() {
  const [quiz, setQuiz] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/questions")
      .then(r => r.json())
      .then(data => setQuiz(data))
  }, []);

  function handleDeleteQuestion(deletedQuesiton) {
    const upDatedQuiz = quiz.filter((quesiton) => quesiton.id !== deletedQuesiton.id);
    setQuiz(upDatedQuiz);
  }

  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>
        {quiz.map((questions) => (
          <QuestionItem question={questions} key={questions.id} onDeleteQuestion={handleDeleteQuestion}/>
        ))}
      </ul>
    </section>
  );
}

export default QuestionList;
