import * as React from "react";
import {
  AppShell as MantineAppShell,
  Header,
  Title,
  MantineProvider,
} from "@mantine/core";

export const AppShell: React.FunctionComponent<{
  title: string;
  colorScheme?: "light" | "dark";
}> = ({ colorScheme, title }) => (
  <MantineProvider
    withGlobalStyles
    withNormalizeCSS
    theme={{
      colorScheme,
    }}
  >
    <MantineAppShell
      padding="md"
      header={
        <Header
          height={60}
          p="xs"
          sx={{ display: "flex" }}
          styles={(theme) => ({
            main: {
              backgroundColor:
                theme.colorScheme === "dark"
                  ? theme.colors.dark[8]
                  : theme.colors.gray[0],
            },
          })}
        >
          <Title>{title}</Title>
        </Header>
      }
    >
      <div>Hello</div>
    </MantineAppShell>
  </MantineProvider>
);
