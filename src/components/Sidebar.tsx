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

export const Sidebar: React.FC<SidebarProps> = ({ items, title }) => {
  return (
    <aside className="w-64 h-screen border-r p-4 space-y-2">
      {title && <h2 className="text-lg font-semibold">{title}</h2>}
      {items.map((item) => (
        <a
          key={item.href}
          href={item.href}
          className="block text-sm text-muted-foreground hover:text-primary"
        >
          {item.label}
        </a>
      ))}
    </aside>
  );
};
