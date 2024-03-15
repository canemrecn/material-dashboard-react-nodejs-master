
// Bu kod, MDBadge bileşenini oluşturmak için forwardRef kullanır. forwardRef, bileşenin işlevsel bir bileşen olmasını ve bir ref ile çağrılabilmesini sağlar.

// MDBadge bileşeni, MDBadgeRoot bileşenini sarar. MDBadgeRoot, bileşenin görünüm ve davranışını belirleyen kök bileşenidir. MDBadge bileşeni, aşağıdaki özelliklere sahiptir:

// color: Badgenin rengini belirler. Önceden tanımlanmış renklerden birini alır: primary, secondary, info, success, warning, error, light, dark.
// variant: Badge'nin varyantını belirler. gradient veya contained olabilir.
// size: Badge'nin boyutunu belirler. xs, sm, md, lg boyutlarından birini alır.
// circular: Badge'nin kenarlarını yuvarlamak için bir boolean değer alır.
// indicator: Badge'nin bir gösterge içerip içermediğini belirler.
// border: Badge etrafında bir kenarlık olup olmadığını belirler.
// container: Badge'nin bir konteyner içinde olup olmadığını belirler.
// children: Badge'nin içeriğini oluşturan bileşenler.
// MDBadge bileşeni, yukarıdaki özelliklere sahip olmakla birlikte, bu özelliklerin varsayılan değerlerini de belirler. Örneğin, color özelliği için varsayılan değer info olarak ayarlanır. Ayrıca, MDBadge bileşeni, MDBadgeRoot bileşenine ilgili özellikleri ve çocukları aktarır. Bu sayede MDBadgeRoot bileşeni, MDBadge bileşeninin belirttiği özelliklere göre davranışını değiştirebilir.

import { forwardRef } from "react";

// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

// Custom styles for the MDBadge
import MDBadgeRoot from "components/MDBadge/MDBadgeRoot";

const MDBadge = forwardRef(
  ({ color, variant, size, circular, indicator, border, container, children, ...rest }, ref) => (
    <MDBadgeRoot
      {...rest}
      ownerState={{ color, variant, size, circular, indicator, border, container, children }}
      ref={ref}
      color="default"
    >
      {children}
    </MDBadgeRoot>
  )
);

// Setting default values for the props of MDBadge
MDBadge.defaultProps = {
  color: "info",
  variant: "gradient",
  size: "sm",
  circular: false,
  indicator: false,
  border: false,
  children: false,
  container: false,
};

// Typechecking props of the MDBadge
MDBadge.propTypes = {
  color: PropTypes.oneOf([
    "primary",
    "secondary",
    "info",
    "success",
    "warning",
    "error",
    "light",
    "dark",
  ]),
  variant: PropTypes.oneOf(["gradient", "contained"]),
  size: PropTypes.oneOf(["xs", "sm", "md", "lg"]),
  circular: PropTypes.bool,
  indicator: PropTypes.bool,
  border: PropTypes.bool,
  children: PropTypes.node,
  container: PropTypes.bool,
};

export default MDBadge;
