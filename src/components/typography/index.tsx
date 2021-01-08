import React from 'react';
import { Display } from './styles';
interface Props {
  size?: string;
  weight?: string;
  line?: string;
}
export const Typography: React.FC<Props> = ({ size, weight, line }) => (
  <Display size={size} weight={weight} line={line}>
    TESTE
  </Display>
);
