import { IconShield } from './icons';

/*
 * Qualitative reputation only — build spec §2/§6 forbid fabricated star ratings,
 * review counts, or invented named testimonials. These cards state real, verifiable
 * trust facts (established 1996, family-run, qualifications, guarantee, Facebook
 * community). A real Google rating/count should be added by the operator — see report.
 */
const points = [
  {
    quote:
      'Trusted across Yorkshire since 1996 — much of our work comes from repeat customers and word-of-mouth recommendations.',
    who: 'Reputation built over 25+ years',
  },
  {
    quote:
      'A growing community of 600+ followers on Facebook, where we share recent projects and before-and-after roofs.',
    who: 'Find us on Facebook',
  },
  {
    quote:
      'Qualified, time-served tradesmen and a written 20-year guarantee on flat-roof re-roofs — work we’re happy to stand behind.',
    who: 'Quality you can hold us to',
  },
];

export default function Reviews() {
  return (
    <section className="section section--white" id="reviews">
      <div className="container">
        <div className="sec-head">
          <span className="eyebrow">Reputation</span>
          <h2>Trusted by Yorkshire homeowners &amp; businesses</h2>
          <p className="lead">
            We let the work — and our customers — do the talking. You’ll find genuine
            reviews and recent projects on our Google and Facebook pages.
          </p>
        </div>

        <div className="reviews-grid">
          {points.map((p) => (
            <figure className="review" key={p.who}>
              <span className="kicker-quote" aria-hidden="true">
                &ldquo;
              </span>
              <blockquote className="quote">{p.quote}</blockquote>
              <figcaption className="who">
                <IconShield
                  className="ico"
                  style={{ width: 18, height: 18, color: 'var(--azure)', display: 'inline', verticalAlign: '-3px', marginRight: 6 }}
                />
                <b style={{ display: 'inline' }}>{p.who}</b>
              </figcaption>
            </figure>
          ))}
        </div>

        <p className="reviews-note">
          We don’t publish made-up ratings. For our current Google star rating and full
          customer reviews, please ask or visit our Google Business and Facebook pages.
        </p>
      </div>
    </section>
  );
}
