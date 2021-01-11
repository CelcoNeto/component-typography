import { Typography } from "@material-ui/core";
import styled from "styled-components";
import { TypographyProps } from "../shared/components/typography/props";
import { theme } from "../theme/globals";

export const Typograph = styled(Typography)<TypographyProps>`
  font-size: ${(props) => (props.size === "medium" ? "2.5rem" : "3rem")};
  color: ${theme.color.magenta};
  font-family: ${theme.fontFamily.primary};
`;
