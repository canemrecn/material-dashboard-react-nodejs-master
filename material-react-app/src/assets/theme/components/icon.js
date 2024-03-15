// Bu dosya, genel olarak kullanılan simge (icon) bileşeninin özelleştirilmiş görünümünü içerir. Stiller, simge boyutlarına ve özelliklerine göre farklılaştırılmıştır.

// İlk olarak, pxToRem fonksiyonu içe aktarılır. Bu fonksiyon, piksel cinsinden bir uzunluğu rem birimine dönüştürür. Bu, daha iyi ölçeklenebilirlik sağlar.

// Daha sonra, icon objesi içinde, simge bileşeninin varsayılan özellikleri ve stil aşamaları belirtilir:

// defaultProps: Simge bileşeninin varsayılan özellikleri tanımlanır. baseClassName özelliği, kullanılacak simge setini belirtir (burada "material-icons-round" kullanılmıştır). fontSize özelliği, simgenin varsayılan yazı tipi boyutunu belirtir.
// styleOverrides: Farklı boyutlarda simge için stil aşamaları tanımlanır.
// fontSizeInherit: Simgenin yazı tipi boyutunu kalıtım yoluyla alır.
// fontSizeSmall: Küçük boyutlu simge için yazı tipi boyutu belirlenir. Burada pxToRem fonksiyonu kullanılarak piksel cinsinden bir boyut rem birimine dönüştürülür.
// fontSizeLarge: Büyük boyutlu simge için yazı tipi boyutu belirlenir. Aynı şekilde pxToRem fonksiyonu kullanılarak piksel cinsinden bir boyut rem birimine dönüştürülür.
// Bu stil tanımları, simge bileşeninin farklı boyutlarda ve özelliklerde görünümünü özelleştirmek için kullanılır.

// Material Dashboard 2 React helper functions
import pxToRem from "assets/theme/functions/pxToRem";

const icon = {
  defaultProps: {
    baseClassName: "material-icons-round",
    fontSize: "inherit",
  },

  styleOverrides: {
    fontSizeInherit: {
      fontSize: "inherit !important",
    },

    fontSizeSmall: {
      fontSize: `${pxToRem(20)} !important`,
    },

    fontSizeLarge: {
      fontSize: `${pxToRem(36)} !important`,
    },
  },
};

export default icon;
