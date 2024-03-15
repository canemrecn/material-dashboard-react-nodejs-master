// Bu kod bir MDButton bileşeni oluşturur. Bu bileşen, bir düğme öğesini temsil eder ve belirli özelliklere sahip olabilir.

// Bileşen, aşağıdaki özellikleri alır:

// color: Düğmenin rengi (örneğin, "primary", "secondary", "info", "success", "warning", "error", "light", "dark").
// variant: Düğmenin görünümü ("text", "contained", "outlined", "gradient").
// size: Düğmenin boyutu ("small", "medium", "large").
// circular: Düğmenin dairesel olup olmadığı (boolean).
// iconOnly: Düğmenin yalnızca bir simge içerip içermediği (boolean).
// children: Düğme içeriği (düğme metni veya simgesi).
// Bu özellikler, bileşenin görünümünü belirler ve bileşenin MDButtonRoot bileşenine aktarılır.

// Ayrıca, bileşen, MUI'nin forwardRef fonksiyonunu kullanarak ref özelliğini yönlendirir. Bu, bileşenin dışa aktarılması durumunda, dışarıdan gelen ref özelliklerini almasını sağlar.

// Bileşen, useMaterialUIController hook'unu kullanarak MUI teması için bir kontrolcü alır. Bu kontrolcü, bileşenin darkMode özelliğini içerir ve bileşenin koyu modda mı yoksa normal modda mı olduğunu belirler.

// Sonuç olarak, bu bileşen, belirli özelliklere sahip özelleştirilebilir düğmeler oluşturur ve MUI temasının kontrolcüsünü kullanarak tema uyumluluğunu sağlar.

import { forwardRef } from "react";

// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

// Custom styles for MDButton
import MDButtonRoot from "components/MDButton/MDButtonRoot";

// Material Dashboard 2 React contexts
import { useMaterialUIController } from "context";

const MDButton = forwardRef(
  ({ color, variant, size, circular, iconOnly, children, ...rest }, ref) => {
    const [controller] = useMaterialUIController();
    const { darkMode } = controller;

    return (
      <MDButtonRoot
        {...rest}
        ref={ref}
        color="primary"
        variant={variant === "gradient" ? "contained" : variant}
        size={size}
        ownerState={{ color, variant, size, circular, iconOnly, darkMode }}
      >
        {children}
      </MDButtonRoot>
    );
  }
);

// Setting default values for the props of MDButton
MDButton.defaultProps = {
  size: "medium",
  variant: "contained",
  color: "white",
  circular: false,
  iconOnly: false,
};

// Typechecking props for the MDButton
MDButton.propTypes = {
  size: PropTypes.oneOf(["small", "medium", "large"]),
  variant: PropTypes.oneOf(["text", "contained", "outlined", "gradient"]),
  color: PropTypes.oneOf([
    "white",
    "primary",
    "secondary",
    "info",
    "success",
    "warning",
    "error",
    "light",
    "dark",
  ]),
  circular: PropTypes.bool,
  iconOnly: PropTypes.bool,
  children: PropTypes.node.isRequired,
};

export default MDButton;
