import styled from "styled-components";
import { TypographyProps } from "./props";

export const Display = styled.h1<TypographyProps>`
  font-size: ${(props) => (props.size === "medium" ? "2.5rem" : "3rem")};
  color: ${(props) => props.theme.color.magenta};
  font-family: ${(props) => props.theme.fontFamily.primary};
  font-weight: ${(props) => props.weight};
`;
