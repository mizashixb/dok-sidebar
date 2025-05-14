import { type LucideIcon } from "lucide-react";
export default function NavProjects({ projects, }: {
    projects: {
        name: string;
        url: string;
        icon: LucideIcon;
    }[];
}): import("react/jsx-runtime").JSX.Element;
