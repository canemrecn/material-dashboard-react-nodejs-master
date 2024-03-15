// colors, borders ve boxShadows modüllerini içeri aktarıyor. Bu modüller, temel renkler, sınırlar ve kutu gölgeleri gibi stil bilgilerini içerebilir.

// pxToRem ve linearGradient gibi stil işlevlerini içeren functions altında bulunan dosyaları içeri aktarıyor.

// colors modülünden beyaz, gradyanlar, gri ve saydam renkleri alıyor.

// borders modülünden sınır genişliklerini (borderWidth) alıyor.

// boxShadows modülünden orta büyüklükte bir kutu gölgesi (md) alıyor.

// switchButton adlı bir nesne tanımlıyor. Bu nesne, anahtar bileşeninin kök, başlık ve iz sürüşü gibi bileşenlerinin stil düzenlemelerini içerir.

// Kök öğesinin altında, anahtar bileşeninin temel stilini belirleyen bir dizi özellik tanımlanmıştır. Bu özellikler, anahtar bileşeninin farklı durumları için çeşitli stilleri belirtir.

// Başlık ve iz sürüşü (thumb ve track) bileşenlerinin stilleri ayrı ayrı belirtilmiştir.

// Mui-checked sınıfı, anahtar bileşeninin işaretli olduğu durumu tanımlar ve bu durumda ilgili stiller uygulanır.

// Mui-disabled sınıfı, anahtar bileşeninin devre dışı olduğu durumu tanımlar ve bu durumda ilgili stiller uygulanır.

// Bu dosya, anahtar bileşeninin stiline özgü bazı özelleştirmeler sağlar. Örneğin, anahtarın rengini, boyutunu ve gölgesini ayarlayarak anahtarın görünümünü özelleştirebilirsiniz. Bu tür stil dosyaları, genellikle bir tema oluştururken veya bir bileşen kitaplığına katkı sağlarken kullanılır.

// Material Dashboard 2 React base styles
import colors from "assets/theme-dark/base/colors";
import borders from "assets/theme-dark/base/borders";
import boxShadows from "assets/theme-dark/base/boxShadows";

// Material Dashboard 2 React helper functions
// import rgba from "assets/theme-dark/functions/rgba";
import pxToRem from "assets/theme-dark/functions/pxToRem";
import linearGradient from "assets/theme-dark/functions/linearGradient";

const { white, gradients, grey, transparent } = colors;
const { borderWidth } = borders;
const { md } = boxShadows;

const switchButton = {
  defaultProps: {
    disableRipple: false,
  },

  styleOverrides: {
    switchBase: {
      color: gradients.dark.main,

      "&:hover": {
        backgroundColor: transparent.main,
      },

      "&.Mui-checked": {
        color: gradients.dark.main,

        "&:hover": {
          backgroundColor: transparent.main,
        },

        "& .MuiSwitch-thumb": {
          borderColor: `${gradients.dark.main} !important`,
        },

        "& + .MuiSwitch-track": {
          backgroundColor: `${gradients.dark.main} !important`,
          borderColor: `${gradients.dark.main} !important`,
          opacity: 1,
        },
      },

      "&.Mui-disabled + .MuiSwitch-track": {
        opacity: "0.3 !important",
      },

      "&.Mui-focusVisible .MuiSwitch-thumb": {
        backgroundImage: linearGradient(gradients.info.main, gradients.info.state),
      },
    },

    thumb: {
      backgroundColor: white.main,
      boxShadow: md,
      border: `${borderWidth[1]} solid ${grey[400]}`,
    },

    track: {
      width: pxToRem(32),
      height: pxToRem(15),
      backgroundColor: grey[400],
      border: `${borderWidth[1]} solid ${grey[400]}`,
      opacity: 1,
    },

    checked: {},
  },
};

export default switchButton;
