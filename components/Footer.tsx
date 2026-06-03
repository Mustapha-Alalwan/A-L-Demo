import { site } from '@/lib/site';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img className="flogo" src="/logo.png" alt={`${site.name} logo`} width={130} height={56} />
            <p>
              Family-run roofing contractor serving Leeds and the whole of Yorkshire since
              1996. Domestic &amp; commercial — re-roofs, repairs, flat roofs, slating,
              tiling, leadwork and guttering.
            </p>
            <p style={{ margin: 0 }}>
              <b style={{ color: '#C3D2DF' }}>Scholes, Leeds</b> — covering all of
              Yorkshire.
            </p>
          </div>

          <div>
            <h4>Contact</h4>
            <ul>
              <li>
                Office:{' '}
                <a href={site.phone.landlineHref}>{site.phone.landlineDisplay}</a>
              </li>
              <li>
                Mobile:{' '}
                <a href={site.phone.mobileHref}>{site.phone.mobileDisplay}</a>
              </li>
              <li>
                Email: <a href={`mailto:${site.email}`}>{site.email}</a>
              </li>
              <li>24/7 emergency callout</li>
            </ul>
          </div>

          <div>
            <h4>Services</h4>
            <ul>
              <li>
                <a href="#services">Re-roofs &amp; repairs</a>
              </li>
              <li>
                <a href="#services">Slating &amp; tiling</a>
              </li>
              <li>
                <a href="#services">Flat roofs (felt &amp; GRP)</a>
              </li>
              <li>
                <a href="#services">Leadwork &amp; guttering</a>
              </li>
              <li>
                <a href="#contact">Free quote</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="coinfo">
            <b>{site.name}</b> · Company no. {site.companyNo} · Registered in England
            &amp; Wales.
          </div>
          <div>© {site.year} {site.name}. All rights reserved.</div>
        </div>
        <div style={{ marginTop: 14, fontSize: '0.8rem', color: '#6E8197' }}>
          Registered office: {site.registeredOffice}.
        </div>
      </div>
    </footer>
  );
}
