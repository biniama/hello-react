import React, { FC, memo } from "react";
import { capitalise } from "../helpers";

type SubtitleProps = {
  text: string;
};

const Subtitle: FC<SubtitleProps> = ({ text }) => {
  return <h2>{capitalise(text)}</h2>;
};

export default memo(Subtitle);
