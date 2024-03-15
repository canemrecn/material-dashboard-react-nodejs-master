
// Bu dosya, avatar bileşeninin stilini özelleştirmek için bazı düzenlemeler içerir. İçeriği incelediğimizde:

// borders modülünden köşe yarıçapını (borderRadius) alıyor.

// avatar adında bir nesne tanımlıyor. Bu nesne, avatar bileşeninin kök öğesi ve alt öğeleri için bazı stil düzenlemeleri içerir.

// styleOverrides altında, avatar bileşeninin kök öğesi ve alt öğeleri için stil düzenlemeleri tanımlanmıştır. Bu düzenlemeler, avatar bileşeninin genel görünümünü belirler.

// root: Avatar bileşeninin kök öğesinin tüm geçişlerini (transition) 200ms'lik bir sürede yumuşak bir giriş çıkışla belirtir.

// rounded: Avatar bileşeninin köşelerini büyük bir yuvarlaklıkla (borderRadius.lg) belirler. Bu, avatar bileşeninin kenarlarını yuvarlatır.

// img: Avatar bileşeninin içindeki görüntünün (img) yüksekliğini otomatik olarak ayarlar. Bu, görüntünün orijinal boyutunu korur.

// Bu dosya, avatar bileşeninin görünümünü özelleştirmek için kullanılır. Örneğin, avatar bileşeninin köşelerini yuvarlatarak veya içindeki görüntünün boyutunu ayarlayarak avatar bileşeninin görünümünü değiştirebilirsiniz. Bu tür stil dosyaları, genellikle bir tema oluştururken veya bir bileşen kitaplığına katkı sağlarken kullanılır.

// Material Dashboard 2 React base styles
import borders from "assets/theme-dark/base/borders";

const { borderRadius } = borders;

const avatar = {
  styleOverrides: {
    root: {
      transition: "all 200ms ease-in-out",
    },

    rounded: {
      borderRadius: borderRadius.lg,
    },

    img: {
      height: "auto",
    },
  },
};

export default avatar;
