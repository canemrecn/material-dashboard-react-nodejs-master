
// Bu kod, bir sayfalama bileşeni oluşturur ve MUI (Material-UI) bileşenlerini kullanır.

// MDPagination bileşeni, sayfalama öğelerini içeren bir konteyner oluşturur. Sayfalama öğeleri, sayfalama işlevselliğini temsil eden düğmeler veya diğer UI öğeleridir. Bileşen, aşağıdaki özelliklere sahiptir:

// item: Sayfalama öğesi mi yoksa konteyner mi olduğunu belirten bir Boolean değer. Varsayılan değeri false'dur.
// variant: Sayfalama öğelerinin görünümünü belirten bir değer. gradient veya contained olabilir. Varsayılan değeri gradient'tir.
// color: Sayfalama öğelerinin rengini belirten bir değer. Varsayılan değeri info'dur.
// size: Sayfalama öğelerinin boyutunu belirten bir değer. small, medium veya large olabilir. Varsayılan değeri medium'tur.
// active: Sayfalama öğesinin aktif olup olmadığını belirten bir Boolean değer. Varsayılan değeri false'dur.
// children: Sayfalama öğelerini içeren bileşenler veya öğeler.
// Bileşen, item özelliğine bağlı olarak iki farklı görünüme sahiptir. item özelliği true ise, bir sayfalama öğesi oluşturulur ve MDPaginationItemRoot bileşeni kullanılır. item özelliği false ise, bir konteyner oluşturulur ve MDBox bileşeni kullanılır.

// MDPaginationItemRoot bileşeni, sayfalama öğelerinin görünümünü ve davranışını kontrol eder. Özellikle, variant ve color özelliklerine bağlı olarak görünümünü ayarlar. MDBox bileşeni, sayfalama öğelerini içeren bir konteyner oluşturur.

// Bileşen, styled fonksiyonu kullanılarak özelleştirilir ve içinde bir Context.Provider bileşeni bulunur. Bu bağlam, MDPaginationItemRoot bileşenine aktarılır ve sayfalama öğelerinin boyutunu ayarlamak için kullanılır.

// Son olarak, MDPagination bileşeni için defaultProps ve propTypes tanımlanır. Bu, bileşenin varsayılan özellik değerlerini ve tip kontrolünü sağlar.

import { forwardRef, createContext, useContext, useMemo } from "react";

// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";

// Custom styles for MDPagination
import MDPaginationItemRoot from "components/MDPagination/MDPaginationItemRoot";

// The Pagination main context
const Context = createContext();

const MDPagination = forwardRef(
  ({ item, variant, color, size, active, children, ...rest }, ref) => {
    const context = useContext(Context);
    const paginationSize = context ? context.size : null;

    const value = useMemo(() => ({ variant, color, size }), [variant, color, size]);

    return (
      <Context.Provider value={value}>
        {item ? (
          <MDPaginationItemRoot
            {...rest}
            ref={ref}
            variant={active ? context.variant : "outlined"}
            color={active ? context.color : "secondary"}
            iconOnly
            circular
            ownerState={{ variant, active, paginationSize }}
          >
            {children}
          </MDPaginationItemRoot>
        ) : (
          <MDBox
            display="flex"
            justifyContent="flex-end"
            alignItems="center"
            sx={{ listStyle: "none" }}
          >
            {children}
          </MDBox>
        )}
      </Context.Provider>
    );
  }
);

// Setting default values for the props of MDPagination
MDPagination.defaultProps = {
  item: false,
  variant: "gradient",
  color: "info",
  size: "medium",
  active: false,
};

// Typechecking props for the MDPagination
MDPagination.propTypes = {
  item: PropTypes.bool,
  variant: PropTypes.oneOf(["gradient", "contained"]),
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
  size: PropTypes.oneOf(["small", "medium", "large"]),
  active: PropTypes.bool,
  children: PropTypes.node.isRequired,
};

export default MDPagination;
