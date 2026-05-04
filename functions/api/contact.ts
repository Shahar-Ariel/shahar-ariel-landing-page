type ContactPayload = {
  fullName: string;
  email: string;
  phone: string;
  company: string;
  message: string;
};

type Env = {
  CONTACT_DB: D1Database;
};

function isContactPayload(value: unknown): value is ContactPayload {
  if (!value || typeof value !== 'object') {
    return false;
  }

  const payload = value as Record<string, unknown>;
  return ['fullName', 'email', 'phone', 'company', 'message'].every(
    (key) => typeof payload[key] === 'string',
  );
}

function validatePayload(payload: ContactPayload) {
  return Boolean(payload.fullName.trim() && payload.email.trim() && payload.message.trim());
}

async function saveSubmission(database: D1Database, payload: ContactPayload) {
  await database
    .prepare(
      `
        INSERT INTO contact_submissions (
          full_name,
          email,
          phone,
          company,
          message
        ) VALUES (?, ?, ?, ?, ?)
      `,
    )
    .bind(
      payload.fullName.trim(),
      payload.email.trim(),
      payload.phone.trim(),
      payload.company.trim(),
      payload.message.trim(),
    )
    .run();
}

function jsonResponse(body: Record<string, string>, status: number) {
  return Response.json(body, { status });
}

export const onRequestPost: PagesFunction<Env> = async (context) => {
  const payload = await context.request.json();
  if (!isContactPayload(payload)) {
    return jsonResponse({ error: 'מבנה הפנייה אינו תקין.' }, 400);
  }

  if (!validatePayload(payload)) {
    return jsonResponse({ error: 'יש למלא שם מלא, אימייל ותיאור קצר.' }, 400);
  }

  try {
    await saveSubmission(context.env.CONTACT_DB, payload);
    return jsonResponse({ message: 'Contact submission saved.' }, 200);
  } catch {
    return jsonResponse({ error: 'שמירת הפנייה נכשלה. נסו שוב.' }, 500);
  }
};

