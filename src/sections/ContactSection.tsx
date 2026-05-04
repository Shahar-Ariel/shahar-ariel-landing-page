import { ContactForm } from '../components/contact/ContactForm';
import { ContactPanel } from '../components/contact/ContactPanel';
import { SectionHeading } from '../components/ui/SectionHeading';
import { useContactForm } from '../hooks/useContactForm';
import type { ContactSubmitStatus } from '../types/contact';

function getStatusText(status: ContactSubmitStatus, errorMessage: string) {
  if (status === 'invalid') {
    return 'יש למלא שם מלא, אימייל ותיאור קצר של הצורך.';
  }

  if (status === 'submitting') {
    return 'שולח את הפנייה לשרת...';
  }

  if (status === 'success') {
    return 'הפנייה נשמרה ונשלחה בהצלחה.';
  }

  if (status === 'error') {
    return errorMessage;
  }

  return 'הפרטים נשלחים לשרת ונשמרים ישירות במערכת.';
}

export function ContactSection() {
  const controller = useContactForm();

  return (
    <section id="contact" className="contact-section">
      <div className="section-inner">
        <SectionHeading
          eyebrow="Contact"
          title="צור קשר"
          description="השאירו פרטים קצרים על המערכת, הצוות או הפרויקט, ואחזור אליכם עם כיוון מעשי."
        />
        <div className="contact-layout">
          <ContactPanel />
          <ContactForm
            controller={controller}
            statusText={getStatusText(controller.status, controller.errorMessage)}
          />
        </div>
      </div>
    </section>
  );
}

