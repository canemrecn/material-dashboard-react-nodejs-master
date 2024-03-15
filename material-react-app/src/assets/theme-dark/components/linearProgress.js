// Bu dosya, doğrusal ilerleme çubuğu (linear progress bar) bileşeninin stillerini belirler. İçeriği incelendiğinde:

// borders ve colors modüllerinden gelen ilgili değişkenleri alır. borderRadius değişkeni çubuğun kenar yuvarlatma özelliklerini belirlerken, light renk temasının ana rengini içerir.

// pxToRem fonksiyonunu içeri alır. Bu fonksiyon, piksel cinsinden değerleri rem cinsine dönüştürmek için kullanılır.

// linearProgress nesnesi, doğrusal ilerleme çubuğu bileşeninin farklı durumları için stilleri içerir:

// root: Çubuğun kök elementi için genel stil ayarlarını içerir. Burada, çubuğun yüksekliği, köşelerinin yuvarlatılması ve ilgili diğer özellikler belirlenir.
// colorPrimary ve colorSecondary: İlgili renk temalarına göre çubuğun arka plan rengini belirler.
// bar: Çubuğun doluluğunu temsil eden kısmın stil ayarlarını içerir. Burada, çubuğun yüksekliği, köşelerinin yuvarlatılması ve ilgili diğer özellikler belirlenir. Ayrıca, çubuğun doluluk seviyesinin animasyon geçişi ayarlanır.
// Bu dosya, doğrusal ilerleme çubuğunun görünümünü ve davranışını özelleştirmek için kullanılır. Bu örnekte, çubuğun genel yapısı, arka plan rengi ve doluluk animasyonu ayarlanmıştır.

// Material Dashboard 2 React base styles
import borders from "assets/theme-dark/base/borders";
import colors from "assets/theme-dark/base/colors";

// Material Dashboard 2 React helper functions
import pxToRem from "assets/theme-dark/functions/pxToRem";

const { borderRadius } = borders;
const { light } = colors;

const linearProgress = {
  styleOverrides: {
    root: {
      height: pxToRem(6),
      borderRadius: borderRadius.md,
      overflow: "visible",
      position: "relative",
    },

    colorPrimary: {
      backgroundColor: light.main,
    },

    colorSecondary: {
      backgroundColor: light.main,
    },

    bar: {
      height: pxToRem(6),
      borderRadius: borderRadius.sm,
      position: "absolute",
      transform: `translate(0, 0) !important`,
      transition: "width 0.6s ease !important",
    },
  },
};

export default linearProgress;
