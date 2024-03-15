
// Bu dosya, ikon düğmesi (icon button) bileşeninin stillerini belirler. İçeriği incelendiğinde:

// colors modülünden gelen renklerle ilgili değişkenleri alır. Burada sadece transparent rengi kullanılır.

// iconButton nesnesi, ikon düğmesi bileşeninin farklı durumları için stilleri içerir:

// root: İkon düğmesinin kök elementi için stil ayarlarını içerir. Bu stil, düğmenin üzerine gelindiğinde arka planın saydam hale getirilmesini sağlar. Böylece kullanıcılar, düğmeyi hover ederken arka plandaki rengi görebilirler.
// Bu dosya, ikon düğmelerinin genel davranışını özelleştirmek için kullanılır. Bu örnekte, düğmenin hover durumunda arka plan renginin saydam olması sağlanmıştır.
// Material Dashboard 2 React Base Styles
import colors from "assets/theme-dark/base/colors";

const { transparent } = colors;

const iconButton = {
  styleOverrides: {
    root: {
      "&:hover": {
        backgroundColor: transparent.main,
      },
    },
  },
};

export default iconButton;
