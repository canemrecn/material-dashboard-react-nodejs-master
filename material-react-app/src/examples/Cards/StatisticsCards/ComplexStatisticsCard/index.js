
// Bu kod, karmaşık istatistik kartı bileşeni (ComplexStatisticsCard) tanımlar. Bu bileşen, bir istatistik kartını temsil eder ve bir başlık, bir sayı, bir yüzde, ve bir ikon içerir.

// Bileşen, @mui/material kütüphanesinden Card, Divider ve Icon bileşenlerini kullanarak oluşturulur. Ardından, içeriği MDBox ve MDTypography bileşenleri kullanılarak düzenlenir ve stilize edilir.

// Bileşen, aşağıdaki özelliklere sahiptir:

// color: Kartın arka plan rengini belirler. Varsayılan değer "info" dur. Mümkün olan renk seçenekleri: "primary", "secondary", "info", "success", "warning", "error", "light", "dark".
// title: Kartın başlığını belirler. Zorunlu bir dizedir.
// count: Kartın sayısal değerini belirler. Zorunlu bir sayı veya dize değeridir.
// percentage: Kartın yüzdesini belirler. Bu özellik bir nesne olarak tanımlanır ve içinde color, amount ve label özellikleri bulunur. color özelliği yüzde rengini belirler. amount özelliği yüzde miktarını belirler. label özelliği yüzde etiketini belirler. Varsayılan olarak, color özelliği "success" ve diğerleri boştur.
// icon: Kartın ikonunu belirler. Zorunlu bir bileşen veya elemandır.
// Bu bileşenin propTypes özelliği, girişlerin doğrulanmasını sağlar, böylece bileşen doğru şekilde kullanılabilir.
// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

// @mui material components
import Card from "@mui/material/Card";
import Divider from "@mui/material/Divider";
import Icon from "@mui/material/Icon";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

function ComplexStatisticsCard({ color, title, count, percentage, icon }) {
  return (
    <Card>
      <MDBox display="flex" justifyContent="space-between" pt={1} px={2}>
        <MDBox
          variant="gradient"
          bgColor={color}
          color={color === "light" ? "dark" : "white"}
          coloredShadow={color}
          borderRadius="xl"
          display="flex"
          justifyContent="center"
          alignItems="center"
          width="4rem"
          height="4rem"
          mt={-3}
        >
          <Icon fontSize="medium" color="inherit">
            {icon}
          </Icon>
        </MDBox>
        <MDBox textAlign="right" lineHeight={1.25}>
          <MDTypography variant="button" fontWeight="light" color="text">
            {title}
          </MDTypography>
          <MDTypography variant="h4">{count}</MDTypography>
        </MDBox>
      </MDBox>
      <Divider />
      <MDBox pb={2} px={2}>
        <MDTypography component="p" variant="button" color="text" display="flex">
          <MDTypography
            component="span"
            variant="button"
            fontWeight="bold"
            color={percentage.color}
          >
            {percentage.amount}
          </MDTypography>
          &nbsp;{percentage.label}
        </MDTypography>
      </MDBox>
    </Card>
  );
}

// Setting default values for the props of ComplexStatisticsCard
ComplexStatisticsCard.defaultProps = {
  color: "info",
  percentage: {
    color: "success",
    text: "",
    label: "",
  },
};

// Typechecking props for the ComplexStatisticsCard
ComplexStatisticsCard.propTypes = {
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
  title: PropTypes.string.isRequired,
  count: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  percentage: PropTypes.shape({
    color: PropTypes.oneOf([
      "primary",
      "secondary",
      "info",
      "success",
      "warning",
      "error",
      "dark",
      "white",
    ]),
    amount: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    label: PropTypes.string,
  }),
  icon: PropTypes.node.isRequired,
};

export default ComplexStatisticsCard;
