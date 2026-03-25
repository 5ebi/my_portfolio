'use client';

import { useEffect, useRef, useState } from 'react';
import { useApp } from './ThemeProvider';
import { t } from '../translations';

export default function TechStack() {
  const { lang } = useApp();
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setVisible(true); obs.unobserve(el); }
    }, { threshold: 0.1 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="stack" className="stack">
      <div className="container">
        <div className="sectionLabel">{t.stack.label[lang]}</div>
        <div ref={ref} className="stackGrid">
          {t.skills.map((skill) => (
            <div key={skill.name} className="stackItem">
              <div className="stackItemHeader">
                <span className="stackName">{skill.name}</span>
                <span className="stackLevel">{skill.level}%</span>
              </div>
              <div className="stackBar">
                <div
                  className="stackBarFill"
                  style={{ width: visible ? `${skill.level}%` : '0%' }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
