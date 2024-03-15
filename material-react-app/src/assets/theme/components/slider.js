
// Bu stil dosyası, bir kaydırıcı (slider) bileşeninin görünümünü özelleştiren stilleri içerir.

// styleOverrides özelliği altında, root, rail, track ve thumb stilleri tanımlanır:

// root: Slider bileşeninin kök elementi için stil tanımları yapılır. width özelliği "100%" olarak belirlenerek slider'ın genişliği tam ekran genişliğine ayarlanır. .MuiSlider-active ve .Mui-focusVisible altındaki stiller, slider'ın etkileşim durumlarında (aktif ve odaklandığında) gölgelendirme efektini kaldırır. .MuiSlider-valueLabel altındaki stiller, slider'ın değer etiketinin rengini siyah olarak belirler.

// rail: Slider'ın rayı (rail) için stil tanımları yapılır. height özelliği pxToRem(2) değeri ile belirlenerek rayın yüksekliği ayarlanır. background özelliği grey[200] değeri ile belirlenerek arka plan rengi gri tonlarında ayarlanır. borderRadius özelliği borderRadius.sm değeri ile belirlenerek köşe yuvarlanma yarıçapı ayarlanır. opacity özelliği 1 olarak belirlenerek rayın opaklığı ayarlanır.

// track: Slider'ın izi (track) için stil tanımları yapılır. background özelliği info.main değeri ile belirlenerek izin rengi ana renk tonunda ayarlanır. height özelliği pxToRem(2) değeri ile belirlenerek izin yüksekliği ayarlanır. position, border, borderRadius ve zIndex gibi özellikler belirlenerek izin düzeni ve görünürlüğü ayarlanır.

// thumb: Slider'ın başlığı (thumb) için stil tanımları yapılır. width ve height özellikleri pxToRem(14) değeri ile belirlenerek başlık boyutu ayarlanır. backgroundColor özelliği white.main değeri ile belirlenerek başlık arka plan rengi beyaz olarak ayarlanır. zIndex özelliği 10 olarak belirlenerek başlığın diğer elementlerin önünde olmasını sağlar. boxShadow özelliği sliderBoxShadow.thumb ile atanarak başlığın gölge efekti ayarlanır. border özelliği, başlığın kenarlık rengini ve kalınlığını belirler. transition özelliği ile başlığın animasyonlu davranışı tanımlanır. &:hover ile başlık fare üzerine geldiğindeki davranışı, &:active ile başlık tıklandığında büyüme efekti, ve .Mui-active ile başlığın aktif olduğu durumlarda gölge efekti belirlenir.

// Bu stil tanımları, slider bileşeninin istenilen şekilde görüntülenmesini sağlar.

// Material Dashboard 2 React base styles
import colors from "assets/theme/base/colors";
import borders from "assets/theme/base/borders";
import boxShadows from "assets/theme/base/boxShadows";

// Material Dashboard 2 React helper functions
import pxToRem from "assets/theme/functions/pxToRem";
import boxShadow from "assets/theme/functions/boxShadow";

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
      transition: "all 200ms linear",

      "&:hover": {
        boxShadow: "none",
      },

      "&:active": {
        transform: "translate(-50%, -50%) scale(1.4)",
      },

      "&.Mui-active": { boxShadow: boxShadow([0, 0], [0, 14], info.main, 0.16) },
    },
  },
};

export default slider;
