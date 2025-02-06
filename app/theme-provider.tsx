"use client";

import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";

export function ThemeProvider({
  children,
  ...props
}: React.ComponentProps<typeof NextThemesProvider>) {
  const [mounted, setMounted] = React.useState(false);

  // Ensures component only renders after mounting
  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null; // Prevents SSR mismatch

  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}
