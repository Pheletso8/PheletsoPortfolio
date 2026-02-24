// api/chat.js

export default async function handler(req, res) {
  // 1. Handle CORS and Method
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    // 2. Ensure body is parsed (Vercel quirk fix for local dev)
    const body = typeof req.body === "string" ? JSON.parse(req.body) : req.body;
    const { message } = body;

    // 3. Validate input
    if (!message) {
      return res.status(400).json({ reply: "Please provide a message." });
    }

    // If the GROQ API key is not available locally, allow proxying
    // to a deployed Vercel URL that already has the key configured.
    if (!process.env.GROQ_API_KEY) {
      const proxyUrl = process.env.VERCEL_DEPLOYMENT_URL;
      if (proxyUrl) {
        try {
          const target = proxyUrl.replace(/\/$/, '') + '/api/chat';
          console.log('Proxying chat request to deployed API:', target);
          const proxied = await fetch(target, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ message }),
          });

          const proxiedData = await proxied.json();
          return res.status(proxied.status || 200).json(proxiedData);
        } catch (proxyErr) {
          console.error('Proxy to deployed Vercel failed:', proxyErr);
          return res.status(502).json({ reply: 'Proxy to deployed API failed.' });
        }
      }

      console.error('ERROR: GROQ_API_KEY is missing from environment. Set GROQ_API_KEY locally or set VERCEL_DEPLOYMENT_URL to your deployed site.');
      return res.status(500).json({ reply: 'API Key Configuration Error. Set GROQ_API_KEY locally or provide VERCEL_DEPLOYMENT_URL.' });
    }

    // 4. Fetch from Groq
    const response = await fetch(
      "https://api.groq.com/openai/v1/chat/completions",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${process.env.GROQ_API_KEY.trim()}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          // UPDATED: Using the current supported model
          model: "llama-3.3-70b-versatile", 
          messages: [
            {
              role: "system",
              content: "You are a professional AI assistant on Pheletso Marumoloe's portfolio website. Be intelligent, concise, and helpful.",
            },
            {
              role: "user",
              content: message,
            },
          ],
          temperature: 0.7,
          max_tokens: 1024,
        }),
      }
    );

    // 5. Check for Groq API errors
    if (!response.ok) {
      const errorData = await response.json();
      console.error("Groq API Error:", errorData);
      return res.status(response.status).json({ 
        reply: `Groq Error: ${errorData.error?.message || "Failed to fetch AI response"}` 
      });
    }

    const data = await response.json();

    // 6. Safe extraction
    const botReply = data?.choices?.[0]?.message?.content;

    if (!botReply) {
      console.error("Unexpected Groq Response Format:", data);
      return res.status(500).json({ reply: "The AI returned an empty response." });
    }

    return res.status(200).json({ reply: botReply });

  } catch (error) {
    console.error("Internal Handler Error:", error);
    return res.status(500).json({ reply: `Server Error: ${error.message}` });
  }
}