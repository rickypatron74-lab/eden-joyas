"use client";

import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import { PRODUCTS, FREE_SHIP, fmt } from "@/lib/products";

interface CartLine { id: string; qty: number; size?: string; }
interface CartCtx {
  lines: CartLine[];
  count: number;
  subtotal: number;
  subtotalText: string;
  freeShipReached: boolean;
  freeShipLeftText: string;
  freeShipPct: number;
  open: boolean;
  openCart: () => void;
  closeCart: () => void;
  add: (id: string, qty?: number, size?: string) => void;
  changeQty: (id: string, delta: number, size?: string) => void;
  remove: (id: string, size?: string) => void;
}

const Ctx = createContext<CartCtx | null>(null);
const KEY = "eden-cart-v1";

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [lines, setLines] = useState<CartLine[]>([]);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(KEY);
      if (raw) setLines(JSON.parse(raw));
    } catch {}
  }, []);

  const persist = useCallback((next: CartLine[]) => {
    setLines(next);
    try { localStorage.setItem(KEY, JSON.stringify(next)); } catch {}
  }, []);

  const add = useCallback((id: string, qty = 1, size?: string) => {
    setLines((prev) => {
      const next = prev.slice();
      const line = next.find((l) => l.id === id && l.size === size);
      if (line) line.qty += qty; else next.push({ id, qty, size });
      try { localStorage.setItem(KEY, JSON.stringify(next)); } catch {}
      return next;
    });
    setOpen(true);
  }, []);

  const changeQty = useCallback((id: string, delta: number, size?: string) => {
    setLines((prev) => {
      const next = prev
        .map((l) => (l.id === id && l.size === size ? { ...l, qty: l.qty + delta } : l))
        .filter((l) => l.qty > 0);
      try { localStorage.setItem(KEY, JSON.stringify(next)); } catch {}
      return next;
    });
  }, []);

  const remove = useCallback((id: string, size?: string) => {
    persist(lines.filter((l) => !(l.id === id && l.size === size)));
  }, [lines, persist]);

  const value = useMemo<CartCtx>(() => {
    const count = lines.reduce((n, l) => n + l.qty, 0);
    const subtotal = lines.reduce((n, l) => {
      const p = PRODUCTS.find((x) => x.id === l.id);
      return n + (p ? p.priceNum * l.qty : 0);
    }, 0);
    return {
      lines,
      count,
      subtotal,
      subtotalText: fmt(subtotal),
      freeShipReached: subtotal >= FREE_SHIP,
      freeShipLeftText: fmt(Math.max(0, FREE_SHIP - subtotal)),
      freeShipPct: Math.min(100, Math.round((subtotal / FREE_SHIP) * 100)),
      open,
      openCart: () => setOpen(true),
      closeCart: () => setOpen(false),
      add,
      changeQty,
      remove,
    };
  }, [lines, open, add, changeQty, remove]);

  return <Ctx.Provider value={value}>{children}</Ctx.Provider>;
}

export function useCart(): CartCtx {
  const ctx = useContext(Ctx);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
}
