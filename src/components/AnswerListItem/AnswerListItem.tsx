import { AnswerButton } from "@/components/common/Button";

type Props = {
  index: number;
  choice: string;
  correct: number;
  clickHandler: (value: number, correct: number) => void;
};

export const AnswerListItem = ({
  index,
  choice,
  correct,
  clickHandler,
}: Props) => (
  <li className="mt-5 first:mt-0">
    <AnswerButton
      text={choice}
      value={index}
      correct={correct}
      clickHandler={clickHandler}
    />
  </li>
);
