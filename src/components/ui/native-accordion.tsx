import React from 'react';
import { cn } from '@/lib/utils';

type AccordionsProps = {
  children: React.ReactNode;
  className?: string;
};

type AccordionProps = {
  title: string;
  children: React.ReactNode;
  className?: string;
};

export function Accordions({ children, className }: AccordionsProps) {
  return (
    <div className={cn('space-y-4', className)}>
      {children}
    </div>
  );
}

export function Accordion({ title, children, className }: AccordionProps) {
  return (
    <details className={cn('bg-muted rounded-lg', className)}>
      <summary className="cursor-pointer font-medium">
        <h3 className="inline text-lg font-semibold m-2">{title}</h3>
      </summary>
      <div className="mt-4 prose">
        {children}
      </div>
    </details>
  );
} 