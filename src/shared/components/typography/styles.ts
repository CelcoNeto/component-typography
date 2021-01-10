import { Typography } from "@material-ui/core";
import styled from "styled-components";
import { TypographyProps } from "./props";

export const Typograph = styled(Typography)<TypographyProps>`
  font-size: ${(props) => (props.size === "medium" ? "2.5rem" : "3rem")};
  color: ${(props) => props.theme.color[props.fontColor || "magenta"]};
  font-family: ${(props) => props.theme.fontFamily.primary};
  font-weight: ${(props) => props.weight};
`;
