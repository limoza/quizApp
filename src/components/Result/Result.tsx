import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { Header } from "@/components/Header";

export const Result = () => {
  const router = useRouter();
  const resultScore = Number(router.query.score);

  const rank =
    resultScore < 4 || isNaN(resultScore)
      ? "bad"
      : resultScore > 3 && resultScore < 7
      ? "soso"
      : resultScore > 6 && resultScore < 10
      ? "good"
      : resultScore === 10
      ? "best"
      : "bad";

  type Constants = {
    [key: string]: {
      text: string;
      emoji: string;
    };
  };

  const constants: Constants = {
    bad: {
      text: "イチから学び直すんだゾ〜！",
      emoji: "🙅‍♂️",
    },
    soso: {
      text: "んー。まぁまぁだけど、まだ勉強が足らないゾ〜！",
      emoji: "🤷‍♂️",
    },
    good: {
      text: "すごいゾ〜！クレヨンしんちゃん通だゾ〜！",
      emoji: "🙋‍♂️",
    },
    best: {
      text: "もう野原家名乗って良いゾ〜！",
      emoji: "🙆‍♂️",
    },
  };

  return (
    <div className="min-h-[100svh] flex flex-col ">
      <Header>🇩🇪 結果だゾ〜！</Header>
      <div className="flex-grow px-5 py-10 flex items-center">
        <div className="text-center w-full">
          <p className="mb-5 text-[calc((100vw-2.5rem)/10)]">
            {constants[rank]["emoji"].repeat(8)}
          </p>
          <p className="text-xl font-bold">得点は{resultScore}点です！</p>
          <p className="text-xl font-bold">{constants[rank]["text"]}</p>
          <p className="text-[calc((100vw-2.5rem)/10)] mt-5">
            {constants[rank]["emoji"].repeat(8)}
          </p>
        </div>
      </div>
    </div>
  );
};
