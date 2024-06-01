import "./CampaignSingle.css"

const CampaignSingle = () => {
  return (
    <section className="campaign-single">
    <div className="container">
      <div className="campaign-wrapper">
        <h2>WWDC Event </h2>
        <strong>%10 İndirim</strong>
        <span></span>
        <a href="/shop" className="btn btn-lg">
          Şimdi Al
          <i className="bi bi-arrow-right"></i>
        </a>
      </div>
    </div>
  </section>
  )
}

export default CampaignSingle