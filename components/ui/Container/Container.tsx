import { FC, ReactNode, ComponentType, HTMLAttributes } from "react";
// import style from "./Hero.module.css";

type CompProps = {
  children: ReactNode;
  el?: ComponentType<HTMLAttributes<HTMLElement>>;
};

const Container: FC<CompProps> = ({ children, el: Component = "div" }) => {
  return (
    <Component className="px-6 mx-auto max-w-[1920px]">{children}</Component>
  );
};

export default Container;
