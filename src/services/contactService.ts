import type { ContactFormState } from '../types/contact';

async function parseError(response: Response) {
  try {
    const payload = (await response.json()) as { error?: string };
    return payload.error ?? 'אירעה שגיאה בשליחת הפנייה.';
  } catch {
    return 'אירעה שגיאה בשליחת הפנייה.';
  }
}

export async function submitContactForm(payload: ContactFormState) {
  const response = await fetch('/api/contact', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    throw new Error(await parseError(response));
  }
}

