type Props = {
  children?: React.ReactNode;
};

export const Header = ({ children }: Props) => {
  return (
    <p className="p-4 bg-yellow-300 font-bold text-center text-xl border-b border-yellow-500">
      {children}
    </p>
  );
};
