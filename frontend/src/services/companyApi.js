export async function sendContactMessage(payload) {
  const response = await fetch("/api/inquiries", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      type: "General",
      name: payload.name,
      email: payload.email,
      phone: payload.phone,
      message: payload.message,
      company: payload.company ?? null,
      territory: payload.territory ?? null
    })
  });

  const data = await response.json().catch(() => ({}));
  if (!response.ok) {
    throw new Error(data.message || "Request failed.");
  }

  return data;
}
