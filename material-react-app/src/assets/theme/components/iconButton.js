
// Bu dosya, ikon düğmesi (IconButton) bileşeninin varsayılan özelliklerini ve üzerine gelindiğindeki davranışını özelleştiren stil aşamalarını içerir.

// İlk olarak, colors modülünden transparent renk alınır. Bu renk, saydam bir arka plan için kullanılacaktır.

// Daha sonra, iconButton objesi içinde, IconButton bileşeninin stilini özelleştiren styleOverrides belirtilir:

// root: IconButton bileşeninin kök elementi için stil tanımları yapılır.
// &:hover: Fare bu elementin üzerine geldiğinde uygulanacak stil tanımlanır. Burada, arka plan renginin saydam olmasını sağlamak için transparent.main kullanılır.
// Bu stil tanımları, IconButton bileşeninin üzerine gelindiğinde arka plan renginin saydam hale gelmesini sağlar, böylece daha etkileşimli bir kullanıcı deneyimi sağlanır.

// Material Dashboard 2 React Base Styles
import colors from "assets/theme/base/colors";

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
