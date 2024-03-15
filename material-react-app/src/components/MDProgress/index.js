// Bu kod, bir ilerleme çubuğu bileşeni olan MDProgress bileşenini tanımlar. Bu bileşen, bir değeri temsil eden bir ilerleme çubuğunu ve isteğe bağlı bir etiketi içerir.

// Bileşen, forwardRef ile sarma yapıldığı için, ref özelliğini doğrudan yönlendirir ve ilgili özellikleri MDProgressRoot bileşenine aktarır.

// Bir ilerleme çubuğunun değeri (value) ve rengi (color) gibi temel özelliklerin yanı sıra, variant özelliği de belirtilir. variant özelliği, ilerleme çubuğunun türünü belirtir ve "contained" veya "gradient" olabilir.

// Eğer label özelliği true ise, ilerleme çubuğunun üzerinde ilerleme yüzdesini göstermek için bir metin görüntülenir. Bu metin, MDTypography bileşeni kullanılarak oluşturulur.

// MDProgress bileşeninin varsayılan değerleri ve tür denetimi (PropTypes) de belirtilmiştir. Bu, bileşenin kullanımını daha güvenli hale getirir ve geliştiricilere hangi türde değerlerin beklenildiği konusunda rehberlik sağlar.

import { forwardRef } from "react";

// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

// Material Dashboard 2 React components
import MDTypography from "components/MDTypography";

// Custom styles for MDProgress
import MDProgressRoot from "components/MDProgress/MDProgressRoot";

const MDProgress = forwardRef(({ variant, color, value, label, ...rest }, ref) => (
  <>
    {label && (
      <MDTypography variant="button" fontWeight="medium" color="text">
        {value}%
      </MDTypography>
    )}
    <MDProgressRoot
      {...rest}
      ref={ref}
      variant="determinate"
      value={value}
      ownerState={{ color, value, variant }}
    />
  </>
));

// Setting default values for the props of MDProgress
MDProgress.defaultProps = {
  variant: "contained",
  color: "info",
  value: 0,
  label: false,
};

// Typechecking props for the MDProgress
MDProgress.propTypes = {
  variant: PropTypes.oneOf(["contained", "gradient"]),
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
  value: PropTypes.number,
  label: PropTypes.bool,
};

export default MDProgress;
