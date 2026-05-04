export type ContactFormState = {
  fullName: string;
  email: string;
  phone: string;
  company: string;
  message: string;
};

export type ContactSubmitStatus =
  | 'idle'
  | 'invalid'
  | 'submitting'
  | 'success'
  | 'error';

