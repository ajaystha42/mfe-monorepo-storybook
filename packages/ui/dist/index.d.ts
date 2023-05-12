import * as React from "react";
export type Route = {
    element: React.FunctionComponent;
    path: string;
};
export type NavLink = {
    label: string;
    path: string;
};
export declare const AppShell: React.FunctionComponent<{
    title: string;
    colorScheme?: "light" | "dark";
    routes: Route[];
    navLinks: NavLink[];
}>;
//# sourceMappingURL=index.d.ts.map