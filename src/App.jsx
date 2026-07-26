import { useState, useEffect } from "react";

/* ─────────────────────────────────────────────
   Sarah's Morning ✨ — a pink, personal ritual
   ───────────────────────────────────────────── */

const C = {
  bg: "#FDF1F6",        // blush background
  card: "#FFFFFF",
  border: "#F6D3E2",
  pink: "#E75B8D",      // main pink
  deepPink: "#C93A70",
  berry: "#6B2145",     // headings / dark text
  ink: "#4A2338",       // body text
  sub: "#A26784",       // soft secondary text
  blushSoft: "#FCE4EE", // soft fills
  gold: "#F2B95C",      // the rising sun
  skyTop: "#5C2244",
  skyMid: "#D95C8C",
  skyLow: "#FFC9D8",
};

const FONT_CSS = `
@import url('https://fonts.googleapis.com/css2?family=Great+Vibes&family=Quicksand:wght@400;500;600;700&display=swap');
`;

const fontScript = "'Great Vibes', 'Brush Script MT', cursive";
const fontBody = "'Quicksand', 'Trebuchet MS', sans-serif";

/* ── helpers ─────────────────────────────────── */

const todayKey = () => {
  const d = new Date();
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
};

const todayLong = () =>
  new Date().toLocaleDateString("en-GB", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });

async function askClaude(prompt, useSearch = false) {
  const res = await fetch("/api/chat", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ prompt, useSearch }),
  });
  const data = await res.json();
  return (data.text || "").trim();
}

async function storageGet(key) {
  try {
    const r = localStorage.getItem(`morning:${key}`);
    return r ? JSON.parse(r) : null;
  } catch {
    return null;
  }
}
async function storageSet(key, value) {
  try {
    localStorage.setItem(`morning:${key}`, JSON.stringify(value));
  } catch (e) {
    console.error("storage error", e);
  }
}

/* ── tiny shared UI ──────────────────────────── */

const btnBase = {
  fontFamily: fontBody,
  fontWeight: 700,
  fontSize: 16,
  border: "none",
  borderRadius: 999,
  padding: "13px 26px",
  cursor: "pointer",
  transition: "transform .12s ease",
};

function PinkButton({ children, onClick, disabled, ghost }) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      style={{
        ...btnBase,
        background: ghost ? "transparent" : `linear-gradient(135deg, ${C.pink}, ${C.deepPink})`,
        color: ghost ? C.sub : "#fff",
        border: ghost ? `2px solid ${C.border}` : "none",
        boxShadow: ghost ? "none" : "0 6px 16px rgba(231,91,141,.35)",
        opacity: disabled ? 0.55 : 1,
      }}
    >
      {children}
    </button>
  );
}

function TextArea({ value, onChange, placeholder, rows = 5 }) {
  return (
    <textarea
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      rows={rows}
      style={{
        width: "100%",
        boxSizing: "border-box",
        fontFamily: fontBody,
        fontSize: 15.5,
        color: C.ink,
        background: "#FFF8FB",
        border: `2px solid ${C.border}`,
        borderRadius: 18,
        padding: "14px 16px",
        outline: "none",
        resize: "vertical",
        lineHeight: 1.5,
      }}
    />
  );
}

function AiText({ children }) {
  return (
    <div
      style={{
        whiteSpace: "pre-wrap",
        background: C.blushSoft,
        border: `1.5px solid ${C.border}`,
        borderRadius: 18,
        padding: "16px 18px",
        color: C.ink,
        fontSize: 15,
        lineHeight: 1.65,
        textAlign: "left",
      }}
    >
      {children}
    </div>
  );
}

function Loading({ label }) {
  return (
    <div style={{ color: C.sub, fontWeight: 600, padding: "14px 0", fontSize: 15 }}>
      💗 {label}
    </div>
  );
}

/* ── the rising sun header (progress) ────────── */

function Sunrise({ progress, greetingName }) {
  const angle = Math.PI * (1 - Math.min(progress, 1));
  const cx = 160, cy = 128, r = 96;
  const sx = cx + r * Math.cos(angle);
  const sy = cy - r * Math.sin(angle);
  return (
    <div
      style={{
        borderRadius: 28,
        overflow: "hidden",
        background: `linear-gradient(180deg, ${C.skyTop} 0%, ${C.skyMid} 62%, ${C.skyLow} 100%)`,
        boxShadow: "0 10px 30px rgba(107,33,69,.25)",
        position: "relative",
        marginBottom: 20,
      }}
    >
      <svg viewBox="0 0 320 150" style={{ display: "block", width: "100%" }}>
        <path
          d={`M ${cx - r} ${cy} A ${r} ${r} 0 0 1 ${cx + r} ${cy}`}
          fill="none"
          stroke="rgba(255,255,255,.5)"
          strokeWidth="2"
          strokeDasharray="1 8"
          strokeLinecap="round"
        />
        <circle cx={sx} cy={sy} r="22" fill={C.gold} opacity="0.25" />
        <circle cx={sx} cy={sy} r="13" fill={C.gold} />
        <circle cx={sx} cy={sy} r="13" fill="url(#none)" stroke="#FFE3A6" strokeWidth="2" />
        <text x="36" y="42" fontSize="13" opacity="0.9">✨</text>
        <text x="272" y="56" fontSize="12" opacity="0.8">✨</text>
        <text x="236" y="30" fontSize="10" opacity="0.7">✨</text>
        <rect x="0" y={cy} width="320" height="30" fill="rgba(255,255,255,.18)" />
      </svg>
      <div
        style={{
          position: "absolute",
          top: 14,
          left: 0,
          right: 0,
          textAlign: "center",
          color: "#fff",
        }}
      >
        <div style={{ fontFamily: fontScript, fontSize: 34, lineHeight: 1.1, textShadow: "0 2px 8px rgba(0,0,0,.2)" }}>
          Good morning, {greetingName}
        </div>
        <div style={{ fontFamily: fontBody, fontSize: 12.5, fontWeight: 600, opacity: 0.9, marginTop: 2 }}>
          {todayLong()}
        </div>
      </div>
    </div>
  );
}

/* ── step shell with skip ────────────────────── */

function Step({ icon, title, subtitle, children, onSkip, onBack, canBack }) {
  return (
    <div
      style={{
        background: C.card,
        border: `1.5px solid ${C.border}`,
        borderRadius: 26,
        padding: "26px 22px 22px",
        boxShadow: "0 8px 24px rgba(231,91,141,.12)",
        textAlign: "center",
      }}
    >
      <div style={{ fontSize: 40, marginBottom: 6 }}>{icon}</div>
      <h2 style={{ fontFamily: fontBody, fontWeight: 700, fontSize: 21, color: C.berry, margin: "0 0 6px" }}>
        {title}
      </h2>
      {subtitle && (
        <p style={{ fontFamily: fontBody, color: C.sub, fontSize: 15, margin: "0 0 18px", lineHeight: 1.5 }}>
          {subtitle}
        </p>
      )}
      <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>{children}</div>
      <div style={{ marginTop: 18, display: "flex", justifyContent: "center", gap: 18 }}>
        {canBack && (
          <button
            onClick={onBack}
            style={{ ...btnBase, background: "none", color: C.sub, padding: "6px 10px", fontSize: 13.5 }}
          >
            ← back
          </button>
        )}
        <button
          onClick={onSkip}
          style={{ ...btnBase, background: "none", color: C.sub, padding: "6px 10px", fontSize: 13.5, textDecoration: "underline" }}
        >
          skip this step ↷
        </button>
      </div>
    </div>
  );
}

/* ── individual steps ────────────────────────── */

function TickStep({ lines, doneLabel, complete }) {
  return (
    <>
      {lines && (
        <div style={{ textAlign: "left", background: C.blushSoft, borderRadius: 18, padding: "14px 18px" }}>
          {lines.map((l) => (
            <div key={l} style={{ fontFamily: fontBody, color: C.ink, fontSize: 15, padding: "3px 0", fontWeight: 500 }}>
              💗 {l}
            </div>
          ))}
        </div>
      )}
      <PinkButton onClick={complete}>{doneLabel}</PinkButton>
    </>
  );
}

function DinnerStep({ complete }) {
  const [plan, setPlan] = useState("");
  const [recent, setRecent] = useState([]);
  useEffect(() => {
    storageGet("dinners").then((d) => d && setRecent(d.slice(-3).reverse()));
  }, []);
  const save = async () => {
    if (!plan.trim()) return;
    const all = (await storageGet("dinners")) || [];
    all.push({ date: todayKey(), plan: plan.trim() });
    await storageSet("dinners", all);
    complete();
  };
  return (
    <>
      <TextArea value={plan} onChange={setPlan} rows={2} placeholder="Tonight I'm thinking of making…" />
      {recent.length > 0 && (
        <div style={{ fontFamily: fontBody, fontSize: 13, color: C.sub, textAlign: "left" }}>
          Recent dinners: {recent.map((r) => r.plan).join(" · ")}
        </div>
      )}
      <PinkButton onClick={save} disabled={!plan.trim()}>Save my dinner plan 🍽️</PinkButton>
    </>
  );
}

function AbundanceStep({ complete }) {
  return (
    <>
      <div style={{ fontFamily: fontScript, fontSize: 26, color: C.deepPink, lineHeight: 1.3 }}>
        “I am open to all the abundance this day holds for me.”
      </div>
      <p style={{ fontFamily: fontBody, color: C.sub, fontSize: 14.5, margin: 0 }}>
        Take a breath and speak your own words of abundance out loud, from the heart.
      </p>
      <PinkButton onClick={complete}>I've spoken my words 🌸</PinkButton>
    </>
  );
}

function WritingStep({ complete }) {
  const [text, setText] = useState("");
  const [reply, setReply] = useState("");
  const [busy, setBusy] = useState(false);
  const interpret = async () => {
    setBusy(true);
    setReply("");
    try {
      const out = await askClaude(
        `This is my automatic writing from this morning — whatever popped into my head about today. In my spiritual practice this is a message from my spirit guide. Interpret it for me section by section: break my writing into its natural sections, gently quote a few of my own words from each section, and share what that section means for my day ahead. Be warm, loving, and specific to what I actually wrote. My writing:\n\n${text}`
      );
      setReply(out || "The connection didn't come through — please try again.");
    } catch {
      setReply("The connection didn't come through — please try again.");
    }
    setBusy(false);
  };
  return (
    <>
      <TextArea value={text} onChange={setText} placeholder="Let the words flow… whatever pops into your head about today." />
      {!reply && <PinkButton onClick={interpret} disabled={!text.trim() || busy}>{busy ? "Listening…" : "Interpret my writing ✍️"}</PinkButton>}
      {busy && <Loading label="Receiving the meaning of your words…" />}
      {reply && (
        <>
          <AiText>{reply}</AiText>
          <PinkButton onClick={complete}>Thank you, done 💌</PinkButton>
        </>
      )}
    </>
  );
}

function DreamStep({ complete }) {
  const [stage, setStage] = useState("ask"); // ask → write → reply
  const [text, setText] = useState("");
  const [reply, setReply] = useState("");
  const [busy, setBusy] = useState(false);
  const interpret = async () => {
    setBusy(true);
    try {
      const out = await askClaude(
        `I had this dream last night. Explain its meanings for me — go gently through the key symbols and feelings one by one, then give me the overall message of the dream. Use a warm spiritual lens. Don't ask me any questions, just give the full interpretation. My dream:\n\n${text}`
      );
      setReply(out || "The connection didn't come through — please try again.");
      setStage("reply");
    } catch {
      setReply("The connection didn't come through — please try again.");
      setStage("reply");
    }
    setBusy(false);
  };
  if (stage === "ask")
    return (
      <>
        <PinkButton onClick={() => setStage("write")}>Yes, I had a dream 🌙</PinkButton>
        <PinkButton ghost onClick={complete}>No dreams last night</PinkButton>
      </>
    );
  if (stage === "write")
    return (
      <>
        <TextArea value={text} onChange={setText} placeholder="Tell me everything you remember…" />
        <PinkButton onClick={interpret} disabled={!text.trim() || busy}>{busy ? "Interpreting…" : "Reveal the meaning ✨"}</PinkButton>
        {busy && <Loading label="Walking through your dream…" />}
      </>
    );
  return (
    <>
      <AiText>{reply}</AiText>
      <PinkButton onClick={complete}>Lovely, done 🌙</PinkButton>
    </>
  );
}

function EventsStep({ complete }) {
  const [reply, setReply] = useState("");
  const [busy, setBusy] = useState(false);
  const fetchEvents = async () => {
    setBusy(true);
    try {
      const out = await askClaude(
        `Today is ${todayLong()}. Search for upcoming events in March, Cambridgeshire, UK and the immediately surrounding Fenland area ONLY — I don't drive, so nothing far away. Check sources such as the March Town Council events calendar (marchtowncouncil.gov.uk), the Cambridgeshire community directory, hayfenland.co.uk/activities, skylark-events.co.uk, sheprethwildlifepark.co.uk/whats-on, and local March community pages/Facebook groups where you can. List each event with its FULL date including the day of the week (never just "today" or "tomorrow"), the venue, and note anything family-friendly. Friendly readable list, most imminent first.`,
        true
      );
      setReply(out || "I couldn't fetch events right now — please try again.");
    } catch {
      setReply("I couldn't fetch events right now — please try again.");
    }
    setBusy(false);
  };
  return (
    <>
      {!reply && <PinkButton onClick={fetchEvents} disabled={busy}>{busy ? "Searching…" : "Check what's on in March 🎪"}</PinkButton>}
      {busy && <Loading label="Looking around March & Fenland for you…" />}
      {reply && (
        <>
          <AiText>{reply}</AiText>
          <PinkButton onClick={complete}>Done with events 🎀</PinkButton>
        </>
      )}
    </>
  );
}

function NewsStep({ complete }) {
  const [reply, setReply] = useState("");
  const [busy, setBusy] = useState(false);
  const [topic, setTopic] = useState("");
  const [detail, setDetail] = useState("");
  const [busy2, setBusy2] = useState(false);
  const fetchNews = async () => {
    setBusy(true);
    try {
      const out = await askClaude(
        `Today is ${todayLong()}. Give me my morning news briefing in three short sections with clear headings: 1) LOCAL — March, Wisbech and Fenland (Cambridgeshire, UK) news from the last 2 weeks only. 2) NATIONAL — the top UK stories right now. 3) INTERNATIONAL — the top world stories right now. Brief, friendly bullets; include full dates with day of the week where relevant.`,
        true
      );
      setReply(out || "I couldn't fetch the news right now — please try again.");
    } catch {
      setReply("I couldn't fetch the news right now — please try again.");
    }
    setBusy(false);
  };
  const moreDetail = async () => {
    setBusy2(true);
    setDetail("");
    try {
      const out = await askClaude(
        `Earlier morning briefing:\n${reply}\n\nPlease give me more detail on: ${topic}. Search for the latest if needed.`,
        true
      );
      setDetail(out || "Couldn't fetch more detail — try again.");
    } catch {
      setDetail("Couldn't fetch more detail — try again.");
    }
    setBusy2(false);
  };
  return (
    <>
      {!reply && <PinkButton onClick={fetchNews} disabled={busy}>{busy ? "Gathering…" : "Get my news briefing 📰"}</PinkButton>}
      {busy && <Loading label="Gathering local, UK and world news…" />}
      {reply && (
        <>
          <AiText>{reply}</AiText>
          <TextArea rows={1} value={topic} onChange={setTopic} placeholder="Want more detail on any story? Type it here…" />
          <PinkButton ghost onClick={moreDetail} disabled={!topic.trim() || busy2}>{busy2 ? "Fetching…" : "Tell me more"}</PinkButton>
          {busy2 && <Loading label="Digging deeper…" />}
          {detail && <AiText>{detail}</AiText>}
          <PinkButton onClick={complete}>Done with the news 💕</PinkButton>
        </>
      )}
    </>
  );
}

function PrayerStep({ complete }) {
  const [stage, setStage] = useState("gratitude"); // gratitude → wishes → loading → prayer
  const [gratitude, setGratitude] = useState("");
  const [wishes, setWishes] = useState("");
  const [prayer, setPrayer] = useState("");
  const generate = async (g, w) => {
    setStage("loading");
    try {
      const out = await askClaude(
        `Write a personal morning prayer for me. Rules:
- First person singular ONLY — always "I", never "we" (for example: "I come to you, Father").
- Addressed to my Father in Heaven.
- Weave in my gratitude this morning: ${g.trim() || "(I chose to go straight to prayer — offer gentle gratitude for this new day on my behalf)"}
- Weave in my wishes: ${w.trim() || "(none given — a gentle wish for a blessed day)"}
- Include loving blessings for my son, my daughter, my dad, my brother, and my mother in heaven.
- Include a blessing for myself.
- Warm, full of love and light.
- End with exactly this line: "Amen and so it be, and so it is."
Return only the prayer itself.`
      );
      setPrayer(out || "The prayer didn't come through — please try again.");
    } catch {
      setPrayer("The prayer didn't come through — please try again.");
    }
    setStage("prayer");
  };
  if (stage === "gratitude")
    return (
      <>
        <p style={{ fontFamily: fontBody, color: C.ink, fontSize: 15.5, margin: 0, fontWeight: 600 }}>
          What are you grateful for this morning?
        </p>
        <TextArea rows={2} value={gratitude} onChange={setGratitude} placeholder="I'm grateful for…" />
        <PinkButton onClick={() => setStage("wishes")} disabled={!gratitude.trim()}>Next 💗</PinkButton>
        <PinkButton ghost onClick={() => generate(gratitude, wishes)}>Skip straight to prayer 🙏</PinkButton>
      </>
    );
  if (stage === "wishes")
    return (
      <>
        <p style={{ fontFamily: fontBody, color: C.ink, fontSize: 15.5, margin: 0, fontWeight: 600 }}>
          And what are your wishes today?
        </p>
        <TextArea rows={2} value={wishes} onChange={setWishes} placeholder="My wishes are…" />
        <PinkButton onClick={() => generate(gratitude, wishes)} disabled={!wishes.trim()}>Create my prayer 🙏</PinkButton>
        <PinkButton ghost onClick={() => generate(gratitude, "")}>Skip straight to prayer 🙏</PinkButton>
      </>
    );
  if (stage === "loading") return <Loading label="Writing your prayer with love…" />;
  return (
    <>
      <div
        style={{
          whiteSpace: "pre-wrap",
          background: "linear-gradient(180deg, #FFF6FA, #FCE4EE)",
          border: `1.5px solid ${C.border}`,
          borderRadius: 18,
          padding: "20px 20px",
          color: C.berry,
          fontSize: 16,
          lineHeight: 1.75,
          fontStyle: "italic",
          textAlign: "left",
        }}
      >
        {prayer}
      </div>
      <PinkButton onClick={complete}>Amen 🤍 Finish my morning</PinkButton>
    </>
  );
}

/* ── step definitions ────────────────────────── */

const STEPS = [
  { id: "skincare", icon: "🧴", title: "Skincare", subtitle: "Time to take care of that beautiful skin.", type: "tick", doneLabel: "Skincare done ✔️" },
  { id: "money", icon: "💷", title: "Money aside", subtitle: "Pop £20 into your savings — future you says thank you.", type: "tick", doneLabel: "£20 put aside ✔️" },
  { id: "supplements", icon: "💊", title: "Supplements", subtitle: "Your morning line-up:", type: "tick", doneLabel: "Supplements taken ✔️", lines: ["B-Complex", "CoQ10", "Magnesium Malate", "Omega-3", "Vitamin D"] },
  { id: "dinner", icon: "🍽️", title: "Dinner plans", subtitle: "What are you planning to eat for dinner tonight?", type: "dinner" },
  { id: "abundance", icon: "🌸", title: "Words of abundance", subtitle: null, type: "abundance" },
  { id: "writing", icon: "✍️", title: "Automatic writing", subtitle: "Write whatever pops into your head about today — then I'll interpret it for you, section by section.", type: "writing" },
  { id: "dreams", icon: "🌙", title: "Dreams", subtitle: "Did you have any dreams last night?", type: "dreams" },
  { id: "events", icon: "🎪", title: "What's on in March", subtitle: "Local events in March, Cambridgeshire & nearby only.", type: "events" },
  { id: "news", icon: "📰", title: "News & updates", subtitle: "Local · National · International", type: "news" },
  { id: "prayer", icon: "🙏", title: "Morning prayer", subtitle: "One question at a time — or skip straight to your prayer.", type: "prayer" },
];

/* ── main app ────────────────────────────────── */

export default function MorningRoutine() {
  const [loaded, setLoaded] = useState(false);
  const [idx, setIdx] = useState(0);
  const [statuses, setStatuses] = useState({}); // id → "done" | "skipped"
  const [toast, setToast] = useState("");

  useEffect(() => {
    storageGet(`day:${todayKey()}`).then((saved) => {
      if (saved) {
        setIdx(saved.idx ?? 0);
        setStatuses(saved.statuses ?? {});
      }
      setLoaded(true);
    });
  }, []);

  const persist = (nextIdx, nextStatuses) =>
    storageSet(`day:${todayKey()}`, { idx: nextIdx, statuses: nextStatuses });

  const advance = (status) => {
    const step = STEPS[idx];
    const nextStatuses = { ...statuses, [step.id]: status };
    const nextIdx = idx + 1;
    setStatuses(nextStatuses);
    setIdx(nextIdx);
    persist(nextIdx, nextStatuses);
    if (status === "done") {
      setToast("Well done! ✨");
      setTimeout(() => setToast(""), 1600);
    }
  };

  const goBack = () => {
    if (idx === 0) return;
    const nextIdx = idx - 1;
    setIdx(nextIdx);
    persist(nextIdx, statuses);
  };

  const restart = () => {
    setIdx(0);
    setStatuses({});
    persist(0, {});
  };

  const doneCount = Object.keys(statuses).length;
  const progress = doneCount / STEPS.length;
  const finished = idx >= STEPS.length;

  const step = STEPS[idx];

  const renderBody = () => {
    switch (step.type) {
      case "tick":
        return <TickStep lines={step.lines} doneLabel={step.doneLabel} complete={() => advance("done")} />;
      case "dinner":
        return <DinnerStep complete={() => advance("done")} />;
      case "abundance":
        return <AbundanceStep complete={() => advance("done")} />;
      case "writing":
        return <WritingStep complete={() => advance("done")} />;
      case "dreams":
        return <DreamStep complete={() => advance("done")} />;
      case "events":
        return <EventsStep complete={() => advance("done")} />;
      case "news":
        return <NewsStep complete={() => advance("done")} />;
      case "prayer":
        return <PrayerStep complete={() => advance("done")} />;
      default:
        return null;
    }
  };

  if (!loaded) return null;

  return (
    <div style={{ minHeight: "100vh", background: C.bg, padding: "18px 14px 40px", fontFamily: fontBody }}>
      <style>{FONT_CSS}</style>
      <div style={{ maxWidth: 440, margin: "0 auto" }}>
        <Sunrise progress={progress} greetingName="Sarah" />

        {/* progress hearts */}
        <div style={{ display: "flex", justifyContent: "center", gap: 5, marginBottom: 18, flexWrap: "wrap" }}>
          {STEPS.map((s, i) => (
            <span key={s.id} style={{ fontSize: 15, opacity: statuses[s.id] === "done" ? 1 : statuses[s.id] === "skipped" ? 0.45 : i === idx ? 0.9 : 0.25, transition: "opacity .2s" }}>
              {statuses[s.id] === "done" ? "💖" : statuses[s.id] === "skipped" ? "🤍" : i === idx ? "💗" : "🩷"}
            </span>
          ))}
        </div>

        {!finished ? (
          <Step
            icon={step.icon}
            title={step.title}
            subtitle={step.subtitle}
            onSkip={() => advance("skipped")}
            onBack={goBack}
            canBack={idx > 0}
          >
            {renderBody()}
          </Step>
        ) : (
          <div
            style={{
              background: C.card,
              border: `1.5px solid ${C.border}`,
              borderRadius: 26,
              padding: "34px 22px",
              boxShadow: "0 8px 24px rgba(231,91,141,.12)",
              textAlign: "center",
            }}
          >
            <div style={{ fontSize: 46 }}>🌞</div>
            <div style={{ fontFamily: fontScript, fontSize: 38, color: C.deepPink, margin: "6px 0 4px" }}>
              Well done, Sarah
            </div>
            <p style={{ color: C.sub, fontSize: 15, lineHeight: 1.6, margin: "0 0 8px" }}>
              Your morning ritual is complete — {Object.values(statuses).filter((s) => s === "done").length} of {STEPS.length} steps done.
              <br />
              Have a beautiful, abundant day. 💗
            </p>
            <PinkButton ghost onClick={restart}>Start over</PinkButton>
          </div>
        )}

        {/* well done toast */}
        {toast && (
          <div
            style={{
              position: "fixed",
              left: "50%",
              bottom: 30,
              transform: "translateX(-50%)",
              background: `linear-gradient(135deg, ${C.pink}, ${C.deepPink})`,
              color: "#fff",
              fontFamily: fontBody,
              fontWeight: 700,
              fontSize: 16,
              padding: "12px 26px",
              borderRadius: 999,
              boxShadow: "0 8px 24px rgba(201,58,112,.4)",
            }}
          >
            {toast}
          </div>
        )}
      </div>
    </div>
  );
}
