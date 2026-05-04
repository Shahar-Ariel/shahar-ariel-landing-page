import type { FormEvent } from 'react';
import { useState } from 'react';

type FormState = {
  fullName: string;
  email: string;
  phone: string;
  company: string;
  message: string;
};

const initialState: FormState = {
  fullName: '',
  email: '',
  phone: '',
  company: '',
  message: '',
};

type Status = 'idle' | 'invalid' | 'ready';

export type ContactFormController = {
  formState: FormState;
  status: Status;
  updateField: (field: keyof FormState, value: string) => void;
  submitForm: (event: FormEvent<HTMLFormElement>) => void;
};

function createMailtoLink(state: FormState) {
  const subject = encodeURIComponent(`פנייה חדשה מהאתר - ${state.fullName}`);
  const body = encodeURIComponent(
    [
      `שם מלא: ${state.fullName}`,
      `אימייל: ${state.email}`,
      `טלפון: ${state.phone}`,
      `חברה: ${state.company}`,
      '',
      'פרטי הפנייה:',
      state.message,
    ].join('\n'),
  );

  return `mailto:arielshahar8@gmail.com?subject=${subject}&body=${body}`;
}

function isValid(state: FormState) {
  return Boolean(state.fullName && state.email && state.message);
}

export function useContactForm() {
  const [formState, setFormState] = useState<FormState>(initialState);
  const [status, setStatus] = useState<Status>('idle');

  const updateField = (field: keyof FormState, value: string) => {
    setFormState((current) => ({ ...current, [field]: value }));
    if (status !== 'idle') {
      setStatus('idle');
    }
  };

  const submitForm = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!isValid(formState)) {
      setStatus('invalid');
      return;
    }

    setStatus('ready');
    window.location.href = createMailtoLink(formState);
  };

  return {
    formState,
    status,
    updateField,
    submitForm,
  } satisfies ContactFormController;
}
