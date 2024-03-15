// Bu dosya, birkaç farklı kaynaktan alınan bilgileri içeriyor gibi görünüyor ve birkaç farklı işlevi yerine getiriyor. Açıklamalar ve dosyanın içeriğine dayanarak yapabileceğim bir çıkarım şu olabilir:

// İlk olarak, borders ve colors adlı iki modülden içeri aktarılan veriler var. Bunlar, sınır genişlikleri ve renkler gibi temel stil özelliklerini içerebilir.

// Daha sonra, pxToRem ve linearGradient gibi işlevler içeren başka bir modül içeri aktarılıyor. Bu işlevler, piksel birimlerini rem birimlerine dönüştürmek ve lineer gradientler oluşturmak gibi stil işlevlerini gerçekleştirebilir.

// Son olarak, bir checkbox bileşeninin stiline ilişkin bazı düzenlemeler içeren bir nesne tanımlanıyor. Bu düzenlemeler, checkbox'un farklı durumları için kök, birincil renk ve ikincil renk gibi durum bazlı stiller içerebilir.

// Genel olarak, bu dosya, bir tema oluştururken veya bir bileşen kitaplığına katkı sağlarken kullanılabilen stil bilgilerini içerir. Bu özel dosya, genellikle bir React uygulamasında, bileşenleri temalandırmak veya özelleştirmek için kullanılabilir. Bu dosyanın ne yaptığına ve ne için kullanıldığına ilişkin daha fazla bağlam sağlanmadığından, dosyanın tam olarak ne yaptığına dair kesin bir bilgi vermek zor olabilir. Ancak, stil ve tema ayarlamaları yapmak için kullanıldığı açıktır.

// Material Dashboard 2 React base styles
import borders from "assets/theme-dark/base/borders";
import colors from "assets/theme-dark/base/colors";

// Material Dashboard 2 React helper functions
import pxToRem from "assets/theme-dark/functions/pxToRem";
import linearGradient from "assets/theme-dark/functions/linearGradient";

const { borderWidth, borderColor } = borders;
const { transparent, info } = colors;

const checkbox = {
  styleOverrides: {
    root: {
      "& .MuiSvgIcon-root": {
        backgroundPosition: "center",
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
        width: pxToRem(20),
        height: pxToRem(20),
        color: transparent.main,
        border: `${borderWidth[1]} solid ${borderColor}`,
        borderRadius: pxToRem(5.6),
      },

      "&:hover": {
        backgroundColor: transparent.main,
      },

      "&.Mui-focusVisible": {
        border: `${borderWidth[2]} solid ${info.main} !important`,
      },
    },

    colorPrimary: {
      color: borderColor,

      "&.Mui-checked": {
        color: info.main,

        "& .MuiSvgIcon-root": {
          backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 -1 22 22'%3e%3cpath fill='none' stroke='%23fff' stroke-linecap='round' stroke-linejoin='round' stroke-width='2.5' d='M6 10l3 3l6-6'/%3e%3c/svg%3e"), ${linearGradient(
            info.main,
            info.main
          )}`,
          borderColor: info.main,
        },
      },
    },

    colorSecondary: {
      color: borderColor,

      "& .MuiSvgIcon-root": {
        color: info.main,
        "&.Mui-checked": {
          backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 -1 22 22'%3e%3cpath fill='none' stroke='%23fff' stroke-linecap='round' stroke-linejoin='round' stroke-width='2.5' d='M6 10l3 3l6-6'/%3e%3c/svg%3e"), ${linearGradient(
            info.main,
            info.main
          )}`,
          borderColor: info.main,
        },
      },
    },
  },
};

export default checkbox;
