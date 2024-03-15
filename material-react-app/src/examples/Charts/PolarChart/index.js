
// Bu PolarChart bileşeni, polar alan grafikleri oluşturmak için tasarlanmıştır.

// Fonksiyonun aldığı parametreler:

// icon: İkon bileşenini temsil eden bir nesne. İkon rengi ve bileşeni içerir.
// title: Grafik başlığı.
// description: Grafik açıklaması.
// chart: Grafik veri setlerini ve etiketlerini içeren bir nesne.
// Fonksiyonun yaptığı işlemler:

// configs fonksiyonunu kullanarak grafik veri setleri ve etiketlerine dayalı olarak veri ve yapılandırma bilgilerini alır.
// Grafik bileşenini oluştururken, başlık, açıklama ve gerektiğinde bir ikon görüntüsü ekler.
// Grafik bileşenini react-chartjs-2 kütüphanesinin Chart bileşeniyle birlikte kullanarak oluşturur.
// Son olarak, bileşeni döndürür.
// Bu bileşen, polar alan grafiklerini oluştururken gerekli veri ve yapılandırmayı sağlar ve bileşenin özelleştirilebilirliğini artırır.

import { useMemo } from "react";

// porp-types is a library for typechecking of props
import PropTypes from "prop-types";

// react-chartjs-2 components
import "chart.js/auto";
import { Chart } from "react-chartjs-2";

// @mui material components
import Card from "@mui/material/Card";
import Icon from "@mui/material/Icon";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

// PolarChart configurations
import configs from "examples/Charts/PolarChart/configs";

function PolarChart({ icon, title, description, chart }) {
  const { data, options } = configs(chart.labels || [], chart.datasets || {});

  const renderChart = (
    <MDBox py={2} pr={2} pl={icon.component ? 1 : 2}>
      {title || description ? (
        <MDBox display="flex" px={description ? 1 : 0} pt={description ? 1 : 0}>
          {icon.component && (
            <MDBox
              width="4rem"
              height="4rem"
              bgColor={icon.color || "info"}
              variant="gradient"
              coloredShadow={icon.color || "info"}
              borderRadius="xl"
              display="flex"
              justifyContent="center"
              alignItems="center"
              color="white"
              mt={-5}
              mr={2}
            >
              <Icon fontSize="medium">{icon.component}</Icon>
            </MDBox>
          )}
          <MDBox mt={icon.component ? -2 : 0}>
            {title && <MDTypography variant="h6">{title}</MDTypography>}
            <MDBox mb={2}>
              <MDTypography component="div" variant="button" color="text">
                {description}
              </MDTypography>
            </MDBox>
          </MDBox>
        </MDBox>
      ) : null}
      {useMemo(
        () => (
          <MDBox p={4}>
            <Chart type="polarArea" data={data} options={options} />
          </MDBox>
        ),
        [chart]
      )}
    </MDBox>
  );

  return title || description ? <Card>{renderChart}</Card> : renderChart;
}

// Setting default values for the props of PolarChart
PolarChart.defaultProps = {
  icon: { color: "info", component: "" },
  title: "",
  description: "",
};

// Typechecking props for the PolarChart
PolarChart.propTypes = {
  icon: PropTypes.shape({
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
    component: PropTypes.node,
  }),
  title: PropTypes.string,
  description: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  chart: PropTypes.objectOf(PropTypes.oneOfType([PropTypes.array, PropTypes.object])).isRequired,
};

export default PolarChart;
