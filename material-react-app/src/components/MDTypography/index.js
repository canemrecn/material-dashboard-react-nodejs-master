// Bu kod, özelleştirilmiş bir MDTypography bileşeni oluşturur. Bu bileşen, metin öğelerini oluşturmak için kullanılır ve bir dizi stil özelliği içerir. Örneğin, metin rengi, font ağırlığı, metin dönüşümü, dikey hizalama ve opaklık gibi özellikler kullanılabilir.

// İçe Aktarmalar:
// forwardRef: Ref ile bileşenlerin ileriye doğru iletilmesini sağlar.
// PropTypes: Props türlerini doğrulamak için kullanılır.
// MDTypographyRoot: Özelleştirilmiş metin bileşeninin kök bileşenini içerir.
// useMaterialUIController: Material Dashboard 2 için temaları ve diğer bileşenleri kontrol etmek için bir kontrollere erişim sağlar.
// MDTypography Bileşeni:
// Props'lar:
// color: Metin rengini belirler.
// fontWeight: Font ağırlığını belirler.
// textTransform: Metin dönüşümünü belirler.
// verticalAlign: Dikey hizalamayı belirler.
// textGradient: Metin üzerine gradyan uygulanıp uygulanmayacağını belirler.
// opacity: Metnin opaklığını belirler.
// children: Bileşenin içeriği.
// Bileşen, props'lar aracılığıyla belirtilen özelliklere göre metin stili uygular.
// MDTypographyRoot bileşeni, bileşenin kök bileşenidir ve belirtilen özelliklere sahip metni oluşturur.
// Bu özel bileşen, uygulamanızın metin ihtiyaçlarına uygun olarak farklı stil özelliklerini kolayca uygulamanıza olanak tanır.

import { forwardRef } from "react";

// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

// Custom styles for MDTypography
import MDTypographyRoot from "components/MDTypography/MDTypographyRoot";

// Material Dashboard 2 React contexts
import { useMaterialUIController } from "context";

const MDTypography = forwardRef(
  (
    { color, fontWeight, textTransform, verticalAlign, textGradient, opacity, children, ...rest },
    ref
  ) => {
    const [controller] = useMaterialUIController();
    const { darkMode } = controller;

    return (
      <MDTypographyRoot
        {...rest}
        ref={ref}
        ownerState={{
          color,
          textTransform,
          verticalAlign,
          fontWeight,
          opacity,
          textGradient,
          darkMode,
        }}
      >
        {children}
      </MDTypographyRoot>
    );
  }
);

// Setting default values for the props of MDTypography
MDTypography.defaultProps = {
  color: "dark",
  fontWeight: false,
  textTransform: "none",
  verticalAlign: "unset",
  textGradient: false,
  opacity: 1,
};

// Typechecking props for the MDTypography
MDTypography.propTypes = {
  color: PropTypes.oneOf([
    "inherit",
    "primary",
    "secondary",
    "info",
    "success",
    "warning",
    "error",
    "light",
    "dark",
    "text",
    "white",
  ]),
  fontWeight: PropTypes.oneOf([false, "light", "regular", "medium", "bold"]),
  textTransform: PropTypes.oneOf(["none", "capitalize", "uppercase", "lowercase"]),
  verticalAlign: PropTypes.oneOf([
    "unset",
    "baseline",
    "sub",
    "super",
    "text-top",
    "text-bottom",
    "middle",
    "top",
    "bottom",
  ]),
  textGradient: PropTypes.bool,
  children: PropTypes.node.isRequired,
  opacity: PropTypes.number,
};

export default MDTypography;
