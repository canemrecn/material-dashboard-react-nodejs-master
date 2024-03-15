// Bu dosya, bir React projesi için tipografi stil ayarlarını tanımlar. Dosya, metin boyutları, font ağırlıkları, satır yükseklikleri ve font ailesi gibi temel tipografi özelliklerini içerir. Bu yapılandırmalar, uygulamanın genelinde kullanılmak üzere tasarlanmıştır ve projenizin görsel tutarlılığını sağlamaya yardımcı olur. Material Dashboard 2 React'in karanlık temasından renkler ve pikselden rem birimine dönüştürme işlevi kullanılarak, daha erişilebilir ve ölçeklenebilir bir kullanıcı arayüzü oluşturulur.

// Anahtar Bileşenler ve Kullanımları:
// baseProperties: Font ailesi, font ağırlıkları ve çeşitli font boyutları için temel değerleri içerir. Bu, tipografi stilinin tutarlı kalmasını sağlar.

// baseHeadingProperties ve baseDisplayProperties: Başlık (h1, h2, vb.) ve büyük ekran (d1, d2, vb.) metin stillerinin temelini oluşturan özelliklerdir. Her ikisi de fontFamily ve color özelliklerini baseProperties'ten alır ve buna ek olarak, başlıklar için fontWeight ve büyük ekran metinleri için fontWeight ve lineHeight özelliklerini tanımlar.

// typography: Projenin genel tipografi stilini tanımlayan nesnedir. Bu nesne, başlıklar (h1, h2, vb.), alt başlıklar (subtitle1, subtitle2), gövde metni (body1, body2), buton metni (button), altyazı (caption), ve üzeri çizgili metin (overline) için stil tanımlarını içerir. Ayrıca, büyük ekran metin boyutları (d1, d2, vb.) için de tanımlamalar yapar.

// Font Boyutları ve Ağırlıkları: Farklı kullanım senaryoları için çeşitli font boyutları ve ağırlıkları sağlanır. Bu, metinlerin okunabilirliğini ve görsel hiyerarşiyi artırır.

// pxToRem Fonksiyonu: Piksel değerlerini rem birimine çevirerek, kullanıcıların tarayıcı veya cihaz ayarlarına bağlı olarak metin boyutlarını ölçeklendirmesine olanak tanır. Bu, erişilebilirlik açısından önemlidir.

// Bu yapılandırma dosyası, projenizin görsel dilini oluştururken tutarlılık ve erişilebilirlik sağlamak için kullanılır. Aynı zamanda, projenizdeki tipografi ayarlarını merkezi bir yerden yönetmenize olanak tanır, böylece değişiklikler kolayca yapılabilir ve genelinde tutarlı bir görünüm sağlanabilir.

// Material Dashboard 2 React Base Styles
import colors from "assets/theme-dark/base/colors";

// Material Dashboard 2 React Helper Functions
import pxToRem from "assets/theme-dark/functions/pxToRem";

const { white } = colors;

const baseProperties = {
  fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
  fontWeightLighter: 100,
  fontWeightLight: 300,
  fontWeightRegular: 400,
  fontWeightMedium: 600,
  fontWeightBold: 700,
  fontSizeXXS: pxToRem(10.4),
  fontSizeXS: pxToRem(12),
  fontSizeSM: pxToRem(14),
  fontSizeMD: pxToRem(16),
  fontSizeLG: pxToRem(18),
  fontSizeXL: pxToRem(20),
  fontSize2XL: pxToRem(24),
  fontSize3XL: pxToRem(30),
};

const baseHeadingProperties = {
  fontFamily: baseProperties.fontFamily,
  color: white.main,
  fontWeight: baseProperties.fontWeightBold,
};

const baseDisplayProperties = {
  fontFamily: baseProperties.fontFamily,
  color: white.main,
  fontWeight: baseProperties.fontWeightLight,
  lineHeight: 1.2,
};

const typography = {
  fontFamily: baseProperties.fontFamily,
  fontWeightLighter: baseProperties.fontWeightLighter,
  fontWeightLight: baseProperties.fontWeightLight,
  fontWeightRegular: baseProperties.fontWeightRegular,
  fontWeightMedium: baseProperties.fontWeightMedium,
  fontWeightBold: baseProperties.fontWeightBold,

  h1: {
    fontSize: pxToRem(48),
    lineHeight: 1.25,
    ...baseHeadingProperties,
  },

  h2: {
    fontSize: pxToRem(36),
    lineHeight: 1.3,
    ...baseHeadingProperties,
  },

  h3: {
    fontSize: pxToRem(30),
    lineHeight: 1.375,
    ...baseHeadingProperties,
  },

  h4: {
    fontSize: pxToRem(24),
    lineHeight: 1.375,
    ...baseHeadingProperties,
  },

  h5: {
    fontSize: pxToRem(20),
    lineHeight: 1.375,
    ...baseHeadingProperties,
  },

  h6: {
    fontSize: pxToRem(16),
    lineHeight: 1.625,
    ...baseHeadingProperties,
  },

  subtitle1: {
    fontFamily: baseProperties.fontFamily,
    fontSize: baseProperties.fontSizeXL,
    fontWeight: baseProperties.fontWeightLight,
    lineHeight: 1.625,
  },

  subtitle2: {
    fontFamily: baseProperties.fontFamily,
    fontSize: baseProperties.fontSizeMD,
    fontWeight: baseProperties.fontWeightLight,
    lineHeight: 1.6,
  },

  body1: {
    fontFamily: baseProperties.fontFamily,
    fontSize: baseProperties.fontSizeXL,
    fontWeight: baseProperties.fontWeightRegular,
    lineHeight: 1.625,
  },

  body2: {
    fontFamily: baseProperties.fontFamily,
    fontSize: baseProperties.fontSizeMD,
    fontWeight: baseProperties.fontWeightLight,
    lineHeight: 1.6,
  },

  button: {
    fontFamily: baseProperties.fontFamily,
    fontSize: baseProperties.fontSizeSM,
    fontWeight: baseProperties.fontWeightLight,
    lineHeight: 1.5,
    textTransform: "uppercase",
  },

  caption: {
    fontFamily: baseProperties.fontFamily,
    fontSize: baseProperties.fontSizeXS,
    fontWeight: baseProperties.fontWeightLight,
    lineHeight: 1.25,
  },

  overline: {
    fontFamily: baseProperties.fontFamily,
  },

  d1: {
    fontSize: pxToRem(80),
    ...baseDisplayProperties,
  },

  d2: {
    fontSize: pxToRem(72),
    ...baseDisplayProperties,
  },

  d3: {
    fontSize: pxToRem(64),
    ...baseDisplayProperties,
  },

  d4: {
    fontSize: pxToRem(56),
    ...baseDisplayProperties,
  },

  d5: {
    fontSize: pxToRem(48),
    ...baseDisplayProperties,
  },

  d6: {
    fontSize: pxToRem(40),
    ...baseDisplayProperties,
  },

  size: {
    xxs: baseProperties.fontSizeXXS,
    xs: baseProperties.fontSizeXS,
    sm: baseProperties.fontSizeSM,
    md: baseProperties.fontSizeMD,
    lg: baseProperties.fontSizeLG,
    xl: baseProperties.fontSizeXL,
    "2xl": baseProperties.fontSize2XL,
    "3xl": baseProperties.fontSize3XL,
  },

  lineHeight: {
    sm: 1.25,
    md: 1.5,
    lg: 2,
  },
};

export default typography;
