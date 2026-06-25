import { useState } from 'react';
import { FAQ_ITEMS } from '@/constants/content';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (i: number) => setOpenIndex(prev => (prev === i ? null : i));

  return (
    <section id="faq" className="faq-section">
      <div className="faq-container">

        <div className="faq-header">
          <p className="section-label">FAQ</p>
          <h2 className="type-h1">Preguntas frecuentes</h2>
          <p className="type-body faq-subtitle">
            Si tienes más dudas, pregunta en el canal de WhatsApp o Discord.
          </p>
        </div>

        <div className="faq-list" role="list">
          {FAQ_ITEMS.map((item, i) => {
            const isOpen = openIndex === i;
            return (
              <div key={i} className={`faq-item${isOpen ? ' faq-item--open' : ''}`} role="listitem">
                <button
                  className="faq-question"
                  onClick={() => toggle(i)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${i}`}
                >
                  <span>{item.question}</span>
                  <span className="faq-chevron" aria-hidden="true">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="m6 9 6 6 6-6" />
                    </svg>
                  </span>
                </button>
                <div
                  id={`faq-answer-${i}`}
                  className="faq-answer"
                  hidden={!isOpen}
                  role="region"
                >
                  <p className="type-body faq-answer-text">{item.answer}</p>
                </div>
              </div>
            );
          })}
        </div>

      </div>

      <style>{`
        .faq-section {
          background: var(--color-superficie);
          padding: 4rem 1.25rem;
        }
        .faq-container {
          max-width: 720px;
          margin: 0 auto;
        }
        .faq-header {
          margin-bottom: 2.5rem;
        }
        .faq-subtitle {
          margin-top: 0.75rem;
        }
        .faq-list {
          display: flex;
          flex-direction: column;
          border: 1px solid var(--color-borde);
          border-radius: var(--radius-lg);
          overflow: hidden;
        }
        .faq-item {
          border-bottom: 1px solid var(--color-borde);
          background: var(--color-superficie);
        }
        .faq-item:last-child {
          border-bottom: none;
        }
        .faq-item--open {
          background: var(--color-fondo);
        }
        .faq-question {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 1rem;
          padding: 1.125rem 1.25rem;
          background: none;
          border: none;
          cursor: pointer;
          text-align: left;
          font-family: var(--font-body);
          font-size: 1rem;
          font-weight: 600;
          color: var(--color-oscuro);
          min-height: 48px;
          -webkit-tap-highlight-color: transparent;
          transition: background 0.12s;
        }
        .faq-question:hover {
          background: var(--color-fondo);
        }
        .faq-chevron {
          flex-shrink: 0;
          color: var(--color-texto);
          transition: transform 0.2s ease;
        }
        .faq-item--open .faq-chevron {
          transform: rotate(180deg);
        }
        .faq-answer {
          padding: 0 1.25rem 1.25rem;
        }
        .faq-answer-text {
          font-size: 0.9375rem;
          line-height: 1.65;
        }
      `}</style>
    </section>
  );
}
