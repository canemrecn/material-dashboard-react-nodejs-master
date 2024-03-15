// Bu kod, varsayılan bilgi kartı bileşenini (DefaultInfoCard) tanımlar. Bu bileşen, bir renk, bir simge, bir başlık, bir açıklama ve bir değer içerir.

// Kart, @mui/material kütüphanesinden Card bileşenini kullanarak oluşturulur. İçerik, bir renkli kutu ve metin alanları şeklinde düzenlenir.

// Renkli kutu, MDBox bileşeni kullanılarak oluşturulur ve color özelliğiyle belirtilen renge sahip olur. Bu kutu, simgeyi içerir ve genellikle bir ikonu temsil eder.

// Metin alanları, başlık, açıklama ve değeri göstermek için kullanılır. Başlık, açıklama ve değer MDTypography bileşeni kullanılarak oluşturulur ve ilgili metin özelliklerine sahip olur.

// Kartın alt kısmında, değer alanından sonra bir ayırıcı (Divider) yer alır.

// Bileşenin propTypes özelliği, girişlerin doğrulanmasını sağlar, böylece bileşen doğru şekilde kullanılabilir. Bu doğrulamaya göre:

// color özelliği, belirli bir renk paletinden bir rengi temsil etmelidir.
// icon özelliği, bir ikon bileşeni olmalıdır ve zorunludur.
// title özelliği, bir metin dizesi olmalıdır ve zorunludur.
// description özelliği, isteğe bağlı bir metin dizesi olabilir.
// value özelliği, bir metin dizesi veya sayı olabilir veya boş bir dize olabilir.

// prop-types is library for typechecking of props
import PropTypes from "prop-types";

// @mui material components
import Card from "@mui/material/Card";
import Divider from "@mui/material/Divider";
import Icon from "@mui/material/Icon";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

function DefaultInfoCard({ color, icon, title, description, value }) {
  return (
    <Card>
      <MDBox p={2} mx={3} display="flex" justifyContent="center">
        <MDBox
          display="grid"
          justifyContent="center"
          alignItems="center"
          bgColor={color}
          color="white"
          width="4rem"
          height="4rem"
          shadow="md"
          borderRadius="lg"
          variant="gradient"
        >
          <Icon fontSize="default">{icon}</Icon>
        </MDBox>
      </MDBox>
      <MDBox pb={2} px={2} textAlign="center" lineHeight={1.25}>
        <MDTypography variant="h6" fontWeight="medium" textTransform="capitalize">
          {title}
        </MDTypography>
        {description && (
          <MDTypography variant="caption" color="text" fontWeight="regular">
            {description}
          </MDTypography>
        )}
        {description && !value ? null : <Divider />}
        {value && (
          <MDTypography variant="h5" fontWeight="medium">
            {value}
          </MDTypography>
        )}
      </MDBox>
    </Card>
  );
}

// Setting default values for the props of DefaultInfoCard
DefaultInfoCard.defaultProps = {
  color: "info",
  value: "",
  description: "",
};

// Typechecking props for the DefaultInfoCard
DefaultInfoCard.propTypes = {
  color: PropTypes.oneOf(["primary", "secondary", "info", "success", "warning", "error", "dark"]),
  icon: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default DefaultInfoCard;
