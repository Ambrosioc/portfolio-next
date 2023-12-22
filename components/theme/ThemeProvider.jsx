"use client";

import { ThemeProvider as NextThemesProvides } from "next-themes";

export default function ThemeProvider({ children, ...props }) {
	return <NextThemesProvides {...props}>{children}</NextThemesProvides>;
}
