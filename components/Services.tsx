import { site } from '@/lib/site';
import { IconRoof, IconLayers, IconWrench, IconAlert, IconPhone } from './icons';

export default function Services() {
  return (
    <section className="section section--white" id="services">
      <div className="container">
        <div className="sec-head">
          <span className="eyebrow">What we do</span>
          <h2>Full-service roofing, done properly</h2>
          <p className="lead">
            Pitched and flat roofing for homes and commercial premises across Leeds and
            Yorkshire — from a single slipped tile to a complete re-roof, with skips and
            scaffold provided within the quoted price.
          </p>
        </div>

        <div className="svc-groups">
          {/* Pitched: slate & tile */}
          <article className="svc-card">
            <h3>
              <IconRoof className="ico" />
              Pitched roofing — slate &amp; tile
            </h3>
            <ul className="svc-list">
              <li>
                <b>Re-roofs</b> <span className="muted">— full roof replacement</span>
              </li>
              <li>
                <b>Roof repairs</b>{' '}
                <span className="muted">— tile/slate replacement, leaks</span>
              </li>
              <li>
                <b>Slating</b>{' '}
                <span className="muted">
                  — natural &amp; man-made: Welsh Slate, Spanish Slate
                </span>
              </li>
              <li>
                <b>Tiling</b> <span className="muted">— clay and concrete roof tiles</span>
              </li>
              <li>
                <b>Yorkshire Stone</b> <span className="muted">— stone slating</span>
              </li>
            </ul>
          </article>

          {/* Flat roofing */}
          <article className="svc-card">
            <h3>
              <IconLayers className="ico" />
              Flat roofing
            </h3>
            <ul className="svc-list">
              <li>
                <b>Felting / flat roof systems</b>{' '}
                <span className="muted">
                  — SBS torch-on membrane, 20-year guarantee
                </span>
              </li>
              <li>
                <b>GRP fibreglass flat roofs</b>{' '}
                <span className="muted">— seamless, hard-wearing finish</span>
              </li>
            </ul>
            <h3 style={{ marginTop: 24 }}>
              <IconWrench className="ico" />
              Repairs &amp; extras
            </h3>
            <ul className="svc-list">
              <li>
                <b>Lead work</b>{' '}
                <span className="muted">— flashings, valleys, chimney details</span>
              </li>
              <li>
                <b>Guttering</b>{' '}
                <span className="muted">
                  — repairs through to replacement, incl. leaking joints
                </span>
              </li>
              <li>
                <b>Velux / roof windows</b>
              </li>
              <li>
                <b>Door canopies</b>
              </li>
            </ul>
          </article>

          {/* Emergency callout — full width, navy */}
          <article className="svc-card svc-card--emergency span2">
            <div className="svc-emergency">
              <div className="txt">
                <h3>
                  <IconAlert className="ico" />
                  24/7 emergency callout
                </h3>
                <p style={{ margin: 0, color: '#C3D2DF' }}>
                  Storm damage, slipped tiles or a leak coming through the ceiling? We
                  cover domestic &amp; commercial emergencies across Leeds and the whole
                  of Yorkshire — day or night. Free survey, then an agreed, fixed start
                  date, typically within 1–2 weeks for planned work.
                </p>
              </div>
              <a className="btn btn--call btn--lg" href={site.phone.mobileHref}>
                <IconPhone className="btn-icon" />
                Emergency line · {site.phone.mobileDisplay}
              </a>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
