
// Bu kod parçası, Material Dashboard 2 React teması için diyalog içerik metni bölümünün stil geçersiz kılmalarını tanımlar. dialogContentText nesnesi, diyalog penceresindeki metin içerikleri için özel stil ayarlarını içerir. Bu stil ayarları, içerik metninin okunabilirliğini ve görsel uyumunu sağlamak amacıyla font boyutu ve metin rengi gibi özellikleri özelleştirir.

// Anahtar Stil Özellikleri:
// root: Diyalog içerik metni bölümünün kök elemanı için stil ayarlarını içerir. Bu ayarlar, metin içeriğinin temel görünümünü belirler:
// fontSize: typography nesnesinden alınan size.md (orta) değeri, içerik metninin okunabilirliğini artırmak için kullanılır.
// color: Metin rengi olarak, rgba fonksiyonu ile opaklığı ayarlanmış beyaz rengi kullanılır. Bu, metin renginin şeffaflığı sayesinde içerik metninin üzerinde bulunduğu arka planla uyumlu bir görsel denge sağlar.
// Kullanım Senaryoları:
// Bu stil geçersiz kılmaları, uygulamanızdaki diyalog pencerelerindeki metin içeriklerinin düzenini ve görsel tasarımını özelleştirmek için kullanılır. Bu, kullanıcıların dikkatini çekmek ve mesajınızı net bir şekilde iletmek için önemlidir. Örneğin, kullanıcı bilgilendirme, uyarı mesajları, hata bildirimleri veya onay diyalogları gibi çeşitli durumlarda kullanılabilir.

// Yardımcı Fonksiyonun Kullanımı:
// rgba Fonksiyonu: Bu fonksiyon, belirli bir renk için opaklık değerini ayarlamak üzere kullanılır. rgba ile beyaz rengin opaklığının ayarlanması, metnin arka plan üzerindeki kontrastını ince ayarlamak ve okunabilirliği artırmak amacıyla yapılır. Bu yaklaşım, kullanıcı arayüzü tasarımında metinlerin görsel ağırlığını ve dikkat çekiciliğini dengelemek için sıkça kullanılır.
// Bu tanımlar, Material Dashboard 2 React teması kullanılarak geliştirilen projelerde, diyalog içerik metninin görsel tasarımını özelleştirmek ve yönetmek için etkili bir yöntem sunar.

// Material Dashboard 2 React base styles
import typography from "assets/theme-dark/base/typography";
import colors from "assets/theme-dark/base/colors";

// Material Dashboard 2 React helper functions
import rgba from "assets/theme-dark/functions/rgba";

const { size } = typography;
const { white } = colors;

const dialogContentText = {
  styleOverrides: {
    root: {
      fontSize: size.md,
      color: rgba(white.main, 0.8),
    },
  },
};

export default dialogContentText;
