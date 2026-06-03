import { site, quoteMailto } from '@/lib/site';
import { IconPhone, IconMail, IconPin, IconClock } from './icons';

export default function Contact() {
  return (
    <section className="section section--navy" id="contact">
      <div className="container">
        <div className="sec-head">
          <span className="eyebrow">Get in touch</span>
          <h2>Get a free, no-obligation quote</h2>
          <p className="lead">
            The quickest way to reach us is a quick call — roofing is usually urgent. Or
            send your details and we’ll get back to you to arrange a free survey.
          </p>
        </div>

        <div className="contact-grid">
          {/* Contact details */}
          <div className="contact-cards">
            <div className="contact-card">
              <IconPhone className="ico" />
              <div>
                <div className="label">Office landline</div>
                <a href={site.phone.landlineHref}>{site.phone.landlineDisplay}</a>
              </div>
            </div>
            <div className="contact-card">
              <IconPhone className="ico" />
              <div>
                <div className="label">Mobile · 24/7 emergency</div>
                <a href={site.phone.mobileHref}>{site.phone.mobileDisplay}</a>
              </div>
            </div>
            <div className="contact-card">
              <IconMail className="ico" />
              <div>
                <div className="label">Email</div>
                <a href={`mailto:${site.email}`}>{site.email}</a>
              </div>
            </div>
            <div className="contact-card">
              <IconPin className="ico" />
              <div>
                <div className="label">Service area</div>
                <span className="val">
                  Scholes, Leeds
                  <small>Covering all of Yorkshire</small>
                </span>
              </div>
            </div>
            <div className="contact-card">
              <IconClock className="ico" />
              <div>
                <div className="label">Hours</div>
                <span className="val">
                  24/7 emergency callout
                  <small>Free survey &amp; quote by arrangement</small>
                </span>
              </div>
            </div>

            <div className="contact-cta-row">
              <a className="btn btn--call btn--lg" href={site.phone.landlineHref}>
                <IconPhone className="btn-icon" />
                Call now
              </a>
              <a className="btn btn--quote btn--lg" href={`mailto:${site.email}`}>
                Email us
              </a>
            </div>
          </div>

          {/* Inert quote form — visual only, wired to mailto (build spec §7) */}
          <form className="quote-form" aria-label="Request a free roofing quote">

            <h3>Request a free quote</h3>
            <p className="form-note">
              Fill in a few details and hit send — it’ll open your email app with your
              message ready to go. Prefer to talk? Just call us.
            </p>

            <div className="field">
              <label htmlFor="q-name">Name</label>
              <input id="q-name" name="name" type="text" autoComplete="name" placeholder="Your name" />
            </div>

            <div className="field-row">
              <div className="field">
                <label htmlFor="q-phone">Phone</label>
                <input id="q-phone" name="phone" type="tel" autoComplete="tel" placeholder="Best number" />
              </div>
              <div className="field">
                <label htmlFor="q-postcode">Postcode</label>
                <input id="q-postcode" name="postcode" type="text" placeholder="e.g. LS15 4BW" />
              </div>
            </div>

            <div className="field">
              <label htmlFor="q-job">Job type</label>
              <select id="q-job" name="job" defaultValue="">
                <option value="" disabled>
                  Select a job type…
                </option>
                <option>Re-roof / full replacement</option>
                <option>Roof repair / leak</option>
                <option>Flat roof (felt / GRP)</option>
                <option>Slating / tiling</option>
                <option>Leadwork</option>
                <option>Guttering</option>
                <option>Velux / roof window</option>
                <option>Emergency callout</option>
                <option>Something else</option>
              </select>
            </div>

            <div className="field">
              <label htmlFor="q-message">Message</label>
              <textarea
                id="q-message"
                name="message"
                placeholder="Tell us about the job — what’s happening, and when you’d like it done."
              />
            </div>

            <a className="btn btn--call btn--lg" href={quoteMailto}>
              Send my request
            </a>
            <p className="privacy">
              Demo site — this form opens your email app and submits nothing to a server.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
