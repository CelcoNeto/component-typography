import styled from 'styled-components';
import { DisplayProps } from './props';

export const Display = styled.h1<DisplayProps>`
  font-size: ${(props) => (props.size === 'medium' ? '2.5rem' : '3rem')};
  color: ${(props) => props.theme.color.magenta};
  font-family: ${(props) => props.theme.fontFamily.primary};
  font-weight: ${(props) => props.weight};
`;
