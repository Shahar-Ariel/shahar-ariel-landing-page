import type { ContactFormController } from '../../hooks/useContactForm';

const fields = [
  { name: 'fullName', type: 'text', placeholder: 'שם מלא' },
  { name: 'email', type: 'email', placeholder: 'אימייל' },
  { name: 'phone', type: 'tel', placeholder: 'טלפון' },
  { name: 'company', type: 'text', placeholder: 'חברה' },
] as const;

type ContactFormProps = {
  controller: ContactFormController;
  statusText: string;
};

export function ContactForm({ controller, statusText }: ContactFormProps) {
  const { formState, status, updateField, submitForm } = controller;

  return (
    <form className="contact-form" onSubmit={submitForm}>
      <div className="contact-form__grid">
        {fields.map((field) => (
          <input
            key={field.name}
            type={field.type}
            placeholder={field.placeholder}
            value={formState[field.name]}
            onChange={(event) => updateField(field.name, event.target.value)}
          />
        ))}
      </div>
      <textarea
        rows={6}
        placeholder="ספרו בקצרה על המערכת, הצורך, צווארי הבקבוק או המטרה."
        value={formState.message}
        onChange={(event) => updateField('message', event.target.value)}
      />
      <div className="contact-form__footer">
        <button
          type="submit"
          className="button button--primary"
          disabled={status === 'submitting'}
        >
          {status === 'submitting' ? 'שולח...' : 'שליחה'}
        </button>
        <p>{statusText}</p>
      </div>
    </form>
  );
}

