
// Bu dosya, popover bileşeninin stillerini belirler. İçeriği incelendiğinde:

// popover nesnesi, popover bileşeninin görünümünü belirler.
// paper: Popover'ın içeriğini oluşturan kağıt bileşeninin stillerini belirtir.
// backgroundColor: Popover'ın arka plan rengini belirler. Burada, transparent.main kullanılarak popover'ın arka planının tamamen saydam olduğu belirtilmiştir.
// boxShadow: Popover'a bir gölge efekti ekler. md değeri, orta büyüklükte bir gölge efekti sağlar.
// padding: Popover içeriğinin kenar boşluklarını belirler. pxToRem(8) kullanılarak 8 piksel boşluk sağlanmıştır.
// borderRadius: Popover'ın kenar yuvarlaklığını belirler. borderRadius.md değeri, orta büyüklükte bir kenar yuvarlaklığı sağlar.
// Bu dosya, popover bileşeninin arka plan rengi, gölge efekti, içerik kenar boşlukları ve kenar yuvarlaklığı gibi stil özelliklerini belirleyerek popover'ı özelleştirmek için kullanılır.

// Material Dashboard 2 React helper functions
import pxToRem from "assets/theme-dark/functions/pxToRem";

// Material Dashboard 2 React base styles
import colors from "assets/theme-dark/base/colors";
import boxShadows from "assets/theme-dark/base/boxShadows";
import borders from "assets/theme-dark/base/borders";

const { transparent } = colors;
const { md } = boxShadows;
const { borderRadius } = borders;

const popover = {
  styleOverrides: {
    paper: {
      backgroundColor: transparent.main,
      boxShadow: md,
      padding: pxToRem(8),
      borderRadius: borderRadius.md,
    },
  },
};

export default popover;
