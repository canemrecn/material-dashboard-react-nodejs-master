// Bu kod, basit bir blog kartı bileşeni (SimpleBlogCard) sağlar. Bu kart, bir resim, bir başlık, bir açıklama ve bir eylem içerir.

// Kart, @mui/material kütüphanesinden Card bileşenini kullanarak oluşturulur. Resim ve diğer içerikler bu kartın içine yerleştirilir.

// Resim, başlık ve açıklama, bileşenin giriş özellikleri olarak alınır ve kartın içeriğini oluşturmak için kullanılır.

// Eylem, bir obje olarak alınır ve aşağıdaki özelliklere sahip olmalıdır:

// type: Eylemin tipi, "external" (harici) veya "internal" (dahili) olabilir.
// route: Eylemin yönlendirileceği rotanın URL'si.
// color: Eylem düğmesinin rengi. Opsiyonel bir değerdir ve belirtilmezse "dark" olarak varsayılır.
// label: Eylem düğmesinin metni.
// Eylem tipi "external" ise, düğme MuiLink bileşeni ile dış bağlantı olarak oluşturulur ve href özelliği kullanılarak harici bir bağlantıya yönlendirilir. Eylem tipi "internal" ise, düğme react-router-dom kütüphanesinden Link bileşeni ile iç bağlantı olarak oluşturulur ve to özelliği kullanılarak iç bir rotaya yönlendirilir.

// Bileşenin propTypes özelliği, girişlerin doğrulanmasını sağlar, böylece bileşen doğru şekilde kullanılabilir.

// react-router components
import { Link } from "react-router-dom";

// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

// @mui material components
import Card from "@mui/material/Card";
import MuiLink from "@mui/material/Link";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDButton from "components/MDButton";

function SimpleBlogCard({ image, title, description, action }) {
  return (
    <Card>
      <MDBox position="relative" borderRadius="lg" mt={-3} mx={2}>
        <MDBox
          component="img"
          src={image}
          alt={title}
          borderRadius="lg"
          shadow="md"
          width="100%"
          height="100%"
          position="relative"
          zIndex={1}
        />
        <MDBox
          borderRadius="lg"
          shadow="md"
          width="100%"
          height="100%"
          position="absolute"
          left={0}
          top="3%"
          sx={{
            backgroundImage: `url(${image})`,
            transform: "scale(0.94)",
            filter: "blur(12px)",
            backgroundSize: "cover",
          }}
        />
      </MDBox>
      <MDBox p={3}>
        <MDTypography display="inline" variant="h3" textTransform="capitalize" fontWeight="bold">
          {title}
        </MDTypography>
        <MDBox mt={2} mb={3}>
          <MDTypography variant="body2" component="p" color="text">
            {description}
          </MDTypography>
        </MDBox>
        {action.type === "external" ? (
          <MuiLink href={action.route} target="_blank" rel="noreferrer">
            <MDButton color={action.color ? action.color : "dark"}>{action.label}</MDButton>
          </MuiLink>
        ) : (
          <Link to={action.route}>
            <MDButton color={action.color ? action.color : "dark"}>{action.label}</MDButton>
          </Link>
        )}
      </MDBox>
    </Card>
  );
}

// Typechecking props for the SimpleBlogCard
SimpleBlogCard.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  action: PropTypes.shape({
    type: PropTypes.oneOf(["external", "internal"]).isRequired,
    route: PropTypes.string.isRequired,
    color: PropTypes.oneOf([
      "primary",
      "secondary",
      "info",
      "success",
      "warning",
      "error",
      "dark",
      "light",
      "default",
    ]),
    label: PropTypes.string.isRequired,
  }).isRequired,
};

export default SimpleBlogCard;
