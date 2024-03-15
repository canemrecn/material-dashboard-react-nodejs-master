// Bu kod, MDBox bileşenini oluşturmak için forwardRef kullanır. forwardRef, bir bileşene bir ref özelliği iletilmesini sağlar. Bu özellik, bileşenin dışa aktarılmasına olanak tanırken, bileşenin içindeki alt bileşenlere de erişim sağlar.

// MDBox bileşeni, bir kutu olarak düşünülebilir ve aşağıdaki özelliklere sahiptir:

// variant: Kutunun görünümü, "contained" veya "gradient" olabilir.
// bgColor: Kutunun arka plan rengini belirler.
// color: Kutunun metin rengini belirler.
// opacity: Kutunun opaklığını belirler.
// borderRadius: Kutunun kenar yuvarlaklığını belirler.
// shadow: Kutunun gölgesini belirler.
// coloredShadow: Kutunun renkli gölgesini belirler.
// Bu bileşenin propTypes ve defaultProps bölümleri, bileşenin beklenen özelliklerini ve varsayılan değerlerini tanımlar. Bu sayede bileşenin kullanımı sırasında geçerli olması gereken özellikler belirtilir ve gerekirse varsayılan değerler kullanılır.
import { forwardRef } from "react";

// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

// Custom styles for MDBox
import MDBoxRoot from "components/MDBox/MDBoxRoot";

const MDBox = forwardRef(
  ({ variant, bgColor, color, opacity, borderRadius, shadow, coloredShadow, ...rest }, ref) => (
    <MDBoxRoot
      {...rest}
      ref={ref}
      ownerState={{ variant, bgColor, color, opacity, borderRadius, shadow, coloredShadow }}
    />
  )
);

// Setting default values for the props of MDBox
MDBox.defaultProps = {
  variant: "contained",
  bgColor: "transparent",
  color: "dark",
  opacity: 1,
  borderRadius: "none",
  shadow: "none",
  coloredShadow: "none",
};

// Typechecking props for the MDBox
MDBox.propTypes = {
  variant: PropTypes.oneOf(["contained", "gradient"]),
  bgColor: PropTypes.string,
  color: PropTypes.string,
  opacity: PropTypes.number,
  borderRadius: PropTypes.string,
  shadow: PropTypes.string,
  coloredShadow: PropTypes.oneOf([
    "primary",
    "secondary",
    "info",
    "success",
    "warning",
    "error",
    "light",
    "dark",
    "none",
  ]),
};

export default MDBox;
