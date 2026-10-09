"use client";

import { useState } from "react";
import Link from "next/link";
import { Nav } from "@/components/Nav";
import { PromoBar } from "@/components/Hero";
import { Footer } from "@/components/Sections";
import { CartDrawer } from "@/components/CartDrawer";
import { WishlistDrawer } from "@/components/WishlistDrawer";
import { WhatsApp, InstagramFloat } from "@/components/Chrome";
import { useCart } from "@/components/CartProvider";
import { PRODUCTS, fmt, SHIPPING_COST } from "@/lib/products";

type Step = 1 | 2 | 3;
type PayMethod = "tarjeta";

interface ShipForm {
  name: string;
  phone: string;
  address: string;
  city: string;
  notes: string;
}

const PAY_OPTIONS: { id: PayMethod; label: string; hint: string }[] = [
  { id: "tarjeta", label: "Tarjeta débito/crédito", hint: "Visa, Mastercard y más" },
];

export default function CheckoutPage() {
  const cart = useCart();
  const [step, setStep] = useState<Step>(1);
  const [form, setForm] = useState<ShipForm>({ name: "", phone: "", address: "", city: "", notes: "" });
  const [pay, setPay] = useState<PayMethod>("tarjeta");
  const [triedStep2, setTriedStep2] = useState(false);
  const [orderNumber, setOrderNumber] = useState("");
  const [confirmedTotal, setConfirmedTotal] = useState(0);

  const resolved = cart.lines
    .map((l) => {
      const p = PRODUCTS.find((x) => x.id === l.id);
      if (!p) return null;
      return { ...l, product: p, lineTotal: fmt(p.priceNum * l.qty) };
    })
    .filter(Boolean) as { id: string; qty: number; product: (typeof PRODUCTS)[number]; lineTotal: string }[];

  const shipping = cart.freeShipReached ? 0 : SHIPPING_COST;
  const total = cart.subtotal + shipping;

  const errors = {
    name: form.name.trim() ? "" : "Requerido",
    phone: form.phone.trim() ? "" : "Requerido",
    address: form.address.trim() ? "" : "Requerido",
    city: form.city.trim() ? "" : "Requerido",
  };
  const hasErrors = Object.values(errors).some(Boolean);

  const set = (k: keyof ShipForm) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((f) => ({ ...f, [k]: e.target.value }));

  const goStep2 = () => setStep(2);
  const goStep3 = () => {
    setTriedStep2(true);
    if (!hasErrors) setStep(3);
  };

  const confirmOrder = () => {
    const num = "EDEN-" + Math.floor(100000 + Math.random() * 900000);
    setConfirmedTotal(total);
    setOrderNumber(num);
    resolved.forEach((l) => cart.remove(l.id));
  };

  const steps: { n: Step; label: string }[] = [
    { n: 1, label: "Carrito" },
    { n: 2, label: "Envío" },
    { n: 3, label: "Pago" },
  ];

  return (
    <>
      <Nav />
      <PromoBar />
      <section style={{ padding: "clamp(28px,4vw,48px) 0 clamp(80px,10vw,140px)" }}>
        <div style={{ maxWidth: 1180, margin: "0 auto", padding: "0 clamp(20px,5vw,64px)" }}>
          <h1 style={{ fontFamily: "var(--serif)", fontWeight: 500, fontSize: "clamp(30px,4vw,44px)", margin: "0 0 clamp(28px,4vw,40px)" }}>Checkout</h1>

          {orderNumber ? (
            <div className="checkout-step-in" style={{ textAlign: "center", padding: "48px 20px", maxWidth: 480, margin: "0 auto" }}>
              <div style={{ width: 56, height: 56, borderRadius: "50%", background: "var(--deep)", color: "var(--cream)", display: "grid", placeContent: "center", fontSize: 26, margin: "0 auto 22px" }}>✓</div>
              <h2 style={{ fontFamily: "var(--serif)", fontWeight: 500, fontSize: "clamp(26px,3.2vw,34px)", margin: "0 0 10px" }}>Pedido recibido</h2>
              <p style={{ fontSize: 14, color: "var(--muted)", margin: "0 0 4px" }}>Folio {orderNumber} · Total {fmt(confirmedTotal)}</p>
              <p style={{ fontSize: 14, lineHeight: 1.7, color: "var(--muted)", margin: "18px 0 30px" }}>Guardamos los datos de tu pedido. Nos pondremos en contacto contigo para coordinar el pago y el envío.</p>
              <Link href="/#coleccion" className="btn-deep" style={{ display: "inline-block", padding: "15px 30px", background: "var(--deep)", color: "var(--cream)", borderRadius: 999, fontSize: 13, letterSpacing: ".12em", textTransform: "uppercase" }}>Seguir viendo la colección</Link>
            </div>
          ) : resolved.length === 0 ? (
            <div style={{ textAlign: "center", padding: "60px 20px" }}>
              <p style={{ fontFamily: "var(--serif)", fontStyle: "italic", fontSize: 22, color: "var(--muted)", margin: "0 0 20px" }}>Tu carrito está vacío</p>
              <Link href="/#coleccion" className="btn-deep" style={{ display: "inline-block", padding: "15px 30px", background: "var(--deep)", color: "var(--cream)", borderRadius: 999, fontSize: 13, letterSpacing: ".12em", textTransform: "uppercase" }}>Ver la colección</Link>
            </div>
          ) : (
            <>
              {/* Indicador de pasos */}
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: "clamp(32px,4vw,48px)", maxWidth: 480 }}>
                {steps.map((s, i) => (
                  <div key={s.n} style={{ display: "flex", alignItems: "center", gap: 10, flex: i < steps.length - 1 ? 1 : "none" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 8, flexShrink: 0 }}>
                      <div style={{
                        width: 30, height: 30, borderRadius: "50%", display: "grid", placeContent: "center",
                        fontSize: 12.5, fontWeight: 600,
                        background: step >= s.n ? "var(--deep)" : "transparent",
                        color: step >= s.n ? "var(--cream)" : "var(--muted)",
                        border: `1px solid ${step >= s.n ? "var(--deep)" : "var(--line)"}`,
                        transition: "background .3s ease, color .3s ease, border-color .3s ease",
                      }}>
                        {step > s.n ? "✓" : s.n}
                      </div>
                      <span style={{ fontSize: 12.5, letterSpacing: ".06em", textTransform: "uppercase", color: step >= s.n ? "var(--ink)" : "var(--muted)", whiteSpace: "nowrap" }}>{s.label}</span>
                    </div>
                    {i < steps.length - 1 && (
                      <div style={{ height: 1, flex: 1, background: step > s.n ? "var(--deep)" : "var(--line)", transition: "background .3s ease" }} />
                    )}
                  </div>
                ))}
              </div>

              <div className="hero-grid" style={{ display: "grid", gridTemplateColumns: "1.3fr 1fr", gap: "clamp(32px,4vw,56px)", alignItems: "start" }}>
                {/* Contenido del paso */}
                <div key={step} className="checkout-step-in">
                  {step === 1 && (
                    <div>
                      {resolved.map((l) => (
                        <div key={l.id} style={{ display: "grid", gridTemplateColumns: "84px 1fr auto", gap: 16, alignItems: "center", padding: "18px 0", borderBottom: "1px solid var(--line)" }}>
                          <Link href={`/producto/${l.id}`} style={{ borderRadius: 14, overflow: "hidden", aspectRatio: "1", background: "var(--sand)" }}>
                            <img decoding="async" src={l.product.gallery[0]} alt={l.product.name} style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center" }} />
                          </Link>
                          <div>
                            <Link href={`/producto/${l.id}`} style={{ fontFamily: "var(--serif)", fontWeight: 600, fontSize: 18, color: "var(--ink)" }}>{l.product.name}</Link>
                            <div style={{ fontSize: 12, color: "var(--muted)", margin: "2px 0 10px" }}>{l.product.tier}</div>
                            <div className="eden-qty">
                              <button type="button" onClick={() => cart.changeQty(l.id, -1)} aria-label="Menos">−</button>
                              <span style={{ minWidth: 30, textAlign: "center", fontSize: 14, fontWeight: 600 }}>{l.qty}</span>
                              <button type="button" onClick={() => cart.changeQty(l.id, 1)} aria-label="Más">+</button>
                            </div>
                          </div>
                          <div style={{ textAlign: "right", display: "flex", flexDirection: "column", alignItems: "flex-end", gap: 10 }}>
                            <span style={{ fontFamily: "var(--serif)", fontWeight: 600, fontSize: 17 }}>{l.lineTotal}</span>
                            <button type="button" onClick={() => cart.remove(l.id)} style={{ background: "transparent", border: "none", cursor: "pointer", color: "var(--muted)", fontSize: 12, textDecoration: "underline" }}>Quitar</button>
                          </div>
                        </div>
                      ))}
                      <button type="button" onClick={goStep2} className="btn-deep" style={{ marginTop: 28, padding: "16px 32px", background: "var(--deep)", color: "var(--cream)", border: "none", borderRadius: 999, fontSize: 13, letterSpacing: ".14em", textTransform: "uppercase", cursor: "pointer" }}>Continuar a envío</button>
                    </div>
                  )}

                  {step === 2 && (
                    <div style={{ display: "flex", flexDirection: "column", gap: 18, maxWidth: 460 }}>
                      <Field label="Nombre completo" value={form.name} onChange={set("name")} error={triedStep2 ? errors.name : ""} />
                      <Field label="Teléfono (WhatsApp)" value={form.phone} onChange={set("phone")} error={triedStep2 ? errors.phone : ""} />
                      <Field label="Dirección" value={form.address} onChange={set("address")} error={triedStep2 ? errors.address : ""} />
                      <Field label="Ciudad" value={form.city} onChange={set("city")} error={triedStep2 ? errors.city : ""} />
                      <Field label="Notas (opcional)" value={form.notes} onChange={set("notes")} textarea />
                      <div style={{ display: "flex", gap: 12, marginTop: 6 }}>
                        <button type="button" onClick={() => setStep(1)} style={{ padding: "16px 26px", background: "transparent", border: "1px solid var(--line)", color: "var(--ink)", borderRadius: 999, fontSize: 13, letterSpacing: ".1em", textTransform: "uppercase", cursor: "pointer" }}>Atrás</button>
                        <button type="button" onClick={goStep3} className="btn-deep" style={{ flex: 1, padding: "16px 26px", background: "var(--deep)", color: "var(--cream)", border: "none", borderRadius: 999, fontSize: 13, letterSpacing: ".1em", textTransform: "uppercase", cursor: "pointer" }}>Continuar a pago</button>
                      </div>
                    </div>
                  )}

                  {step === 3 && (
                    <div style={{ maxWidth: 460 }}>
                      <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                        {PAY_OPTIONS.map((opt) => {
                          const active = pay === opt.id;
                          return (
                            <button
                              key={opt.id}
                              type="button"
                              onClick={() => setPay(opt.id)}
                              style={{
                                display: "flex", justifyContent: "space-between", alignItems: "center", gap: 12,
                                padding: "16px 18px", borderRadius: 14, textAlign: "left", cursor: "pointer",
                                background: active ? "var(--sand)" : "transparent",
                                border: `1px solid ${active ? "var(--deep)" : "var(--line)"}`,
                                transition: "background .2s ease, border-color .2s ease",
                              }}
                            >
                              <span>
                                <span style={{ display: "block", fontWeight: 600, fontSize: 14.5, color: "var(--ink)" }}>{opt.label}</span>
                                <span style={{ display: "block", fontSize: 12, color: "var(--muted)", marginTop: 2 }}>{opt.hint}</span>
                              </span>
                              <span style={{ width: 18, height: 18, borderRadius: "50%", border: `1px solid ${active ? "var(--deep)" : "var(--line)"}`, display: "grid", placeContent: "center", flexShrink: 0 }}>
                                {active && <span style={{ width: 10, height: 10, borderRadius: "50%", background: "var(--deep)" }} />}
                              </span>
                            </button>
                          );
                        })}
                      </div>
                      <div style={{ display: "flex", gap: 12, marginTop: 24 }}>
                        <button type="button" onClick={() => setStep(2)} style={{ padding: "16px 26px", background: "transparent", border: "1px solid var(--line)", color: "var(--ink)", borderRadius: 999, fontSize: 13, letterSpacing: ".1em", textTransform: "uppercase", cursor: "pointer" }}>Atrás</button>
                        <button type="button" onClick={confirmOrder} className="btn-deep" style={{ flex: 1, padding: "16px 26px", background: "var(--deep)", color: "var(--cream)", border: "none", borderRadius: 999, fontSize: 13, letterSpacing: ".1em", textTransform: "uppercase", cursor: "pointer" }}>Confirmar pedido</button>
                      </div>
                    </div>
                  )}
                </div>

                {/* Resumen del pedido */}
                <aside style={{ background: "var(--sand)", borderRadius: 22, padding: "26px 26px", position: "sticky", top: 100 }}>
                  <div style={{ fontSize: 12, letterSpacing: ".1em", textTransform: "uppercase", color: "var(--muted)", marginBottom: 16 }}>Resumen del pedido</div>
                  {resolved.map((l) => (
                    <div key={l.id} style={{ display: "flex", justifyContent: "space-between", fontSize: 13.5, color: "var(--ink)", padding: "7px 0" }}>
                      <span>{l.product.name} × {l.qty}</span>
                      <span>{l.lineTotal}</span>
                    </div>
                  ))}
                  <div style={{ borderTop: "1px solid var(--line)", marginTop: 12, paddingTop: 14, display: "flex", flexDirection: "column", gap: 8 }}>
                    <div style={{ display: "flex", justifyContent: "space-between", fontSize: 13.5 }}>
                      <span style={{ color: "var(--muted)" }}>Subtotal</span>
                      <span>{cart.subtotalText}</span>
                    </div>
                    <div style={{ display: "flex", justifyContent: "space-between", fontSize: 13.5 }}>
                      <span style={{ color: "var(--muted)" }}>Envío</span>
                      <span style={{ color: shipping === 0 ? "var(--gold-deep)" : "var(--ink)" }}>{shipping === 0 ? "Gratis" : fmt(shipping)}</span>
                    </div>
                    {!cart.freeShipReached && (
                      <p style={{ fontSize: 11.5, color: "var(--muted)", margin: 0 }}>Te faltan {cart.freeShipLeftText} para envío gratis.</p>
                    )}
                  </div>
                  <div style={{ borderTop: "1px solid var(--line)", marginTop: 12, paddingTop: 14, display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
                    <span style={{ fontSize: 14, color: "var(--muted)" }}>Total</span>
                    <span style={{ fontFamily: "var(--serif)", fontWeight: 600, fontSize: 26 }}>{fmt(total)}</span>
                  </div>
                </aside>
              </div>
            </>
          )}
        </div>
      </section>
      <Footer />
      <InstagramFloat />
      <WhatsApp />
      <CartDrawer />
      <WishlistDrawer />
    </>
  );
}

function Field({ label, value, onChange, error, textarea }: { label: string; value: string; onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void; error?: string; textarea?: boolean }) {
  const style: React.CSSProperties = {
    width: "100%", padding: "13px 16px", borderRadius: 12, fontSize: 14, fontFamily: "inherit", color: "var(--ink)",
    background: "var(--cream)", border: `1px solid ${error ? "#b3564a" : "var(--line)"}`, outline: "none",
  };
  return (
    <label style={{ display: "block" }}>
      <span style={{ display: "block", fontSize: 12, letterSpacing: ".06em", textTransform: "uppercase", color: "var(--muted)", marginBottom: 7 }}>{label}</span>
      {textarea ? <textarea rows={3} value={value} onChange={onChange} style={{ ...style, resize: "vertical" }} /> : <input value={value} onChange={onChange} style={style} />}
      {error && <span style={{ display: "block", fontSize: 12, color: "#b3564a", marginTop: 5 }}>{error}</span>}
    </label>
  );
}
