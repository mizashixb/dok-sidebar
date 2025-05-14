import * as React from "react";
export default function TeamSwitcher({ teams, }: {
    teams: {
        name: string;
        logo: React.ElementType;
        plan: string;
    }[];
}): import("react/jsx-runtime").JSX.Element | null;
