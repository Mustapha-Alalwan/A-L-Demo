'use client';

import { useState } from 'react';
import { site, quoteMailto } from '@/lib/site';
import { IconPhone } from './icons';

const links = [
  ['Services', '#services'],
  ['Why Us', '#why-us'],
  ['About', '#about'],
  ['Reviews', '#reviews'],
  ['Areas', '#areas'],
  ['Contact', '#contact'],
] as const;

export default function Header() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <>
      {/* Emergency strip */}
      <div className="emergency">
        <div className="container">
          <span className="pulse" aria-hidden="true" />
          <span>
            <strong>24/7 Emergency Callout</strong> — storm damage &amp; leaks across
            Leeds &amp; Yorkshire.
          </span>
          <span>
            Call{' '}
            <a href={site.phone.landlineHref}>{site.phone.landlineDisplay}</a> or{' '}
            <a href={site.phone.mobileHref}>{site.phone.mobileDisplay}</a>
          </span>
        </div>
      </div>

      {/* Sticky navy nav */}
      <header className="header">
        <div className="container">
          <a className="brand" href="#top" aria-label={`${site.name} — home`}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/logo.png" alt={`${site.name} logo`} width={121} height={52} />
          </a>

          <nav
            className={`nav${open ? ' open' : ''}`}
            id="primary-nav"
            aria-label="Primary"
          >
            {links.map(([label, href]) => (
              <a key={href} href={href} onClick={close}>
                {label}
              </a>
            ))}
          </nav>

          <div className="header-actions">
            <a className="header-tel" href={site.phone.landlineHref}>
              <span>Call the office</span>
              <strong>{site.phone.landlineDisplay}</strong>
            </a>
            <a className="btn btn--call" href={site.phone.landlineHref}>
              <IconPhone className="btn-icon" />
              Call now
            </a>
            <a className="btn btn--quote btn-text-quote" href={quoteMailto}>
              Free quote
            </a>
            <button
              className="nav-toggle"
              aria-expanded={open}
              aria-controls="primary-nav"
              aria-label={open ? 'Close menu' : 'Open menu'}
              onClick={() => setOpen((v) => !v)}
            >
              <span />
              <span />
              <span />
            </button>
          </div>
        </div>
      </header>
    </>
  );
}
