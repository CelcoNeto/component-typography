import React, { memo } from "react";
import { Typograph } from "./styles";
import { TypographyProps } from "../shared/components/typography/props";

export const Typography = memo((props: TypographyProps) => (
  <Typograph
    size={props.size}
    weight={props.weight}
    variant={props.tag}
    fontColor={props.fontColor}
  >
    {props.children}
  </Typograph>
));
