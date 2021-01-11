import React from "react";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from "@storybook/react/types-6-0";

import { Typography } from "./Typography";
import { TypographyProps } from "../shared/components/typography/props";

export default {
  title: "Example/Typography",
  component: Typography,
} as Meta;

const Template: Story<TypographyProps> = (args) => (
  <Typography {...args}>Exemplo</Typography>
);
export const Magenta = Template.bind({});
Magenta.args = { size: "large", fontColor: "magenta" };
