import { FC } from "react";
import style from "./Hero.module.css";
import Link from "next/link";
import { Container } from "@components/ui";

interface Props {
  headline: string;
  desription: string;
}

const Hero: FC<Props> = ({ headline, desription }) => {
  return (
    <div className="bg-secondary">
      <Container>
        <div className={style.root}>
          <h2 className={style.headline}>{headline}</h2>
          <div className="flex-1 max-w-4xl">
            <p className={style.description}>{desription}</p>
            <Link href="#">
              <a className={style.link}>Read it here</a>
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Hero;
