import { ToNextButton } from "@/components/common/Button";

type Props = {
  isCorrect: boolean;
  correctAnswer: string;
  explanation: string;
  beFinish: boolean;
  toNext: () => void;
};

export const Modal = ({
  isCorrect,
  correctAnswer,
  explanation,
  beFinish,
  toNext,
}: Props) => {
  return (
    <div className="absolute top-0 left-0 h-screen !h-[100svh] w-screen bg-opacity-75 bg-gray-900 flex items-center justify-center">
      <div className="w-11/12 p-5 bg-white rounded">
        <p
          className={`py-10 font-bold text-center  ${
            isCorrect ? "text-red-600" : "text-blue-600"
          }`}
        >
          <span className="text-4xl">{isCorrect ? "正解" : "不正解"}</span>
          <br />
          <span className="text-9xl">{isCorrect ? "○" : "×"}</span>
        </p>
        <div className="text-lg">
          <div className="flex">
            <p className="w-10">🙆‍♂️：</p>
            <p className="font-bold">{correctAnswer}</p>
          </div>
          <div className="flex mt-2">
            <p className="w-10">👉：</p>
            <p className="font-bold">{explanation}</p>
          </div>
        </div>
        <p></p>
        <div className="mt-5">
          <ToNextButton toNext={toNext}>
            {beFinish ? "結果を見るゾ〜！" : "次の問題へ"}
          </ToNextButton>
        </div>
      </div>
    </div>
  );
};
