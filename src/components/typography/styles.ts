import styled from "styled-components";

export const Typograph = styled.span`
  display: flex;
  color: ${(props) => props.theme.color.magenta};
  font-family: ${(props) => props.theme.fontFamily.primary};
`;
