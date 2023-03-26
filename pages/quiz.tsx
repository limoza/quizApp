import type { NextPage } from "next";
import { QuizApp } from "@/components/QuizApp";
import { QuizList } from "@/constants/quiz";

const Quiz: NextPage = () => {
  return <QuizApp question={QuizList.Shinchan1.quiz} />;
};

export default Quiz;
