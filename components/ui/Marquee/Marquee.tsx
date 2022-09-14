import { FC, ReactNode } from "react";
import Ticker from "react-ticker";
import style from "./Marquee.module.css";
import cn from "classnames";

type CompProps = {
  children: ReactNode[];
  variant?: "primary" | "secondary";
};

const Marquee: FC<CompProps> = ({ children, variant = "primary" }) => {
  const rootClassName = cn(style.root, {
    [style.secondary]: variant === "secondary",
  });

  return (
    <div className={rootClassName}>
      <Ticker>{() => <div className={style.container}>{children}</div>}</Ticker>
    </div>
  );
};

export default Marquee;
