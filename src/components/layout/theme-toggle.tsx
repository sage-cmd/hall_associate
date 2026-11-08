"use client";

import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const isDark = resolvedTheme === "dark";
  return (
    <button
      type="button"
      aria-label="Toggle light and dark appearance"
      title="Toggle light and dark appearance"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="inline-flex size-10 items-center justify-center border border-[var(--line)] text-[var(--foreground)] transition-colors hover:border-[var(--gold)] hover:text-[var(--gold)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--gold)]"
    >
      <Moon aria-hidden="true" size={17} className="dark:hidden" />
      <Sun aria-hidden="true" size={17} className="hidden dark:block" />
    </button>
  );
}
