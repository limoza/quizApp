import { QuestionListType } from "@/constants/quiz";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { Header } from "@/components/Header";
import { Modal } from "@/components/Modal";
import { AnswerListItem } from "@/components/AnswerListItem";

type Props = {
  question: QuestionListType[];
};

export const QuizApp = ({ question }: Props) => {
  const [score, setScore] = useState(0);
  const [questionNumber, setQuestionNumber] = useState(0);
  const [isJudgment, setIsJudgment] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [isFinished, setIsFinished] = useState(false);

  // const isFinished = ;
  const router = useRouter();

  const toJudgement = (value: number, correct: number): void => {
    setIsJudgment((prev) => !prev);
    setIsCorrect(value === correct);
  };

  const toNext = (): void => {
    isCorrect && setScore((prev) => prev + 1);
    setQuestionNumber((prev) => prev + 1);
    setIsJudgment(false);
    setIsCorrect(false);
  };

  const toResult = () => {
    router.push({
      pathname: "/result",
      query: { score: score },
    });
  };

  useEffect(() => {
    setIsFinished(questionNumber === question.length);
    isFinished && toResult();
  }, [isFinished, questionNumber, question]);

  return (
    <>
      <div className="min-h-[100svh] min-h-screen flex flex-col ">
        <>
          <Header>第{questionNumber + 1}問</Header>
          {question
            .slice(questionNumber, questionNumber + 1)
            .map((item, index) => {
              return (
                <React.Fragment key={`question-${index}`}>
                  <div className="flex-grow px-5 py-10">
                    <p className="text-2xl font-bold">{item.question}</p>
                  </div>
                  {isJudgment && (
                    <Modal
                      isCorrect={isCorrect}
                      correctAnswer={item.choices[item.correctAnswer]}
                      explanation={item.explanation}
                      beFinish={questionNumber + 1 === question.length}
                      toNext={toNext}
                    />
                  )}
                  <ul className="p-5 bg-yellow-50">
                    {item.choices.map((choice, index) => (
                      <AnswerListItem
                        key={`choices-${index}`}
                        choice={choice}
                        index={index}
                        correct={item.correctAnswer}
                        clickHandler={toJudgement}
                      />
                    ))}
                  </ul>
                </React.Fragment>
              );
            })}
        </>
      </div>
    </>
  );
};
