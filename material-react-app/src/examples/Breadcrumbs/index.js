// Bu kod, bir sayfa veya uygulamanın rotasını temsil eden bir dizi yol adını ve bir başlık bilgisini içeren bir kırıntı bileşeni (Breadcrumbs) sağlar. Bu bileşen, belirli bir sayfanın hiyerarşik konumunu göstermek için kullanılır.

// Bileşen, react-router-dom kütüphanesinden Link bileşenini kullanarak her bir yol adına bir bağlantı oluşturur. Bağlantılar, belirli bir yola yönlendirmek için kullanılır.

// Bileşen, @mui/material kütüphanesinden Breadcrumbs bileşenini kullanarak kırıntıları oluşturur. Bu bileşen, MUI'nin stillendirilmiş bir sürümüdür ve içindeki bileşenleri MUI bileşenleri ile birlikte kullanır.

// Giriş olarak alınan başlık (title) dize olarak kullanılır ve gerektiğinde '-' karakteri boşlukla değiştirilerek düzgün bir başlık oluşturulur.

// Breadcrumbs bileşeninin light özelliği, bileşenin ışıklı bir tema mı yoksa karanlık bir tema mı kullanacağını belirler. Bu, kırıntılar arasındaki ayracın rengini ve metinlerin opaklığını değiştirmek için kullanılır.

// Bileşen, icon (ikon), title (başlık), route (yol), ve opsiyonel olarak light (ışıklı tema kullanılsın mı?) olmak üzere dört özellik alır.

// Breadcrumbs bileşeninin propTypes ve defaultProps özellikleri, girişlerin doğrulanmasını ve varsayılan değerlerin belirlenmesini sağlar, böylece bileşen doğru şekilde kullanılabilir.

// react-router-dom components
import { Link } from "react-router-dom";

// prop-types is a library for typechecking of props.
import PropTypes from "prop-types";

// @mui material components
import { Breadcrumbs as MuiBreadcrumbs } from "@mui/material";
import Icon from "@mui/material/Icon";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

function Breadcrumbs({ icon, title, route, light }) {
  const routes = route.slice(0, -1);

  return (
    <MDBox mr={{ xs: 0, xl: 8 }}>
      <MuiBreadcrumbs
        sx={{
          "& .MuiBreadcrumbs-separator": {
            color: ({ palette: { white, grey } }) => (light ? white.main : grey[600]),
          },
        }}
      >
        <Link to="/">
          <MDTypography
            component="span"
            variant="body2"
            color={light ? "white" : "dark"}
            opacity={light ? 0.8 : 0.5}
            sx={{ lineHeight: 0 }}
          >
            <Icon>{icon}</Icon>
          </MDTypography>
        </Link>
        {routes.map((el) => (
          <Link to={`/${el}`} key={el}>
            <MDTypography
              component="span"
              variant="button"
              fontWeight="regular"
              textTransform="capitalize"
              color={light ? "white" : "dark"}
              opacity={light ? 0.8 : 0.5}
              sx={{ lineHeight: 0 }}
            >
              {el}
            </MDTypography>
          </Link>
        ))}
        <MDTypography
          variant="button"
          fontWeight="regular"
          textTransform="capitalize"
          color={light ? "white" : "dark"}
          sx={{ lineHeight: 0 }}
        >
          {title.replace("-", " ")}
        </MDTypography>
      </MuiBreadcrumbs>
      <MDTypography
        fontWeight="bold"
        textTransform="capitalize"
        variant="h6"
        color={light ? "white" : "dark"}
        noWrap
      >
        {title.replace("-", " ")}
      </MDTypography>
    </MDBox>
  );
}

// Setting default values for the props of Breadcrumbs
Breadcrumbs.defaultProps = {
  light: false,
};

// Typechecking props for the Breadcrumbs
Breadcrumbs.propTypes = {
  icon: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  route: PropTypes.oneOfType([PropTypes.string, PropTypes.array]).isRequired,
  light: PropTypes.bool,
};

export default Breadcrumbs;
