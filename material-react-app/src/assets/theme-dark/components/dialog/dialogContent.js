// Bu kod parçası, Material Dashboard 2 React teması için diyalog içeriği bölümünün stil geçersiz kılmalarını tanımlar. dialogContent nesnesi, diyalog penceresinin içerik bölümü için stil ayarlarını içerir. Bu ayarlar, içerik alanının görsel düzenini, font boyutunu, metin rengini ve opsiyonel olarak, içerik bölümünün üst ve alt kenarlarına eklenen ayırıcı çizgilerin (dividers) stilini özelleştirir.

// Anahtar Stil Özellikleri:
// root: Diyalog içeriği bölümünün kök elemanı için temel stil ayarlarını içerir. Bu ayarlar, içerik bölümünün padding'ini, font boyutunu ve metin rengini belirler:

// padding: İçerik bölümünün etrafındaki boşluğu ayarlar. pxToRem fonksiyonu kullanılarak, tasarımın farklı ekran boyutları ve çözünürlüklerde tutarlı kalmasını sağlayacak şekilde rem birimine dönüştürülür.
// fontSize: typography nesnesinden alınan size.md (orta) değeri, metinlerin okunabilirliğini sağlamak için kullanılır.
// color: Metin rengi olarak, rgba fonksiyonu ile opaklığı ayarlanmış beyaz rengi kullanır. Bu, içerik metninin görsel olarak daha yumuşak ve göze hoş görünmesini sağlar.
// dividers: Ayırıcı çizgiler için stil ayarlarını içerir. borderTop ve borderBottom özellikleri, içerik bölümünün üst ve alt kenarlarına ince bir çizgi ekler:

// Çizgilerin kalınlığı borderWidth[1] (genellikle 1 piksel) ve rengi, rgba fonksiyonu kullanılarak opaklığı ayarlanmış borderColor değeri ile belirlenir. Bu, içerik bölümünü çevreleyen çerçeve veya bölümleri görsel olarak ayırmak için kullanılır.
// Kullanım Senaryoları:
// Bu stil geçersiz kılmaları, uygulamanızdaki diyalog pencerelerindeki içerik bölümünün düzenini ve görsel tasarımını özelleştirmek için kullanılır. Örneğin, bir form, bilgi metni veya kullanıcıya sunulan diğer içerik türlerini içeren diyalog pencereleri bu stili kullanabilir.

// Yardımcı Fonksiyonların Kullanımı:
// pxToRem ve rgba Fonksiyonları: Bu fonksiyonlar, responsive tasarımı desteklemek ve görsel tasarımı özelleştirmek için kullanılır. pxToRem fonksiyonu, piksel cinsinden verilen değerleri rem birimine dönüştürerek, farklı ekran boyutları ve çözünürlüklerde tutarlı bir görünüm sağlar. rgba fonksiyonu ise, renklerin opaklığını ayarlamak için kullanılır, bu da metin ve diğer görsel öğelerin görsel ağırlığını ince ayarlamak için yararlıdır.

// Material Dashboard 2 React base styles
import typography from "assets/theme-dark/base/typography";
import borders from "assets/theme-dark/base/borders";
import colors from "assets/theme-dark/base/colors";

// Material Dashboard 2 React helper functions
import pxToRem from "assets/theme-dark/functions/pxToRem";
import rgba from "assets/theme-dark/functions/rgba";

const { size } = typography;
const { white } = colors;
const { borderWidth, borderColor } = borders;

const dialogContent = {
  styleOverrides: {
    root: {
      padding: pxToRem(16),
      fontSize: size.md,
      color: rgba(white.main, 0.8),
    },

    dividers: {
      borderTop: `${borderWidth[1]} solid ${rgba(borderColor, 0.6)}`,
      borderBottom: `${borderWidth[1]} solid ${rgba(borderColor, 0.6)}`,
    },
  },
};

export default dialogContent;
