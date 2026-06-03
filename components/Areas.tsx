import { site } from '@/lib/site';

export default function Areas() {
  return (
    <section className="section section--white" id="areas" style={{ background: 'var(--offwhite)' }}>
      <div className="container">
        <div className="areas-grid">
          <div>
            <span className="eyebrow">Where we work</span>
            <h2>Based in Scholes, covering all of Yorkshire</h2>
            <p className="lead">
              We’re based in {site.baseLocation} and work right across Leeds and the wider
              county — from city terraces to rural properties. If your town isn’t listed,
              ask: chances are we cover it.
            </p>
            <ul className="areas-list">
              {site.areas.map((a, i) => (
                <li key={a} className={i < 4 ? 'primary' : ''}>
                  {a}
                </li>
              ))}
            </ul>
          </div>

          <figure className="areas-figure">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/terraced.jpg"
              alt="A row of red-brick Yorkshire terraced houses with chimney stacks and pitched roofs against a blue sky"
              width={1600}
              height={1200}
              loading="lazy"
            />
          </figure>
        </div>
      </div>
    </section>
  );
}
