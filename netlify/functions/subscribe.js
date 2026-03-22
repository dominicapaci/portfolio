import { getStore } from "@netlify/blobs";

export default async (req) => {
  if (req.method !== 'POST') {
    return new Response(JSON.stringify({ error: 'Method not allowed' }), {
      status: 405,
      headers: { 'Content-Type': 'application/json' },
    })
  }

  const { email } = await req.json()

  if (!email) {
    return new Response(JSON.stringify({ error: 'Email is required' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    })
  }

  try {
    const store = getStore("waitlist")

    // Get existing list
    const existing = await store.get("emails", { type: "json" }) || []

    // Don't add duplicates
    if (existing.some((entry) => entry.email === email)) {
      return new Response(JSON.stringify({ success: true }), {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      })
    }

    existing.push({ email, date: new Date().toISOString() })
    await store.setJSON("emails", existing)

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    })
  } catch (err) {
    return new Response(JSON.stringify({ error: 'Failed to save email' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    })
  }
}
