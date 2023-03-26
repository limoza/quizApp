import Link from "next/link";
import { useRouter } from "next/router";
import { Children } from "react";

type BaseButtonProps = {
  children: React.ReactNode;
  value?: number;
  onClick?: () => void;
};

const BaseButton = ({ children, ...props }: BaseButtonProps) => {
  return (
    <button
      className="py-5 px-4 block text-center w-full border border-yellow-500 rounded bg-yellow-300 shadow-sm font-bold"
      type="button"
      {...props}
    >
      {children}
    </button>
  );
};

type AnswerButtonProps = {
  text: string;
  value: number;
  correct: number;
  clickHandler: (value: number, correct: number) => void;
};
export const AnswerButton = ({
  text,
  value,
  correct,
  clickHandler,
}: AnswerButtonProps) => {
  return (
    <BaseButton value={value} onClick={() => clickHandler(value, correct)}>
      {text}
    </BaseButton>
  );
};

type ToNextButtonProps = {
  children: React.ReactNode;
  toNext: () => void;
};
export const ToNextButton = ({ children, toNext }: ToNextButtonProps) => {
  return <BaseButton onClick={() => toNext()}>{children}</BaseButton>;
};

type LinkButtonProps = {
  path: string;
};
export const LinkButton = ({ path }: LinkButtonProps) => {
  return (
    <Link href={path}>
      <BaseButton>やれば〜？</BaseButton>
    </Link>
  );
};
