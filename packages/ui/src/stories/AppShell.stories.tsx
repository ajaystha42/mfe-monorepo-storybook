import React from "react";
import { Meta, StoryFn, ReactRenderer } from "@storybook/react";

import { AppShell } from "../AppShell";

export default {
  title: "AppShell",
  component: AppShell,
};

const Template: StoryFn<any> = (args) => (
  <AppShell
    {...args}
    routes={[
      {
        path: "/",
        element: () => <div>Home</div>,
      },
    ]}
    navLinks={[
      {
        label: "Home",
        path: "/",
      },
    ]}
  />
);

export const Primaary: any = Template.bind({});
Primaary.args = {
  title: "My App",
};
