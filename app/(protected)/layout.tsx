import { ReactNode } from "react";
import Navbar from "./_components/navbar";

interface ProtectedLayoutProps {
  children: ReactNode;
}

const ProtectedLayout = ({ children }: ProtectedLayoutProps) => {
  return (
    <div className="w-full flex flex-col gap-y-10 items-center  bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-sky-400 to-blue-800 h-full">
      <Navbar />
      {children}
    </div>
  );
};

export default ProtectedLayout;
