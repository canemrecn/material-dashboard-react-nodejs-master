
// Bu dosya, bir onay kutusunun (checkbox) görünümünü ve davranışını özelleştirmek için kullanılır. Aşağıdaki özelleştirmeler sağlanmıştır:

// Kutu Kökü (Root) Stili: Onay kutusunun kök bileşeninin stili belirlenir. Kutunun genel özellikleri, çevresine çizilen kenarlığın kalınlığı, rengi ve köşe yuvarlatma gibi özellikler ayarlanır. Ayrıca fare üzerine gelindiğinde kutunun arka plan rengi değiştirilir ve odaklanıldığında kenarlığın rengi değiştirilir.

// Birinci Renk (Primary) Stili: Onay kutusunun birincil renk (primary color) temalı özellikleri belirlenir. Birincil renk, genellikle işlemin başarılı olduğunu veya bir eylemin gerçekleştiğini belirtmek için kullanılır. Seçili olduğunda kutunun ve işaretin rengi değiştirilir.

// İkinci Renk (Secondary) Stili: Onay kutusunun ikincil renk (secondary color) temalı özellikleri belirlenir. İkincil renk, genellikle bir seçenek veya işlemin alternatif durumunu belirtmek için kullanılır. Seçili olduğunda kutunun ve işaretin rengi değiştirilir.

// Bu dosya, onay kutusunun farklı renk ve temalara göre görünümünü özelleştirmek için kullanılan stil özelleştirmelerini içerir.

// Material Dashboard 2 React base styles
import borders from "assets/theme/base/borders";
import colors from "assets/theme/base/colors";

// Material Dashboard 2 React helper functions
import pxToRem from "assets/theme/functions/pxToRem";
import linearGradient from "assets/theme/functions/linearGradient";

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
