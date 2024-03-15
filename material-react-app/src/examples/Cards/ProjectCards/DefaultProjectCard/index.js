
// Bu kod, bir proje kartı bileşeni (DefaultProjectCard) tanımlar. Bu bileşen, bir proje hakkında bilgileri içeren bir kartı temsil eder.

// Bileşen, bir dizi bilgi alır ve bu bilgileri bir kart olarak stilize ederek görüntüler. Kartta bir resim, bir etiket, bir başlık, bir açıklama, bir eylem ve yazarlar bulunur.

// Kart, @mui/material kütüphanesinden Card ve CardMedia bileşenleri kullanılarak oluşturulur. Ardından, kartın içeriği, MDTypography, MDButton, ve MDBox bileşenleri kullanılarak düzenlenir ve stilize edilir.

// Bileşenin propTypes özelliği, girişlerin doğrulanmasını sağlar, böylece bileşen doğru şekilde kullanılabilir. Bu doğrulamaya göre:

// image özelliği, bir resim URL'si olmalıdır ve zorunludur. Bu özellik, projenin resmini temsil eder.
// label özelliği, bir metin dizesi olmalıdır ve zorunludur. Bu özellik, projenin etiketini temsil eder.
// title özelliği, bir metin dizesi olmalıdır ve zorunludur. Bu özellik, projenin başlığını temsil eder.
// description özelliği, bir metin dizesi olmalıdır ve zorunludur. Bu özellik, projenin açıklamasını temsil eder.
// action özelliği, bir nesne olmalıdır ve zorunludur. Bu nesne, projenin eylemini temsil eder ve içinde type, route, color ve label özellikleri bulunmalıdır.
// authors özelliği, bir dizi olabilir ve isteğe bağlıdır. Bu özellik, projenin yazarlarını temsil eder ve her yazar bir isim ve bir resim içeren bir nesne olmalıdır.

// react-router-dom components
import { Link } from "react-router-dom";

// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

// @mui material components
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Tooltip from "@mui/material/Tooltip";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDButton from "components/MDButton";
import MDAvatar from "components/MDAvatar";

function DefaultProjectCard({ image, label, title, description, action, authors }) {
  const renderAuthors = authors.map(({ image: media, name }) => (
    <Tooltip key={name} title={name} placement="bottom">
      <MDAvatar
        src={media}
        alt={name}
        size="xs"
        sx={({ borders: { borderWidth }, palette: { white } }) => ({
          border: `${borderWidth[2]} solid ${white.main}`,
          cursor: "pointer",
          position: "relative",
          ml: -1.25,

          "&:hover, &:focus": {
            zIndex: "10",
          },
        })}
      />
    </Tooltip>
  ));

  return (
    <Card
      sx={{
        display: "flex",
        flexDirection: "column",
        backgroundColor: "transparent",
        boxShadow: "none",
        overflow: "visible",
      }}
    >
      <MDBox position="relative" width="100.25%" shadow="xl" borderRadius="xl">
        <CardMedia
          src={image}
          component="img"
          title={title}
          sx={{
            maxWidth: "100%",
            margin: 0,
            boxShadow: ({ boxShadows: { md } }) => md,
            objectFit: "cover",
            objectPosition: "center",
          }}
        />
      </MDBox>
      <MDBox mt={1} mx={0.5}>
        <MDTypography variant="button" fontWeight="regular" color="text" textTransform="capitalize">
          {label}
        </MDTypography>
        <MDBox mb={1}>
          {action.type === "internal" ? (
            <MDTypography
              component={Link}
              to={action.route}
              variant="h5"
              textTransform="capitalize"
            >
              {title}
            </MDTypography>
          ) : (
            <MDTypography
              component="a"
              href={action.route}
              target="_blank"
              rel="noreferrer"
              variant="h5"
              textTransform="capitalize"
            >
              {title}
            </MDTypography>
          )}
        </MDBox>
        <MDBox mb={3} lineHeight={0}>
          <MDTypography variant="button" fontWeight="light" color="text">
            {description}
          </MDTypography>
        </MDBox>
        <MDBox display="flex" justifyContent="space-between" alignItems="center">
          {action.type === "internal" ? (
            <MDButton
              component={Link}
              to={action.route}
              variant="outlined"
              size="small"
              color={action.color}
            >
              {action.label}
            </MDButton>
          ) : (
            <MDButton
              component="a"
              href={action.route}
              target="_blank"
              rel="noreferrer"
              variant="outlined"
              size="small"
              color={action.color}
            >
              {action.label}
            </MDButton>
          )}
          <MDBox display="flex">{renderAuthors}</MDBox>
        </MDBox>
      </MDBox>
    </Card>
  );
}

// Setting default values for the props of DefaultProjectCard
DefaultProjectCard.defaultProps = {
  authors: [],
};

// Typechecking props for the DefaultProjectCard
DefaultProjectCard.propTypes = {
  image: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  action: PropTypes.shape({
    type: PropTypes.oneOf(["external", "internal"]),
    route: PropTypes.string.isRequired,
    color: PropTypes.oneOf([
      "primary",
      "secondary",
      "info",
      "success",
      "warning",
      "error",
      "light",
      "dark",
      "white",
    ]).isRequired,
    label: PropTypes.string.isRequired,
  }).isRequired,
  authors: PropTypes.arrayOf(PropTypes.object),
};

export default DefaultProjectCard;
