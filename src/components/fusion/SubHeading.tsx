import { FC } from "react";

interface SubHeadingInterface{
  title:string
}
export const SubHeading:FC<SubHeadingInterface> = ({ title }) => (
  <div style={{ marginBottom: '1rem' }}>
    <p className="p__cormorant">{title}</p>
    <img src="/fusion/spoon.svg" alt="imagen de cuchara" className="spoon__img mt-2" />
  </div>
);

