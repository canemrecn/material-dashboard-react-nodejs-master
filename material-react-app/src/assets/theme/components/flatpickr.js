
// Bu dosya, bir tarih seçim bileşeni olan Flatpickr bileşeninin özelleştirilmiş görünümünü içerir. Stiller, HTML sınıf seçicileri aracılığıyla tanımlanmıştır.

// Öncelikle, colors objesinden belirli renk değerlerine erişilir:

// info: Flatpickr bileşeninde kullanılan ana renk.
// white: Beyaz renk, metin renkleri için kullanılır.
// gradients: Flatpickr bileşeninde kullanılan gradient renklerini içerir.
// Daha sonra, bileşenin farklı durumları için stil tanımları yapılır:

// .flatpickr-day:hover, .flatpickr-day:focus, .flatpickr-day.nextMonthDay:hover, .flatpickr-day.nextMonthDay:focus: Günlerin üzerine gelindiğinde veya odaklandığında arka plan rengi ve kenarlık belirlenir.
// .flatpickr-day.today: Bugünün rengi ve kenarlık ayarlanır. Ayrıca hover ve odaklanma durumları için stil de tanımlanır.
// .flatpickr-day.selected, .flatpickr-day.selected:hover, .flatpickr-day.nextMonthDay.selected, .flatpickr-day.nextMonthDay.selected:hover, .flatpickr-day.nextMonthDay.selected:focus: Seçili günlerin rengi ve kenarlık ayarlanır.
// .flatpickr-months .flatpickr-next-month:hover svg, .flatpickr-months .flatpickr-prev-month:hover svg: Ay değiştirme oklarının rengi ayarlanır.
// Bu stil tanımları, Flatpickr bileşeninin farklı durumlarına ve etkileşimlerine uygun olarak görünümünü özelleştirmek için kullanılır.

// Material Dashboard 2 React base styles
import colors from "assets/theme/base/colors";

// Material Dashboard 2 React helper functions
import rgba from "assets/theme/functions/rgba";

const { info, white, gradients } = colors;

const flatpickr = {
  ".flatpickr-day:hover, .flatpickr-day:focus, .flatpickr-day.nextMonthDay:hover, .flatpickr-day.nextMonthDay:focus":
    {
      background: rgba(info.main, 0.28),
      border: "none",
    },

  ".flatpickr-day.today": {
    background: info.main,
    color: white.main,
    border: "none",

    "&:hover, &:focus": {
      background: `${info.focus} !important`,
    },
  },

  ".flatpickr-day.selected, .flatpickr-day.selected:hover, .flatpickr-day.nextMonthDay.selected, .flatpickr-day.nextMonthDay.selected:hover, .flatpickr-day.nextMonthDay.selected:focus":
    {
      background: `${gradients.info.state} !important`,
      color: white.main,
      border: "none",
    },

  ".flatpickr-months .flatpickr-next-month:hover svg, .flatpickr-months .flatpickr-prev-month:hover svg":
    {
      color: `${info.main} !important`,
      fill: `${info.main} !important`,
    },
};

export default flatpickr;
