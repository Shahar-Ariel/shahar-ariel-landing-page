import type { PropsWithChildren } from 'react';

type PageSectionProps = PropsWithChildren<{
  id?: string;
  className?: string;
}>;

export function PageSection({ id, className, children }: PageSectionProps) {
  const classes = ['page-section', className].filter(Boolean).join(' ');
  return (
    <section id={id} className={classes}>
      <div className="section-inner">{children}</div>
    </section>
  );
}
