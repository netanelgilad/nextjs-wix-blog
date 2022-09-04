import { ReactNode } from "react";

type IHeroOneButtonProps = {
  title: string;
  description: string;
  button: ReactNode;
};

const HeroOneButton = (props: IHeroOneButtonProps) => (
  <header className="text-center">
    <h1
      className="text-5xl text-gray-900 font-bold whitespace-pre-line leading-hero"
      dangerouslySetInnerHTML={{ __html: props.title }}
    ></h1>
    <div className="text-2xl mt-4 mb-16" dangerouslySetInnerHTML={{ __html: props.description }}></div>

    {props.button}
  </header>
);

export { HeroOneButton };
