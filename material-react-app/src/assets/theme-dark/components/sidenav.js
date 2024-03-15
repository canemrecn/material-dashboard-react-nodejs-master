
// Bu dosya, yan menü (sidenav) bileşeninin stillerini belirler. İçeriği incelendiğinde:

// sidenav nesnesi, yan menü bileşeninin görünümünü belirler.
// root: Yan menünün kök bileşeninin stillerini belirtir.
// width: Yan menünün genişliğini belirler. pxToRem(250) kullanılarak 250 piksel genişlik sağlanmıştır.
// whiteSpace: İçerikteki boşlukların işlenme biçimini belirler. nowrap değeri, içeriğin satır sonlarına gelindiğinde kesilmesini sağlar.
// border: Yan menünün kenar çizgisini belirler. Burada "none" değeri kullanılarak kenar çizgisi olmadığı belirtilmiştir.
// paper: Yan menünün kağıt bileşeninin stillerini belirtir.
// width: Yan menünün genişliğini belirler. Kök bileşenle aynı değeri alır.
// backgroundColor: Yan menünün arka plan rengini belirler. background.sidenav kullanılarak sidenav bileşeninin arka plan rengi alınmıştır.
// height: Yan menünün yüksekliğini belirler. Burada, sayfa yüksekliğinden (100vh) 32 piksel çıkarılarak yan menünün alt kenar boşluğu sağlanmıştır.
// margin: Yan menünün dış kenar boşluğunu belirler. pxToRem(16) kullanılarak 16 piksel dış kenar boşluğu sağlanmıştır.
// borderRadius: Yan menünün kenar yuvarlaklığını belirler. borderRadius.xl değeri, büyük bir kenar yuvarlaklığı sağlar.
// border: Yan menünün kenar çizgisini belirler. Burada "none" değeri kullanılarak kenar çizgisi olmadığı belirtilmiştir.
// paperAnchorDockedLeft: Yan menünün sol kenarında bir dokunmuş kağıt bulunduğunda (docked) bu kağıt bileşeninin stillerini belirler.
// borderRight: Sol kenarda dokunmuş kağıt bulunduğunda sağ taraftaki kenar çizgisini belirler. "none" değeri kullanılarak kenar çizgisi olmadığı belirtilmiştir.
// Bu dosya, yan menü bileşeninin genişlik, arka plan rengi, yükseklik, kenar yuvarlaklığı ve kenar çizgisi gibi stil özelliklerini belirleyerek yan menüyü özelleştirmek için kullanılır.

// Material Dashboard 2 React base styles
import colors from "assets/theme-dark/base/colors";
import borders from "assets/theme-dark/base/borders";

// Material Dashboard 2 React helper functions
import pxToRem from "assets/theme-dark/functions/pxToRem";

const { background } = colors;
const { borderRadius } = borders;

const sidenav = {
  styleOverrides: {
    root: {
      width: pxToRem(250),
      whiteSpace: "nowrap",
      border: "none",
    },

    paper: {
      width: pxToRem(250),
      backgroundColor: background.sidenav,
      height: `calc(100vh - ${pxToRem(32)})`,
      margin: pxToRem(16),
      borderRadius: borderRadius.xl,
      border: "none",
    },

    paperAnchorDockedLeft: {
      borderRight: "none",
    },
  },
};

export default sidenav;
