import { Header } from "@/components/Header";
import { LinkButton } from "../common/Button";

export const Start = () => {
  return (
    <div className="min-h-[100svh] min-h-screen flex flex-col ">
      <Header>🇩🇪 クレしんクイズだゾ〜！</Header>
      <div className="flex-grow px-5 py-10 flex items-center">
        <div>
          <p className="text-8xl text-center">🇩🇪👩🏻🧦🌻🐩</p>
          <p className="text-7xl text-center">🌬🍙💧🐰</p>
        </div>
      </div>
      <div className="p-5 mb-10">
        <LinkButton path="/quiz/" />
      </div>
    </div>
  );
};
