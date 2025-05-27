const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex justify-center items-center p-40">{children}</div>
  );
};

export default AuthLayout;
