//Bu dosya, bir düğme bileşeninin temel (root) stilini tanımlar. Bu temel stil, düğmelerin genel görünümünü belirler.

//root nesnesi, düğmelerin şu özelliklerini içerir:

//display, justifyContent ve alignItems: Düğmenin içeriğini düzenleme ve hizalama yöntemleri.
//fontSize: Düğme metninin boyutu.
//fontWeight: Düğme metninin kalınlığı.
//borderRadius: Düğme kenarlarının yuvarlaklık derecesi.
//padding: Düğme içeriğinin kenarlardan içeriye olan mesafesi.
//lineHeight: Düğme içeriğinin satır yüksekliği.
//textAlign: Düğme içeriğinin yatay hizalaması.
//textTransform: Düğme metninin büyük harfe dönüştürülme biçimi.
//userSelect: Kullanıcının düğmeyi seçme yetkisi.
//backgroundSize ve backgroundPositionX: Arkaplan görüntüsünün boyutu ve konumu.
//transition: Düğme üzerindeki geçiş efektlerini belirleyen özellik.
//Ayrıca, &:disabled pseudo-class ile devre dışı bırakılmış durumunun stilini tanımlar ve içindeki materyal ikonlarının boyutunu ve konumunu ayarlar.

//Bu stil dosyası, uygulamadaki düğme bileşenlerinin genel görünümünü tutarlı bir şekilde yönetmek için kullanılır.

// Material Dashboard 2 React Base Styles
import typography from "assets/theme/base/typography";
import borders from "assets/theme/base/borders";

// Material Dashboard 2 React Helper Functions
import pxToRem from "assets/theme/functions/pxToRem";

const { fontWeightBold, size } = typography;
const { borderRadius } = borders;

const root = {
  display: "inline-flex",
  justifyContent: "center",
  alignItems: "center",
  fontSize: size.xs,
  fontWeight: fontWeightBold,
  borderRadius: borderRadius.lg,
  padding: `${pxToRem(6.302)} ${pxToRem(16.604)}`,
  lineHeight: 1.4,
  textAlign: "center",
  textTransform: "uppercase",
  userSelect: "none",
  backgroundSize: "150% !important",
  backgroundPositionX: "25% !important",
  transition: "all 150ms ease-in",

  "&:disabled": {
    pointerEvent: "none",
    opacity: 0.65,
  },

  "& .material-icons": {
    fontSize: pxToRem(15),
    marginTop: pxToRem(-2),
  },
};

export default root;
