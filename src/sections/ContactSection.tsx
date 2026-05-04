import { ContactForm } from '../components/contact/ContactForm';
import { ContactPanel } from '../components/contact/ContactPanel';
import { SectionHeading } from '../components/ui/SectionHeading';
import { useContactForm } from '../hooks/useContactForm';

function getStatusText(status: 'idle' | 'invalid' | 'ready') {
  if (status === 'invalid') {
    return 'יש למלא שם מלא, אימייל ותיאור קצר של הצורך.';
  }

  if (status === 'ready') {
    return 'נפתח חלון מייל עם פרטי הפנייה שמילאתם.';
  }

  return 'ניתן גם לפנות ישירות בטלפון, מייל או LinkedIn.';
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
          <ContactForm controller={controller} statusText={getStatusText(controller.status)} />
        </div>
      </div>
    </section>
  );
}
