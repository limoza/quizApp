type Props = {
  children: React.ReactNode;
};

export const Card = ({ children }: Props) => {
  return (
    <div className="p-4 rounded-sm border border-neutral-400 bg-white shadow-sm">
      {children}
    </div>
  );
};
