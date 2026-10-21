// Morning Routine — the bridge between the app and the AI.
// Keeps your Anthropic API key secret.
// Set ANTHROPIC_API_KEY in Vercel → Project → Settings → Environment Variables.
export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }
  try {
    const { prompt, useSearch } = req.body || {};
    if (!prompt) return res.status(400).json({ error: "Missing prompt" });

    if (!process.env.ANTHROPIC_API_KEY) {
      return res.status(200).json({
        text: "⚠️ No API key found. In Vercel → Settings → Environment Variables, add ANTHROPIC_API_KEY, then redeploy.",
      });
    }

    const body = {
      model: "claude-sonnet-4-6",
      max_tokens: 6000,
      messages: [{ role: "user", content: prompt }],
    };
    if (useSearch) {
      body.tools = [{ type: "web_search_20250305", name: "web_search" }];
    }

    const r = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        "x-api-key": process.env.ANTHROPIC_API_KEY,
        "anthropic-version": "2023-06-01",
      },
      body: JSON.stringify(body),
    });
    const data = await r.json();

    // If the AI service sends back a problem, show it in the app
    if (data.error) {
      return res.status(200).json({
        text: `⚠️ The AI said: ${data.error.message || data.error.type || "unknown problem"}`,
      });
    }

    const text = (data.content || [])
      .filter((b) => b.type === "text")
      .map((b) => b.text)
      .join("\n")
      .trim();
    return res.status(200).json({ text });
  } catch (e) {
    return res.status(200).json({ text: `⚠️ Something went wrong: ${e.message}` });
  }
}

// Give long interpretations enough time to finish
export const config = { maxDuration: 60 };
