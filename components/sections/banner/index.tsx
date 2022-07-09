import type { FunctionComponent } from "react";

interface Props {
  title: string;
  description: string;
  link: string;
}

const Banner: FunctionComponent<Props> = ({ title, description, link }) => {
  return (
    <section>
      <h1 className="mb-2 text-lg font-semibold underline-offset-2 hover:underline">
        <a href={link}>{title}</a>
      </h1>
      <p className="text-sm">{description}</p>
    </section>
  );
};

export default Banner;
