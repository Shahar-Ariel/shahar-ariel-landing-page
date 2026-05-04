import type { FormEvent } from 'react';
import { useState } from 'react';
import { submitContactForm } from '../services/contactService';
import type { ContactFormState, ContactSubmitStatus } from '../types/contact';

const initialState: ContactFormState = {
  fullName: '',
  email: '',
  phone: '',
  company: '',
  message: '',
};

export type ContactFormController = {
  formState: ContactFormState;
  status: ContactSubmitStatus;
  errorMessage: string;
  updateField: (field: keyof ContactFormState, value: string) => void;
  submitForm: (event: FormEvent<HTMLFormElement>) => void;
};

function isValid(state: ContactFormState) {
  return Boolean(state.fullName && state.email && state.message);
}

export function useContactForm() {
  const [formState, setFormState] = useState<ContactFormState>(initialState);
  const [status, setStatus] = useState<ContactSubmitStatus>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const updateField = (field: keyof ContactFormState, value: string) => {
    setFormState((current) => ({ ...current, [field]: value }));
    if (status !== 'idle') {
      setStatus('idle');
    }
    if (errorMessage) {
      setErrorMessage('');
    }
  };

  const submitForm = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!isValid(formState)) {
      setStatus('invalid');
      return;
    }

    setStatus('submitting');
    setErrorMessage('');

    try {
      await submitContactForm(formState);
      setFormState(initialState);
      setStatus('success');
    } catch (error) {
      setStatus('error');
      setErrorMessage(error instanceof Error ? error.message : 'אירעה שגיאה בשליחת הפנייה.');
    }
  };

  return {
    formState,
    status,
    errorMessage,
    updateField,
    submitForm,
  } satisfies ContactFormController;
}

