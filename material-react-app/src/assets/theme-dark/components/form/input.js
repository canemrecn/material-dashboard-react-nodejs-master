// Bu dosya, giriş alanlarının (input) stilini özelleştirmek için bazı düzenlemeler içerir. İçeriği incelersek:

// colors, typography ve borders modüllerini içeri aktarıyor. Bu modüller, temel renkler, tipografi stilleri ve sınırlar gibi stil bilgilerini içerebilir.

// Bir stil işlevi olan rgba fonksiyonunu içeri aktarıyor. Bu fonksiyon, bir renge saydamlık (alpha) değeri ekleyerek rgba formatında bir renk döndürebilir.

// colors modülünden çeşitli renkleri (info, inputBorderColor, dark, grey, white) ve typography modülünden boyutu alıyor.

// borders modülünden sınır genişliklerini (borderWidth) alıyor.

// input adlı bir nesne tanımlıyor. Bu nesne, giriş alanlarının kök öğesi için bazı stil düzenlemeleri içerir.

// Kök öğesinin altında, giriş alanlarının boyutunu (fontSize), metin rengini (color) ve diğer bazı stillerini belirler.

// Hover durumunda sınır altındaki rengi ayarlar (&:hover:not(.Mui-disabled):before).

// Giriş alanının etkinleştirilmiş durumundaki sınır rengini ve rengi (&:before ve &:after) belirler.

// İçerideki metin rengini (input) ve yer tutucu (placeholder) metin rengini (&::-webkit-input-placeholder) ayarlar.

// Bu dosya, giriş alanlarının (input) stiline özgü bazı özelleştirmeler sağlar. Örneğin, metin rengini, sınır rengini ve boyutunu belirleyerek giriş alanlarının görünümünü ayarlayabilirsiniz. Bu tür stil dosyaları, genellikle bir tema oluştururken veya bir bileşen kitaplığına katkı sağlarken kullanılır.

// Material Dashboard 2 React Base Styles
import colors from "assets/theme-dark/base/colors";
import typography from "assets/theme-dark/base/typography";
import borders from "assets/theme-dark/base/borders";

// Material Dashboard 2 React Helper Functions
import rgba from "assets/theme-dark/functions/rgba";

const { info, inputBorderColor, dark, grey, white } = colors;
const { size } = typography;
const { borderWidth } = borders;

const input = {
  styleOverrides: {
    root: {
      fontSize: size.sm,
      color: dark.main,

      "&:hover:not(.Mui-disabled):before": {
        borderBottom: `${borderWidth[1]} solid ${rgba(inputBorderColor, 0.6)}`,
      },

      "&:before": {
        borderColor: rgba(inputBorderColor, 0.6),
      },

      "&:after": {
        borderColor: info.main,
      },

      input: {
        color: white.main,

        "&::-webkit-input-placeholder": {
          color: grey[100],
        },
      },
    },
  },
};

export default input;
