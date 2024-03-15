// Bu dosya, bir otomatik tamamlama (autocomplete) bileşeninin stilini ve görünümünü özelleştirmek için kullanılır. Aşağıdaki şekilde özelleştirmeler sağlanmıştır:

// Popper Stili: Otomatik tamamlama öğelerinin listesi için popper bileşeninin stili belirlenir. Kutunun gölge efekti, iç içe düzen, yazı tipi boyutu, metin rengi, arka plan rengi ve köşe yuvarlatma gibi özellikler ayarlanır.

// Kağıt (Paper) Stili: Otomatik tamamlama kutusunun kağıt bileşeninin stili belirlenir. Kutunun gölge efekti ve arka plan rengi ayarlanır.

// Seçenek (Option) Stili: Otomatik tamamlama seçeneklerinin stili belirlenir. Seçeneklerin dolgusu, metin rengi, geçiş efektleri ve seçili olduğunda arka plan ve metin rengi ayarlanır.

// Seçenek Yok (No Options) Stili: Seçenek yok durumunda görüntülenecek metnin stili belirlenir.

// Grup Etiketi (Group Label) Stili: Seçeneklerin gruplandırıldığı durumda grup etiketinin stili belirlenir.

// Yükleniyor (Loading) Durumu Stili: Veriler yüklenirken görüntülenecek metnin stili belirlenir.

// Etiket (Tag) Stili: Seçilen öğelerin etiket olarak görüntüleneceği durumda etiketlerin stili belirlenir. Etiketin içeriği, arka plan rengi, metin rengi ve simgelerin görünümü özelleştirilir.

// Bu dosya, otomatik tamamlama bileşeninin farklı bileşenlerini ve durumlarını özelleştirmek için kullanılan stil özelleştirmelerini içerir.

// Material Dashboard 2 React base styles
import boxShadows from "assets/theme/base/boxShadows";
import typography from "assets/theme/base/typography";
import colors from "assets/theme/base/colors";
import borders from "assets/theme/base/borders";

// Material Dashboard 2 React helper functions
import pxToRem from "assets/theme/functions/pxToRem";

const { lg } = boxShadows;
const { size } = typography;
const { text, white, transparent, light, dark, gradients } = colors;
const { borderRadius } = borders;

const autocomplete = {
  styleOverrides: {
    popper: {
      boxShadow: lg,
      padding: pxToRem(8),
      fontSize: size.sm,
      color: text.main,
      textAlign: "left",
      backgroundColor: `${white.main} !important`,
      borderRadius: borderRadius.md,
    },

    paper: {
      boxShadow: "none",
      backgroundColor: transparent.main,
    },

    option: {
      padding: `${pxToRem(4.8)} ${pxToRem(16)}`,
      borderRadius: borderRadius.md,
      fontSize: size.sm,
      color: text.main,
      transition: "background-color 300ms ease, color 300ms ease",

      "&:hover, &:focus, &.Mui-selected, &.Mui-selected:hover, &.Mui-selected:focus": {
        backgroundColor: light.main,
        color: dark.main,
      },

      '&[aria-selected="true"]': {
        backgroundColor: `${light.main} !important`,
        color: `${dark.main} !important`,
      },
    },

    noOptions: {
      fontSize: size.sm,
      color: text.main,
    },

    groupLabel: {
      color: dark.main,
    },

    loading: {
      fontSize: size.sm,
      color: text.main,
    },

    tag: {
      display: "flex",
      alignItems: "center",
      height: "auto",
      padding: pxToRem(4),
      backgroundColor: gradients.dark.state,
      color: white.main,

      "& .MuiChip-label": {
        lineHeight: 1.2,
        padding: `0 ${pxToRem(10)} 0 ${pxToRem(4)}`,
      },

      "& .MuiSvgIcon-root, & .MuiSvgIcon-root:hover, & .MuiSvgIcon-root:focus": {
        color: white.main,
        marginRight: 0,
      },
    },
  },
};

export default autocomplete;
