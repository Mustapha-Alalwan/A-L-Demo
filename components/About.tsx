import { site } from '@/lib/site';

export default function About() {
  return (
    <section className="section section--white" id="about">
      <div className="container">
        <div className="about-grid">
          <div className="about-media">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/slate.jpg"
              alt="Traditional Yorkshire stone cottages with natural slate pitched roofs"
              width={1200}
              height={800}
              loading="lazy"
            />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/clay.jpg"
              alt="Close-up of new clay roof tiles laid in neat courses"
              width={800}
              height={600}
              loading="lazy"
            />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/roofers.jpg"
              alt="Roofers working on scaffolding against a clear blue sky"
              width={800}
              height={600}
              loading="lazy"
            />
          </div>

          <div className="about-copy">
            <span className="eyebrow">About us</span>
            <h2>A family roofing business, rooted in Leeds</h2>
            <p>
              A &amp; L Roofing Leeds has been keeping Yorkshire roofs watertight since{' '}
              <b>1996</b>. We’re a family-run firm based in{' '}
              <b>{site.baseLocation}</b>, and we cover the whole of Yorkshire for both
              domestic and commercial work.
            </p>
            <p>
              Every tradesman on our team is fully qualified — NVQ Levels 1, 2 &amp; 3,
              City &amp; Guilds and Health &amp; Safety trained — so the work is done
              properly, safely and to last. No call-centres, no pressure: just honest
              advice and craftsmanship from people who’ll still be here next year.
            </p>
            <ul>
              <li>Family-run since 1996 — over 25 years’ experience</li>
              <li>Qualified, time-served tradesmen (NVQ 1–3, City &amp; Guilds)</li>
              <li>Domestic &amp; commercial, across all of Yorkshire</li>
              <li>Free, no-obligation surveys and genuine like-for-like pricing</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
