// Bu kod, bir gradyan çizgi grafiği oluşturan bir bileşen içerir. Bu bileşen, React uygulamalarında kullanılabilir ve kullanıcıya gradyan bir çizgi grafiği sunar. Bileşen, çizgi grafiğinin görünümünü ve davranışını yapılandırmak için bir dizi seçenek sunar.

// Bileşenin içeriği şu şekildedir:

// GradientLineChart: Ana bileşen fonksiyonudur. Bu fonksiyon, gradyan çizgi grafiğini oluşturur ve kullanıcıya sunar.
// useRef, useEffect, useState, useMemo: React kancalarıdır. Bunlar, bileşenin işlevselliğini yönetmek için kullanılır.
// PropTypes: Props türlerini doğrulamak için kullanılan bir kütüphanedir.
// Chart: react-chartjs-2 kütüphanesinden gelen bir bileşendir. Bu bileşen, çizgi grafiğini oluşturur ve görüntüler.
// Card, Icon, MDBox, MDTypography: Malzeme UI bileşenleridir. Bunlar, arayüzün farklı parçalarını oluşturmak için kullanılır.
// configs: Çizgi grafiği yapılandırma ayarlarını içeren bir modüldür. Bu ayarlar, çizgi grafiğinin görünümünü ve davranışını belirler.
// gradientChartLine: Gradyan efektini oluşturan bir fonksiyondur. Bu fonksiyon, çizgi grafiğine gradyan rengi ekler.
// Bu bileşen, kullanıcının belirlediği veri setlerine göre gradyan bir çizgi grafiği oluşturur ve bu grafiği görüntüler. Bileşen, başlık, açıklama ve simge gibi çeşitli özelleştirme seçeneklerine sahiptir.

import { useRef, useEffect, useState, useMemo } from "react";

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

// Material Dashboard 2 React helper functions
import gradientChartLine from "assets/theme/functions/gradientChartLine";

// GradientLineChart configurations
import configs from "examples/Charts/LineCharts/GradientLineChart/configs";

// Material Dashboard 2 React base styles
import colors from "assets/theme/base/colors";

function GradientLineChart({ icon, title, description, height, chart }) {
  const chartRef = useRef(null);
  const [chartData, setChartData] = useState({});
  const { data, options } = chartData;

  useEffect(() => {
    const chartDatasets = chart.datasets
      ? chart.datasets.map((dataset) => ({
          ...dataset,
          tension: 0,
          pointRadius: 0,
          borderWidth: 4,
          borderColor: colors[dataset.color]
            ? colors[dataset.color || "dark"].main
            : colors.dark.main,
          fill: true,
          maxBarThickness: 6,
          backgroundColor: gradientChartLine(
            chartRef.current.children[0],
            colors[dataset.color] ? colors[dataset.color || "dark"].main : colors.dark.main
          ),
        }))
      : [];

    setChartData(configs(chart.labels || [], chartDatasets));
  }, [chart]);

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
          <MDBox ref={chartRef} sx={{ height }}>
            <Chart type="line" data={data} options={options} />
          </MDBox>
        ),
        [chartData, height]
      )}
    </MDBox>
  );

  return title || description ? <Card>{renderChart}</Card> : renderChart;
}

// Setting default values for the props of GradientLineChart
GradientLineChart.defaultProps = {
  icon: { color: "info", component: "" },
  title: "",
  description: "",
  height: "19.125rem",
};

// Typechecking props for the GradientLineChart
GradientLineChart.propTypes = {
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

export default GradientLineChart;
