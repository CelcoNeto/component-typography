import React, { memo } from 'react';
import { Typograph } from '../shared/components/typography/styles';
import { TypographyProps } from '../shared/components/typography/props';

/**
 * @param size Tamanho da fonte
 * @param weight Peso da fonte (bold | regular)
 * @param tag Tag HTML
 * @param fontColor Cor da font
 *
 * Componente especializado em renderizar
 * diversas tags de texto HTML com apenas uma propriedade passada
 * pelo componente pai
 */
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
