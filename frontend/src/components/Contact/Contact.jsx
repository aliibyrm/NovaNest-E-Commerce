import "./Contact.css"

const Contact = () => {
  return (
    <section className="contact">
      <div className="contact-top">
        <div className="contact-map">
          <iframe
           src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3118.902583124497!2d26.963777799999995!3d38.5820911!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14bbce0d70291201%3A0xc309f7e92ee72bd9!2zxLB6bWlyIEJha8SxcsOnYXkgw5xuaXZlcnNpdGVzaQ!5e0!3m2!1str!2str!4v1705342557509!5m2!1str!2str"
            width="100%"
            height="500"
            style={{
              border: "0",
            }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
      <div className="contact-bottom">
        <div className="container">
          <div className="contact-titles">
            <h4>Bizimle</h4>
            <h2>İletişime Geçin</h2>
            <p>
             Soru/Görüş ve Önerilerinizi aşağıdaki alandan bize iletebilirsiniz!
            </p>
          </div>
          <div className="contact-elements">
            <form className="contact-form">
              <div className="">
                <label>
                  Adınız
                  <span>*</span>
                </label>
                <input type="text" required />
              </div>
              <div className="">
                <label>
                  E-mail adtesiniz
                  <span>*</span>
                </label>
                <input type="text" required />
              </div>
              <div className="">
                <label>
                  Konu
                  <span>*</span>
                </label>
                <input type="text" required />
              </div>
              <div className="">
                <label>
                  Mesajınız
                  <span>*</span>
                </label>
                <textarea
                  id="author"
                  name="author"
                  type="text"
                  defaultValue=""
                  size="30"
                  required=""
                ></textarea>
              </div>
              <button className="btn btn-sm form-button">Mesajı Gönder</button>
            </form>
            <div className="contact-info">
              <div className="contact-info-item">
                <div className="contact-info-texts">
                  <strong> NovaNest</strong>
                  <p className="contact-street">
                  Gazi Mustafa Kemal, Kaynaklar Cd., 35665 Menemen/İzmir
                  </p>
                  <a href="tel:Phone: +1 1234 567 88">Telefon: +1 1234 567 88</a>
                  <a href="mailto:Email: contact@example.com">
                    Email: bakircay@example.com
                  </a>
                </div>
              </div>
              <div className="contact-info-item">
                <div className="contact-info-texts">
                  <strong> Çalışma Saatlerimiz</strong>
                  <p className="contact-date">Pazaartesi - Cuma : 9.00-17.00</p>
                  <p>Haftasonu Kapalı</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;