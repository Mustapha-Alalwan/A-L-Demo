import { site, quoteMailto } from '@/lib/site';
import { IconPhone, IconArrow } from './icons';

const trust = [
  '25+ years · est. 1996',
  'Family-run, Yorkshire',
  '20-year flat-roof guarantee',
  'NVQ 1–3 · City & Guilds',
];

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="container">
        <div className="hero-grid">
          <div className="hero-copy">
            <span className="hero-since">Established 1996 · Scholes, Leeds</span>
            <h1>
              Leeds &amp; Yorkshire roofers you can{' '}
              <span className="accent">actually rely on.</span>
            </h1>
            <p className="hero-sub">
              Family-run roofing contractor for domestic &amp; commercial work —
              re-roofs, repairs, flat roofs, slating, tiling, leadwork and guttering.
              Skips and scaffold included in the price.
            </p>

            <div className="hero-cta">
              <a className="btn btn--call btn--lg" href={site.phone.landlineHref}>
                <IconPhone className="btn-icon" />
                Call now · {site.phone.landlineDisplay}
              </a>
              <a className="btn btn--outline btn--lg" href={quoteMailto}>
                Free quote
                <IconArrow className="btn-icon" />
              </a>
            </div>

            <ul className="trust-strip">
              {trust.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>
          </div>

          <figure className="hero-figure">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/hero.jpg"
              alt="A pitched roof being re-roofed — new timber rafters and scaffolding over a Yorkshire brick property"
              width={1600}
              height={1040}
              fetchPriority="high"
            />
            <div className="hero-badge">
              <strong>20-yr</strong>
              <span>guarantee on SBS torch-on flat-roof re-roofs</span>
            </div>
          </figure>
        </div>
      </div>
    </section>
  );
}
