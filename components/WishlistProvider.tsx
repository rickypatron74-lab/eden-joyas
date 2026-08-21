"use client";

import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";

interface WishlistCtx {
  ids: string[];
  count: number;
  has: (id: string) => boolean;
  toggle: (id: string) => void;
  open: boolean;
  openWishlist: () => void;
  closeWishlist: () => void;
}

const Ctx = createContext<WishlistCtx | null>(null);
const KEY = "eden-wishlist-v1";

export function WishlistProvider({ children }: { children: React.ReactNode }) {
  const [ids, setIds] = useState<string[]>([]);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(KEY);
      if (raw) setIds(JSON.parse(raw));
    } catch {}
  }, []);

  const toggle = useCallback((id: string) => {
    setIds((prev) => {
      const next = prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id];
      try { localStorage.setItem(KEY, JSON.stringify(next)); } catch {}
      return next;
    });
  }, []);

  const value = useMemo<WishlistCtx>(() => ({
    ids,
    count: ids.length,
    has: (id: string) => ids.includes(id),
    toggle,
    open,
    openWishlist: () => setOpen(true),
    closeWishlist: () => setOpen(false),
  }), [ids, open, toggle]);

  return <Ctx.Provider value={value}>{children}</Ctx.Provider>;
}

export function useWishlist(): WishlistCtx {
  const ctx = useContext(Ctx);
  if (!ctx) throw new Error("useWishlist must be used within WishlistProvider");
  return ctx;
}
