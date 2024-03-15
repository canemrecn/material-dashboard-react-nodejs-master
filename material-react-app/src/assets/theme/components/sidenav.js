// Bu stil dosyası, bir yan menü (sidenav) bileşeninin görünümünü özelleştiren stilleri içerir.

// styleOverrides özelliği altında, root, paper ve paperAnchorDockedLeft stilleri tanımlanır:

// root: Yan menü bileşeninin kök elementi için stil tanımları yapılır. width özelliği pxToRem(250) değeri ile belirlenerek yan menünün genişliği ayarlanır. whiteSpace özelliği "nowrap" değeri ile belirlenerek metinlerin satır sonuna gelince kesilmesi sağlanır. border özelliği "none" olarak belirlenerek kenarlık oluşturulması engellenir.

// paper: Yan menünün içeriğinin bulunduğu kağıt (paper) kısmı için stil tanımları yapılır. width özelliği pxToRem(250) değeri ile belirlenerek kağıdın genişliği ayarlanır. backgroundColor özelliği white.main değeri ile belirlenerek arka plan rengi beyaz olarak ayarlanır. height özelliği, calc() fonksiyonu kullanılarak %100'lik görünür pencere yüksekliğinden (100vh) pxToRem(32)piksellik bir boşluk çıkarılarak belirlenir.marginözelliğipxToRem(16)değeri ile belirlenerek kenar boşlukları ayarlanır.borderRadiusözelliğiborderRadius.xldeğeri ile belirlenerek köşe yuvarlanma yarıçapı ayarlanır.border` özelliği "none" olarak belirlenerek kenarlık oluşturulması engellenir.

// paperAnchorDockedLeft: Kağıdın sol kenarı sabitlendiğinde stil tanımları yapılır. borderRight özelliği "none" olarak belirlenerek sağ kenarlık oluşturulması engellenir.

// Bu stil tanımları, yan menü bileşeninin istenilen şekilde görüntülenmesini sağlar.

// Material Dashboard 2 React base styles
import colors from "assets/theme/base/colors";
import borders from "assets/theme/base/borders";

// Material Dashboard 2 React helper functions
import pxToRem from "assets/theme/functions/pxToRem";

const { white } = colors;
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
      backgroundColor: white.main,
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
