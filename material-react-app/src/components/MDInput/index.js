// Bu kod, bir MDInput bileşeni oluşturur. Bu bileşen, MUI (Material-UI) Input bileşenini sarmalayan ve bazı özel stiller ekleyen bir bileşendir.

// Bileşen, aşağıdaki özelliklere sahiptir:

// error: Girilen verinin hatalı olduğunu belirten bir Boolean değer. Varsayılan değeri false'dur.
// success: Girilen verinin başarılı olduğunu belirten bir Boolean değer. Varsayılan değeri false'dur.
// disabled: Girilenin etkin olup olmadığını belirten bir Boolean değer. Varsayılan değeri false'dur.
// rest: Diğer MUI Input bileşeni özelliklerini içeren bir nesnedir.
// ref: Bileşenin referansını alır.
// Bu özelliklere bağlı olarak, MDInputRoot bileşenine ownerState prop'unu iletilir. Bu prop, özel stiller oluşturmak için kullanılır.

// Sonuç olarak, bu bileşen, MUI Input bileşenini genişletir ve error, success ve disabled özelliklerine göre özel stiller uygular. Bu şekilde, uygulamada özelleştirilmiş giriş alanları oluşturulabilir.

import { forwardRef } from "react";

// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

// Custom styles for MDInput
import MDInputRoot from "components/MDInput/MDInputRoot";

const MDInput = forwardRef(({ error, success, disabled, ...rest }, ref) => (
  <MDInputRoot {...rest} ref={ref} ownerState={{ error, success, disabled }} />
));

// Setting default values for the props of MDInput
MDInput.defaultProps = {
  error: false,
  success: false,
  disabled: false,
};

// Typechecking props for the MDInput
MDInput.propTypes = {
  error: PropTypes.bool,
  success: PropTypes.bool,
  disabled: PropTypes.bool,
};

export default MDInput;
