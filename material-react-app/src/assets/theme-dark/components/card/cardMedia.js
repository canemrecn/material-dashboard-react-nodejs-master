// Bu kod parçası, Material Dashboard 2 React teması için kart medya bileşeninin stil geçersiz kılmalarını tanımlar. cardMedia nesnesi, kart medya bileşeninin temel stilini ve medya içeriği için özel stilleri belirler. Bu stiller, kartın medya (genellikle resimler veya videolar) bölümünün görsel düzenini ve davranışını özelleştirmek için kullanılır.

// Anahtar Stil Özellikleri:
// root: Kart medya bileşeninin kök (root) elemanı için stil ayarlarını içerir. Burada, borderRadius ve margin özellikleri tanımlanmıştır.

// borderRadius: borders nesnesinden alınan xl (extra large) yuvarlaklık değerini kullanır. Bu, medyanın köşelerinin ne kadar yuvarlatılacağını belirler ve görsel estetiği etkiler.
// margin: Medyanın etrafındaki boşluğu belirler. pxToRem fonksiyonu kullanılarak, piksel cinsinden verilen değerler rem birimine dönüştürülür. Bu, medyanın üst ve yan boşluklarını ayarlarken responsive tasarım ilkelerine uygunluğu sağlar.
// media: Medya içeriğinin (genellikle img veya video etiketi) spesifik stilini tanımlar. Burada, width özelliği "auto" olarak ayarlanmıştır. Bu, medyanın orijinal genişliğine göre ölçeklenmesini ve kapsayıcı elementinin boyutlarına uyum sağlamasını sağlar.

// Kullanım Senaryoları:
// Bu stil geçersiz kılmaları, kartların medya bölümünün görsel uyumunu ve düzenini özelleştirmek için kullanılır. Örneğin, bir ürün galerisi, haber makalesi veya profil kartı gibi bileşenlerde kullanılabilir. Yuvarlak köşeler ve özelleştirilmiş marjlar, kartların tasarımını daha estetik ve kullanıcı dostu hale getirir.

// pxToRem Fonksiyonunun Kullanımı:
// pxToRem Fonksiyonu: Bu fonksiyon, piksel değerlerini, kullanıcının tarayıcı ayarlarına bağlı olarak ölçeklenebilen rem birimine dönüştürür. Bu dönüşüm, projenin farklı ekran boyutları ve çözünürlüklerde tutarlı bir şekilde görüntülenmesine yardımcı olur, böylece responsive tasarım hedeflerine ulaşılabilir.
// Material Dashboard 2 React Base Styles
import borders from "assets/theme-dark/base/borders";

// Material Dashboard 2 React Helper Functions
import pxToRem from "assets/theme-dark/functions/pxToRem";

const { borderRadius } = borders;

const cardMedia = {
  styleOverrides: {
    root: {
      borderRadius: borderRadius.xl,
      margin: `${pxToRem(16)} ${pxToRem(16)} 0`,
    },

    media: {
      width: "auto",
    },
  },
};

export default cardMedia;
