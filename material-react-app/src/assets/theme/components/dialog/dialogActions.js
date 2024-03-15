//Bu dosya, diyalog eylemlerinin (dialog actions) kök öğesinin stilini belirlemek için geçersiz kılma bilgilerini içerir.

// dialogActions nesnesi, diyalog bileşeninin eylem bölümünün kök öğesinin stilini değiştirmek için styleOverrides özelliğini içerir. Bu özellik altında, diyalog eylemlerinin kök öğesi için stil değişiklikleri bulunur.

// root: Diyalog eylemlerinin kök öğesinin stilini tanımlar. Bu özellik, diyalog eylemlerinin görünümünü ve düzenini ayarlamak için kullanılır. Örneğin, eylemler bölümünün dolgusunu (padding) belirler.
// Bu stil geçersiz kılmalar, diyalog bileşeninin belirli bir bölümünün görünümünü ve davranışını belirleyerek kullanıcı arayüzünde tutarlılık sağlamak için kullanılır.

// Material Dashboard 2 React helper functions
import pxToRem from "assets/theme/functions/pxToRem";

const dialogActions = {
  styleOverrides: {
    root: {
      padding: pxToRem(16),
    },
  },
};

export default dialogActions;
