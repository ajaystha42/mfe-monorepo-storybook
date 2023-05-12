import * as React from "react";
import {
  AppShell as MantineAppShell,
  Header,
  Title,
  MantineProvider,
} from "@mantine/core";
import { BrowserRouter, Outlet, Link, Routes, Route } from "react-router-dom";

export type Route = {
  element: React.FunctionComponent;
  path: string;
};

export const AppShell: React.FunctionComponent<{
  title: string;
  colorScheme?: "light" | "dark";
  routes: Route[];
}> = ({ colorScheme, routes, title }) => (
  <BrowserRouter>
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
        <Routes>
          {routes.map((route) => (
            <Route
              key={route.path}
              path={route.path}
              element={<route.element />}
            />
          ))}
        </Routes>
        <Outlet />
      </MantineAppShell>
    </MantineProvider>
  </BrowserRouter>
);
