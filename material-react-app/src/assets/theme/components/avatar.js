// Bu dosya, avatar bileşeninin stilini özelleştirir.

// styleOverrides: Bu özellik, avatar bileşeninin farklı kısımlarının stilini özelleştirir.
// root: Avatar bileşeninin kök elementine (root element) uygulanacak stil özelliklerini belirtir. Burada transition özelliği, tüm stil değişikliklerinin 200ms içinde yumuşak bir geçişle gerçekleşmesini sağlar.
// rounded: Avatar bileşeninin kenar yuvarlatma (border radius) stilini belirler. borderRadius.lg değeri, büyük boyutlu bir kenar yuvarlatma uygular.
// img: Avatar içindeki resmin stilini belirler. Burada height özelliği "auto" olarak ayarlanmıştır, böylece resmin yüksekliği otomatik olarak ayarlanır.
// Bu özelleştirmeler, avatar bileşeninin görünümünü belirleyerek uygulamanın genel tasarımını kişiselleştirmek için kullanılabilir.

// Material Dashboard 2 React base styles
import borders from "assets/theme/base/borders";

const { borderRadius } = borders;

const avatar = {
  styleOverrides: {
    root: {
      transition: "all 200ms ease-in-out",
    },

    rounded: {
      borderRadius: borderRadius.lg,
    },

    img: {
      height: "auto",
    },
  },
};

export default avatar;
