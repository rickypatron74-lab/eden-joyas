const STEPS = [
  {
    n: "01",
    t: "Hilo",
    d: "Se elige el hilo que sostendrá cada balín de la pieza.",
    icon: <path className="craft-line" d="M2 12c2-6 4 6 6 0s4-6 6 0 4 6 6 0" />,
  },
  {
    n: "02",
    t: "Nudo",
    d: "Cada nudo se hace a mano, uno a uno, sin máquinas.",
    icon: (
      <>
        <circle className="craft-line" cx="9" cy="12" r="6" />
        <circle className="craft-line" cx="15" cy="12" r="6" />
      </>
    ),
  },
  {
    n: "03",
    t: "Balín",
    d: "El oro 18k entra en el tejido, balín a balín.",
    icon: <circle className="craft-line" cx="12" cy="12" r="7" />,
  },
  {
    n: "04",
    t: "EDEN",
    d: "Una pieza única, lista para no quitártela nunca.",
    icon: <path className="craft-line" d="M12 3 L21 12 L12 21 L3 12 Z" />,
  },
];

export function Craft() {
  return (
    <section id="artesania" style={{ background: "var(--cream)", padding: "clamp(64px,9vw,120px) 0" }}>
      <div style={{ maxWidth: 1180, margin: "0 auto", padding: "0 clamp(20px,5vw,64px)" }}>
        <div data-reveal style={{ textAlign: "center", maxWidth: 640, margin: "0 auto clamp(48px,6vw,76px)" }}>
          <span style={{ fontSize: 12, letterSpacing: ".26em", textTransform: "uppercase", color: "var(--gold)", fontWeight: 600 }}>Hecho a mano</span>
          <h2 style={{ fontFamily: "var(--serif)", fontWeight: 500, fontSize: "clamp(32px,4.4vw,54px)", lineHeight: 1.04, letterSpacing: "-.01em", margin: "14px 0 0" }}>Del hilo a la pieza que no te quitas.</h2>
        </div>

        <div data-reveal className="craft-steps">
          {STEPS.map((s) => (
            <div key={s.n} className="craft-step">
              <span style={{ fontFamily: "var(--serif)", fontSize: 14, color: "var(--gold)" }}>{s.n}</span>
              <svg viewBox="0 0 24 24" fill="none" stroke="var(--gold-deep)" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
                {s.icon}
              </svg>
              <h3 style={{ fontFamily: "var(--serif)", fontWeight: 600, fontSize: 19, margin: 0 }}>{s.t}</h3>
              <p style={{ fontSize: 13.5, lineHeight: 1.55, color: "var(--muted)", margin: 0, maxWidth: "22ch" }}>{s.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
