// Bu kod, bir çizgi grafiği oluşturmak için kullanılan bir bileşenin tanımını içerir. İlgili dosyalardan alınan yapılandırma ayarlarını kullanarak bir çizgi grafiği oluşturur. Bileşen, react-chartjs-2 kütüphanesini kullanarak grafiği oluşturur ve gerekli verileri alır.

// Bileşenin içeriği şu şekildedir:

// DefaultLineChart: Bu bileşen, çizgi grafiği oluşturmak için kullanılır. Giriş olarak bir dizi veri alır ve bu verilere dayalı olarak bir çizgi grafiği oluşturur.
// configs: Bu, çizgi grafiği yapılandırma ayarlarını içeren bir fonksiyon. Bu ayarlar, çizgi grafiğinin görünümünü ve davranışını belirler.
// useMemo: Bu, bileşenin performansını artırmak için kullanılan bir React kancasıdır. Bu kancanın kullanımı, bileşenin sadece gerekli olduğunda yeniden hesaplanmasını sağlar.
// PropTypes: Bu, bileşenin alabileceği props türlerini belirler. Bu, bileşenin doğru şekilde kullanılmasını ve prop tiplerinin doğru olmasını sağlar.
// Card, Icon, MDBox, MDTypography: Bu, bileşenin tasarımında kullanılan bileşenlerdir. Bunlar, bileşenin görünümünü oluşturmak için kullanılır.
// Bileşenin ana görevi, giriş olarak alınan verilere dayalı olarak bir çizgi grafiği oluşturmaktır. Bu çizgi grafiği, bileşenin dışında tanımlanan yapılandırma ayarlarına göre özelleştirilebilir ve belirli bir stil ve davranışla görüntülenir.

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

// DefaultLineChart configurations
import configs from "examples/Charts/LineCharts/DefaultLineChart/configs";

// Material Dashboard 2 React base styles
import colors from "assets/theme/base/colors";

function DefaultLineChart({ icon, title, description, height, chart }) {
  const chartDatasets = chart.datasets
    ? chart.datasets.map((dataset) => ({
        ...dataset,
        tension: 0,
        pointRadius: 3,
        borderWidth: 4,
        backgroundColor: "transparent",
        fill: true,
        pointBackgroundColor: colors[dataset.color]
          ? colors[dataset.color || "dark"].main
          : colors.dark.main,
        borderColor: colors[dataset.color]
          ? colors[dataset.color || "dark"].main
          : colors.dark.main,
        maxBarThickness: 6,
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
            <Chart type="line" data={data} options={options} />
          </MDBox>
        ),
        [chart, height]
      )}
    </MDBox>
  );

  return title || description ? <Card>{renderChart}</Card> : renderChart;
}

// Setting default values for the props of DefaultLineChart
DefaultLineChart.defaultProps = {
  icon: { color: "info", component: "" },
  title: "",
  description: "",
  height: "19.125rem",
};

// Typechecking props for the DefaultLineChart
DefaultLineChart.propTypes = {
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

export default DefaultLineChart;
