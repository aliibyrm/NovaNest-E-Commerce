
import { Fragment } from "react";
import BlogDetails from "../components/BlogDetails/BlogDetails";

const BlogDetailsPage = () => {
  // Statik blog verileri
  const blogData = [
    { id: 1, title: 'Apple iOS 17.3 yayınlandı! İşte tüm yenilikler', date: '22 Ocak 2024', comments: 0, image: 'https://ares.shiftdelete.net/2024/01/ios-17-3.jpg', content:'Güncellemenin başlıca yeniliklerden biri Apple Music için Ortak Çalma Listeleri oldu. Buna göre Music aboneleri, arkadaşlarını ve ailelerini ortak çalma listeleri oluşturmaya davet edebilecek. Katılımcılar paylaşılan çalma listelerine şarkı ekleyebilecek, çıkarabilecek ve yeniden sıralayabilecek. iOS 17.3, Apple’ın Çalınan Cihaz Koruması politikalarını da genişletiyor. Kullanıcılar artık cihaz parolasını değiştirmeden veya hesapla ilgili değişiklikler yapmadan önce Face ID/Touch ID aracılığıyla biyometrik kimlik doğrulaması yapmak zorunda. Güncelleme ayrıca belirli ayarlar için biyometrik kimlik doğrulamasının yedek parolayla atlanmasını tamamen engelliyor. Bu, bazı özelliklerin sadece Face ID/Touch ID ile erişilebileceğini gösteriyor.iOS 17.3’le birlikte yeni bir duvar kağıdı da paylaşıldı. Siyahi Amerikalılar için önemli dönemlerden biri olan Siyahi Tarihi Haftasına özel olarak “Birlik” isimli duvar kağıdı sunuldu. Güncellemede, küçük hata düzeltmeleri ve performans iyileştirmeleri de yer alıyor.' },
    { id: 2, title: 'Samsung Galaxy S24 Plus ön inceleme!', date: '17 Ocak 2024', comments: 0, image: 'https://ares.shiftdelete.net/2024/01/Samsung-Galaxy-S24-Plus-on-inceleme.jpg', content:'Ekran Özellikleri: Samsung Galaxy S24 Plus, serinin ortanca modeli olarak öne çıkıyor. 6.7 inç boyutundaki ekranı, 3120 x 1440 QHD+ çözünürlüğe, 1-120 Hz arası değişebilen yenileme hızına ve 2600 nit maksimum parlaklığa sahip.Donanım Özellikleri: İşlemci tarafında, Galaxy S24 Plus modelinde Snapdragon 8 Gen 3 yerine yapay zeka destekli Exynos 2400 yongası tercih edilmiş. Cihaz, 12 GB RAM ve 256 GB depolama kapasitesi ile geliyor. Kamera Özellikleri: Arka tarafta, Galaxy S24 ile aynı olan üçlü kamera dizilimini görüyoruz. Bu kameralar sırasıyla 50 Megapiksel ana kamera, 10 Megapiksel telefoto (3x optik zoom) ve 12 Megapiksel geniş açılı kameradan oluşuyor. Ön tarafta ise 12 Megapiksel özçekim kamerası bulunuyor. Batarya Özellikleri: Cihazın batarya özellikleri de dikkat çekici. 4900 mAh büyüklüğündeki pil, alışılagelmiş 45W kablolu şarj desteği ile birlikte geliyor. Ayrıca, kablosuz ve ters kablosuz şarj desteği de sunuluyor.Bu özelliklerle donatılmış Galaxy S24 Plus, serideki diğer modellerden farklı bir deneyim sunmayı hedefliyor. Şık tasarımı ve güçlü donanımıyla, kullanıcıların beklentilerini karşılamaya aday bir akıllı telefon olarak öne çıkıyor.' },
    { id: 3, title: 'iPhone 15 Pro Max ile iPhone 14 Pro Max karşı karşıya!', date: '1 Ocak 2024', comments: 0, image: 'https://ares.shiftdelete.net/2023/11/iphone-15-pro-max-ile-iphone-14-pro-max-karsi-karsiya-2.jpg',content:'iPhone 15 Pro Max ile iPhone 14 Pro Max tasarım farklılıkları 240 gr ağırlığa sahip olan iPhone 14 Pro Max’e göre, titanyum malzeme ile beraber daha hafifleyen iPhone 15 Pro Max, 221 gram ağırlığa sahip. Hafifleyen iPhone 15 Pro Max, iPhone 14 Pro Max’e göre biraz kalınlaşmış. 7.9 mm’den 8.25 mm’ye çıkan kalınlık, telefonun kenarlarının biraz daha ovalleştirilmesinden ötürü hissedilmiyor. Havacılık ve uzay endüstrisinde kullanılan titanyum, iPhone 15 Pro Max’i hem daha sağlam hem de daha hafif kılıyor. iPhone 15 Pro Max’in dışında 5. sınıf titanyum malzeme kullanan Apple, telefonun iç iskeletinde ise %100 geri dönüştürülmüş alüminyumdan üretiyor.' },
  ];

  return (
    <Fragment>
      <BlogDetails blogData={blogData} />
    </Fragment>
  );
};

export default BlogDetailsPage;
