import React from "react";
import { Display } from "./styles";
import { TypographyProps } from "./props";

export const Typography: React.FC<TypographyProps> = ({
  size,
  weight,
  line,
}) => (
  <Display size={size} weight={weight} line={line}>
    TESTE
  </Display>
);
