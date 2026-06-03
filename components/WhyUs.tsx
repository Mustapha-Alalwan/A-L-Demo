const reasons = [
  {
    num: '25+',
    title: 'Years on Yorkshire roofs',
    body: 'Established 1996 and family-run ever since. A settled local team, not a national call-centre.',
  },
  {
    num: 'NVQ',
    title: 'Fully qualified tradesmen',
    body: 'All tradesmen NVQ Levels 1, 2 & 3, City & Guilds and Health & Safety trained.',
  },
  {
    num: '20yr',
    title: 'Flat-roof guarantee',
    body: '20-year guarantee on SBS torch-on flat-roof re-roofs. Work built to last, in writing.',
  },
  {
    num: '£',
    title: 'We beat any genuine quote',
    body: 'We try to beat any genuine like-for-like quotation — fair pricing, no hard sell.',
  },
  {
    num: 'Inc.',
    title: 'Skips & scaffold included',
    body: 'Skips and scaffold are provided within the quoted price. No surprise extras mid-job.',
  },
  {
    num: '1–2',
    title: 'Weeks to a fixed start',
    body: 'Free survey, then an agreed, fixed start date — typically within 1–2 weeks. Domestic & commercial.',
  },
];

export default function WhyUs() {
  return (
    <section className="section section--navy" id="why-us">
      <div className="container">
        <div className="sec-head">
          <span className="eyebrow">Why A &amp; L Roofing</span>
          <h2>Established, qualified, and straight with you</h2>
          <p className="lead">
            Roofing is need-driven and often urgent — so the things that matter are
            experience, qualifications, a real guarantee and an honest price. We have all
            four.
          </p>
        </div>

        <div className="why-grid">
          {reasons.map((r) => (
            <div className="why-item" key={r.title}>
              <div className="num">{r.num}</div>
              <h3>{r.title}</h3>
              <p>{r.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
