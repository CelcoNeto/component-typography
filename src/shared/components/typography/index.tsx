import React, { memo } from "react";
import { Typograph } from "./styles";
import { TypographyProps } from "./props";

/**
 * @param size Tamanho da fonte
 * @param weight Peso da fonte (bold | regular)
 * @param tag Tag HTML
 */
export const Typography: React.FC<TypographyProps> = memo((props) => (
  <Typograph
    size={props.size}
    weight={props.weight}
    line={props.line}
    variant={props.tag}
    fontColor={props.fontColor}
  >
    TESTE
  </Typograph>
));
