import React from "react";
import "../tailwind.css";
type SidebarItem = {
    label: string;
    href: string;
};
interface SidebarProps {
    items: SidebarItem[];
    title?: string;
}
export declare const Sidebar: React.FC<SidebarProps>;
export {};
