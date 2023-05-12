import * as React from "react";
export type Route = {
    element: React.FunctionComponent;
    path: string;
};
export declare const AppShell: React.FunctionComponent<{
    title: string;
    colorScheme?: "light" | "dark";
    routes: Route[];
}>;
//# sourceMappingURL=index.d.ts.map