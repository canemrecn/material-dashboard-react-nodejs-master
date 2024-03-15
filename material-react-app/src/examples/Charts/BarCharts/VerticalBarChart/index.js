// Bu VerticalBarChart bileşeni, dikey çubuk grafiklerini oluşturmak için kullanılır. Aşağıdaki özelliklere sahiptir:

// icon: İsteğe bağlı bir özellik. Grafik başlığı veya açıklamasının yanında bir simge görüntülemek için kullanılır.
// color: Simge rengini belirler.
// component: Görüntülenecek simgeyi belirler.
// title: Grafik başlığını belirtir.
// description: Grafik açıklamasını belirtir.
// height: Grafik bileşeninin yüksekliğini belirtir. Varsayılan değeri 19.125rem olarak ayarlanmıştır.
// chart: Grafik verilerini ve yapılandırmasını içerir. Bu, labels ve datasets olmak üzere iki ana özelliğe sahip bir nesnedir.
// labels: Grafikte kullanılacak etiketlerin listesini içerir.
// datasets: Grafikte gösterilecek veri setlerini içerir. Her veri seti aşağıdaki özelliklere sahip bir nesne olmalıdır:
// label: Veri seti için etiket.
// Diğer özellikler grafikteki çubukların görünümünü yapılandırmak için kullanılır.
// Bileşen, Chart bileşenini kullanarak grafikleri oluşturur ve görünümünü yapılandırmak için configs fonksiyonunu kullanır. Bu fonksiyon, grafik yapılandırmasını oluşturmak için grafik etiketleri ve veri setlerini alır.

// Sonuç olarak, VerticalBarChart bileşeni, dikey çubuk grafiklerini göstermek için kullanılan bir bileşendir. Bu bileşen, kullanıcıya grafik başlığı, açıklaması, isteğe bağlı bir simge ve grafik görüntüsü sağlar.

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

// VerticalBarChart configurations
import configs from "examples/Charts/BarCharts/VerticalBarChart/configs";

// Material Dashboard 2 React base styles
import colors from "assets/theme/base/colors";

function VerticalBarChart({ icon, title, description, height, chart }) {
  const chartDatasets = chart.datasets
    ? chart.datasets.map((dataset) => ({
        ...dataset,
        weight: 5,
        borderWidth: 0,
        borderRadius: 4,
        backgroundColor: colors[dataset.color]
          ? colors[dataset.color || "dark"].main
          : colors.dark.main,
        fill: false,
        maxBarThickness: 35,
      }))
    : [];

  const { data, options } = configs(chart.labels || [], chartDatasets);

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
          <MDBox height={height}>
            <Chart type="bar" data={data} options={options} />
          </MDBox>
        ),
        [chart, height]
      )}
    </MDBox>
  );

  return title || description ? <Card>{renderChart}</Card> : renderChart;
}

// Setting default values for the props of VerticalBarChart
VerticalBarChart.defaultProps = {
  icon: { color: "info", component: "" },
  title: "",
  description: "",
  height: "19.125rem",
};

// Typechecking props for the VerticalBarChart
VerticalBarChart.propTypes = {
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
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  chart: PropTypes.objectOf(PropTypes.array).isRequired,
};

export default VerticalBarChart;
