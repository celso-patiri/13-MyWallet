import { FC, ReactNode } from "react";

type InputChildren = {
  children: ReactNode;
};

const SignForm: FC<InputChildren> = ({ children }) => {
  return <form className="flex flex-col items-center gap-2 text-black ">{children}</form>;
};

export default SignForm;
