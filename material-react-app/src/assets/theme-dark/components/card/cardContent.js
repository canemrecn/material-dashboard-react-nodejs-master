
// Bu kod parçası, Material Dashboard 2 React temasının bir parçası olarak kart içeriği için stil geçersiz kılmalarını tanımlar. cardContent nesnesi, kart içeriğinin root elemanı için CSS stilini ayarlar. Bu stil ayarları, kartın içerik kısmının görsel düzenini ve boşluklandırmasını (margin ve padding) özelleştirir.

// Anahtar Stil Özellikleri:
// marginTop, marginBottom: Kart içeriğinin üst ve alt marjını sıfıra ayarlar. Bu, kartın içeriğinin kenarlarının tasarım gereksinimlerine göre ayarlanmasını sağlar, böylece kart içerikleri arasında tutarlı bir boşluklandırma elde edilir.

// padding: Kart içeriğinin dolgusunu (padding) ayarlar. Bu, içeriğin kartın kenarlarından belirli bir mesafede başlamasını sağlar, böylece daha düzenli ve okunabilir bir içerik yapısı oluşturulur. pxToRem fonksiyonu kullanılarak verilen padding değerleri, tasarımın farklı ekran boyutları ve çözünürlüklerde tutarlı kalmasını sağlamak için rem birimine çevrilir.

// pxToRem Fonksiyonunun Kullanımı:
// pxToRem Fonksiyonu: Bu fonksiyon, piksel cinsinden verilen bir değeri, kullanıcının tarayıcı ayarlarına bağlı olarak ölçeklenebilen rem birimine dönüştürür. Bu yaklaşım, responsive (duyarlı) tasarımın önemli bir parçasıdır ve uygulamanın farklı cihazlarda ve ekran boyutlarında tutarlı bir şekilde görüntülenmesine katkıda bulunur.
// Kullanım Senaryoları:
// Bu stil geçersiz kılmaları, Material Dashboard 2 React kullanan projelerde kart içeriklerinin görsel görünümünü özelleştirmek için kullanılır. Kartlar, bilgi blokları, kullanıcı arayüzü bileşenleri veya diğer içerikleri gruplamak için sıkça kullanılan bir arayüz elemanıdır. Bu stil ayarları, kartların içerik alanının nasıl görüneceğini ve kullanıcı tarafından nasıl algılanacağını kontrol eder, bu da kullanıcı deneyiminin önemli bir yönüdür.

// Material Dashboard 2 React Helper Functions
import pxToRem from "assets/theme-dark/functions/pxToRem";

const cardContent = {
  styleOverrides: {
    root: {
      marginTop: 0,
      marginBottom: 0,
      padding: `${pxToRem(8)} ${pxToRem(24)} ${pxToRem(24)}`,
    },
  },
};

export default cardContent;
