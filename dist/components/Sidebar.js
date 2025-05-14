import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import "../tailwind.css";
export const Sidebar = ({ items, title }) => {
    return (_jsxs("aside", { className: "w-64 h-screen border-r p-4 space-y-2", children: [title && _jsx("h2", { className: "text-lg font-semibold", children: title }), items.map((item) => (_jsx("a", { href: item.href, className: "block text-sm text-muted-foreground hover:text-primary", children: item.label }, item.href)))] }));
};
