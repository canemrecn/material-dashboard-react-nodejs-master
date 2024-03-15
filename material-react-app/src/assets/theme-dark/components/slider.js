// Bu dosya, bir kaydırıcı bileşeninin stillerini belirler. İçeriği incelendiğinde:

// slider nesnesi, kaydırıcı bileşeninin görünümünü belirler.
// root: Kaydırıcı bileşeninin kök bileşeninin stillerini belirtir.
// width: Kaydırıcı bileşeninin genişliğini yüzde olarak tamamlar.
// & .MuiSlider-active, & .Mui-focusVisible: Aktif ve odaklanılmış durumdaki kaydırıcı bileşenlerinin gölgelerini kaldırmak için gerekli stil ayarlarını belirtir.
// & .MuiSlider-valueLabel: Kaydırıcının değer etiketinin rengini belirtir.
// rail: Kaydırıcı bileşeninin rayının stillerini belirtir.
// height: Rayın yüksekliğini belirler.
// background: Rayın arka plan rengini belirtir.
// borderRadius: Rayın kenar yuvarlaklığını belirtir.
// track: Kaydırıcı bileşeninin izinin stillerini belirtir.
// background: İzin arka plan rengini belirtir.
// height: İzin yüksekliğini belirtir.
// position: Pozisyonunu belirtir.
// borderRadius: İzin kenar yuvarlaklığını belirtir.
// zIndex: İzin bileşeninin z indeksini belirtir.
// thumb: Kaydırıcı bileşeninin başlığının stillerini belirtir.
// width: Başlığın genişliğini belirtir.
// height: Başlığın yüksekliğini belirtir.
// backgroundColor: Başlığın arka plan rengini belirtir.
// zIndex: Başlığın z indeksini belirtir.
// boxShadow: Başlığın gölgesini belirtir.
// border: Başlığın kenarlığını belirtir.
// &:hover: Başlık üzerine geldiğinde stil değişikliği sağlamak için gerekli ayarları belirtir.
// Bu dosya, bir kaydırıcı bileşeninin rayı, izi ve başlığının görünümünü belirleyerek kaydırıcıyı özelleştirmek için kullanılır.

// Material Dashboard 2 React base styles
import colors from "assets/theme/base/colors";
import borders from "assets/theme/base/borders";
import boxShadows from "assets/theme/base/boxShadows";

// Material Dashboard 2 React helper functions
import pxToRem from "assets/theme/functions/pxToRem";

const { grey, white, black, info } = colors;
const { borderRadius, borderWidth } = borders;
const { sliderBoxShadow } = boxShadows;

const slider = {
  styleOverrides: {
    root: {
      width: "100%",

      "& .MuiSlider-active, & .Mui-focusVisible": {
        boxShadow: "none !important",
      },

      "& .MuiSlider-valueLabel": {
        color: black.main,
      },
    },

    rail: {
      height: pxToRem(2),
      background: grey[200],
      borderRadius: borderRadius.sm,
      opacity: 1,
    },

    track: {
      background: info.main,
      height: pxToRem(2),
      position: "relative",
      border: "none",
      borderRadius: borderRadius.lg,
      zIndex: 1,
    },

    thumb: {
      width: pxToRem(14),
      height: pxToRem(14),
      backgroundColor: white.main,
      zIndex: 10,
      boxShadow: sliderBoxShadow.thumb,
      border: `${borderWidth[1]} solid ${info.main}`,

      "&:hover": {
        boxShadow: "none",
      },
    },
  },
};

export default slider;
