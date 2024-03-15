
//Bu dosya, kart bileşeninin kök öğesinin stilini belirlemek için geçersiz kılma bilgilerini içerir.

//card nesnesi, kart bileşeninin kök öğesinin stilini değiştirmek için styleOverrides özelliğini içerir. Bu özellik altında, kart bileşeninin kök öğesi (root) için stil değişiklikleri bulunur.

//root: Kart bileşeninin kök öğesinin stilini tanımlar. Bu özellik, kart bileşeninin genel görünümünü ve davranışını ayarlamak için kullanılır. Örneğin, kartın bir kasa (container) olarak nasıl davranacağını (display: flex; flex-direction: column;), arka plan rengini (backgroundColor), kenarlık rengini ve kalınlığını (border), köşe yuvarlaklığını (borderRadius), gölge efektini (boxShadow), taşma davranışını (overflow) ve daha fazlasını belirler.
//Bu stil geçersiz kılmalar, kart bileşeninin genel görünümünü ve davranışını belirleyerek kullanıcı arayüzünde tutarlılık sağlamak için kullanılır.

// Material Dashboard 2 React Base Styles
import colors from "assets/theme/base/colors";
import borders from "assets/theme/base/borders";
import boxShadows from "assets/theme/base/boxShadows";

// Material Dashboard 2 React Helper Function
import rgba from "assets/theme/functions/rgba";

const { black, white } = colors;
const { borderWidth, borderRadius } = borders;
const { md } = boxShadows;

const card = {
  styleOverrides: {
    root: {
      display: "flex",
      flexDirection: "column",
      position: "relative",
      minWidth: 0,
      wordWrap: "break-word",
      backgroundColor: white.main,
      backgroundClip: "border-box",
      border: `${borderWidth[0]} solid ${rgba(black.main, 0.125)}`,
      borderRadius: borderRadius.xl,
      boxShadow: md,
      overflow: "visible",
    },
  },
};

export default card;
