import { FC, ReactNode } from "react";

type InputChildren = {
    children: ReactNode;
};

const Form: FC<InputChildren> = ({ children }) => {
    return <form className="flex flex-col gap-2 items-center text-black">{children}</form>;
};

export default Form;
