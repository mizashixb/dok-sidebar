import { type LucideIcon } from "lucide-react";
export default function NavMain({ items, }: {
    items: {
        title: string;
        url: string;
        icon?: LucideIcon;
        isActive?: boolean;
        items?: {
            title: string;
            url: string;
        }[];
    }[];
}): import("react/jsx-runtime").JSX.Element;
