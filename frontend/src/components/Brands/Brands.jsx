import BrandItem from "./BrandItem";
import "./Brands.css";

const Brands = () => {
  const handleItemClickApple = () => {
    window.location.href = "https://www.apple.com";
  };
  const handleItemClickSamsung = () => {
    window.location.href = "https://www.samsung.com/tr/";
  };
  const handleItemClickXiomi = () => {
    window.location.href = "https://www.mi.com/tr/";
  };
  const handleItemClickAsus = () => {
    window.location.href = "https://www.asus.com/tr/";
  };
  const handleItemClickHp = () => {
    window.location.href = "https://www.hpstore.com.tr/";
  };
  const handleItemClickMonster = () => {
    window.location.href = "https://www.monsternotebook.com.tr/";
  };
  return (
    <section className="brands">
      <div className="container">
        <ul className="brand-list">
          <li className="brand-item" onClick={handleItemClickApple}>
            <BrandItem imageSrc="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASIAAACuCAMAAAClZfCTAAAAkFBMVEX9+/4AAAD////8+v04ODjz8vT8+/xmZGb6+Pns6uxLSku1tLZyc3Ll5OZsbGzp5+rW1dZ4d3hRUVFGRka8urwICQgyMTLKyMnd3d2oqKhNTk2lo6WQkJAbGxsmJiZYWFiBgYGXl5c9Pj3CwsIqKira2NoTEhNVVlVfYF8SEhGenp6GhYeWlJXIxsmurq41MzWUtsZ1AAADzUlEQVR4nO3c23qaQBQFYGYhCuIhglGs8WwSNY19/7crRlMRMESGFrtZ/625mKxvZpizYRARERERERERERERERERERERERERERHdM4TKLsNdgx2Mej8eGNI1cMZNFXIZUTo4TxP1oc+IUsGdqpMhI0oBq6X+cMouzT1C2z8npOyyi3OH0K5FEpqxnSVZ0TqkdowoAZ1oQqpbdnnuD/YXCTVYiRKcyUVEHFsnYH6RUIsJJbQvEnrkoCgBTxcRcfKRZEWHROqJCSXgIZpQp14vu0D3B4toQpx6pIgOG3tMKJV3nniUXZQ7ZS1PATU5ZLzi9EHzXJMJGeZxewOxPY7G1Ostgjo+f7cdK/4nlQFYQ3e+8f3NYhWcI7At8xgI0F09ebX1ZFrzW/uhXbmUYPdn5+nqo797jkRghvm0x82X6BBp2nkHKjRKgrWYqhh/5JxSApz+62P8d6UGozrMkkv+r2C/TQag1HbmtnHIpzFJ+zm0fq9Ga4PjXUkgbHG1jZ8a36deFdra5SzsZr4lviKhr5VQ2CNJz0g7IaWWsqdumq3sSPaCv1VAQqon+MtvYlZAQqJPQRTQEamaIzkho/7lkOdbfFt0Qtjp1yHhI0czZd51I6vs/+HvgqudkOieOoSmbkI94QnFdqLzEN7MCmhnb9IrEVrZIXytLT6ia+tk3zWQnpDh6FYi8UcgMNSNSPw5Gv35WSA+orFuRLJX0ozYqZhcpFei+AE9RpSEHiPKwIgy4aduROKPF+t319JXQgyMdCMai49Ie+i4ER+R9gRECV+3LmJFTfxldP3F/YH0U2pYZoeQYSW8GuFNO6Kt9Ij094ikb4Eg0I9Ieo+tvXh9IHuIHbv0yoySsCoiItltzSwkIjUXfIMm9opDbuuV2PsgBbW0kCe2R4L+AaOTkdiI9AfYJ3LPiOjP9o86UitRWI2uX5C5idiuqJB1tYOa3IQKWRFRwkePeC8goanslTX42RFkEV2JCrlKJP60mv4sRP79WN37VrJvo33QXaAVv7UfwkYnob38ShSyNGazFWhmxuFuY/4x9lbu/PVS/rNGgidnl8y83VGVXuS1f+VJSPAaSBK6Oa7J+rLnZnEIbv6sDarSVX9CkLY5u9x0Wq3ObJ1Wh6S/FZKEbuwi6EvDDY7vpsF53r3GEmrJvn2eDmb0QL836kYflQOCt0GkkQlfALkKwfwjhsns57MRz+DwHN3cO7ynNtm41WtkJ6YBKxgOg249PQGg3g6CwBG7+fo9WW82VvRJRyIiIiIiIiIiIiIiIiIiIiIiIiIiIqL/x28/CC8dnlfwFAAAAABJRU5ErkJggg==" />
          </li>
          <li className="brand-item" onClick={handleItemClickSamsung}>
            <BrandItem imageSrc="https://images.samsung.com/is/image/samsung/assets/tr/about-us/brand/logo/mo/256_144_4.png?$512_N_PNG$" />
          </li>
          <li className="brand-item" onClick={handleItemClickXiomi}>
            <BrandItem imageSrc="https://www.pazarlamasyon.com/images/content/xiaomi-yeni-logosunu-tasarladi.png" />
          </li>
          <li className="brand-item" onClick={handleItemClickAsus}>
            <BrandItem imageSrc="data:image/png;base64,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" />
          </li>
          <li className="brand-item" onClick={handleItemClickHp}>
            <BrandItem imageSrc="https://w7.pngwing.com/pngs/210/467/png-transparent-hewlett-packard-house-and-garage-logo-dell-icon-hp-ink-text-trademark.png" />
          </li>
          <li className="brand-item" onClick={handleItemClickMonster}>
            <BrandItem imageSrc="https://www.atafix.com/wp-content/uploads/2018/09/monster-notebook-logo-040518.png" />
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Brands;
