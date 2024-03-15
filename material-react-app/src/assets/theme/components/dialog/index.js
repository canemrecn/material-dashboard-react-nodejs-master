// Bu dosya birkaç farklı amaca hizmet ediyor:

// Ürün Bilgileri ve Lisans Bilgileri: Creative Tim tarafından geliştirilen ve sunulan "Material Dashboard 2 React" ürününün sürüm bilgisini ve lisans koşullarını içerir. Ürünün web sayfasına ve Creative Tim'in web sitesine yönlendirme bağlantıları da sağlanmıştır.

// Telif Hakkı Bilgileri: Creative Tim'e ait olan ürünün telif hakkı bilgilerini içerir. Yazılımın kopyalarında ve bu yazılımdan türetilen çalışmalarda bu telif hakkı bildiriminin ve izin bildiriminin bulunması gerektiğini belirtir.

// Kodlayan Bilgisi: Ürünün kodlayıcısını belirtir ve Creative Tim web sitesine yönlendirme bağlantısı sağlar.

// Bu dosya, yazılımın lisansı ve telif hakkı bilgilerini kullanıcıya iletmek için kullanılır ve yazılımın telif hakkı sahibinin haklarını korur.

// Material Dashboard 2 React base styles
import borders from "assets/theme/base/borders";
import boxShadows from "assets/theme/base/boxShadows";

const { borderRadius } = borders;
const { xxl } = boxShadows;

const dialog = {
  styleOverrides: {
    paper: {
      borderRadius: borderRadius.lg,
      boxShadow: xxl,
    },

    paperFullScreen: {
      borderRadius: 0,
    },
  },
};

export default dialog;
