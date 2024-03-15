// Bu kod, Material Dashboard 2 React temasında kullanılmak üzere özelleştirilmiş bir bildirim bileşeni olan MDAlert bileşenini tanımlar. Bu bileşen, farklı renklerde ve isteğe bağlı olarak kapatılabilir şekilde bildirimler göstermek için tasarlanmıştır.

// Aşağıdaki ana özellikleri içerir:

// useState: Bildirimin monte edilme durumunu (mount), animasyonun durumunu takip etmek için kullanılır.
// Fade bileşeni: Bildirimin monte edilme ve animasyonlu olarak görünme işlemlerini sağlar.
// MDBox: İçerik ve kapatma düğmesi için konteyner bileşeni olarak kullanılır.
// MDAlertRoot ve MDAlertCloseIcon: Bildirimin kök ve kapatma simgesi bileşenleridir. Stil ve işlevsellik için özelleştirilmiştir.
// handleAlertStatus işlevi: Bildirimi kapatma işlemi için kullanılır.
// alertTemplate işlevi: Bildirimin temel şablonunu oluşturur ve animasyon durumuna göre monte edilme durumunu belirler.
// switch-case ifadesi: Bildirimin animasyon durumuna göre render edilme mantığını yönetir.
// defaultProps: Bileşenin varsayılan özelliklerini belirler.
// propTypes: Bileşenin prop tiplerini kontrol eder ve doğru kullanımı sağlar.
// Bu bileşen, kullanıcıya bilgi, başarı, uyarı veya hata gibi farklı durumlarda bildirim göstermek için kullanılabilir. Ayrıca, dismissible özelliği sayesinde kullanıcıların bildirimi kapatabilmesine olanak tanır.

import { useState } from "react";

// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

// @mui material components
import Fade from "@mui/material/Fade";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";

// Custom styles for the MDAlert
import MDAlertRoot from "components/MDAlert/MDAlertRoot";
import MDAlertCloseIcon from "components/MDAlert/MDAlertCloseIcon";

function MDAlert({ color, dismissible, children, ...rest }) {
  const [alertStatus, setAlertStatus] = useState("mount");

  const handleAlertStatus = () => setAlertStatus("fadeOut");

  // The base template for the alert
  const alertTemplate = (mount = true) => (
    <Fade in={mount} timeout={300}>
      <MDAlertRoot ownerState={{ color }} {...rest}>
        <MDBox display="flex" alignItems="center" color="white">
          {children}
        </MDBox>
        {dismissible ? (
          <MDAlertCloseIcon onClick={mount ? handleAlertStatus : null}>&times;</MDAlertCloseIcon>
        ) : null}
      </MDAlertRoot>
    </Fade>
  );

  switch (true) {
    case alertStatus === "mount":
      return alertTemplate();
    case alertStatus === "fadeOut":
      setTimeout(() => setAlertStatus("unmount"), 400);
      return alertTemplate(false);
    default:
      alertTemplate();
      break;
  }

  return null;
}

// Setting default values for the props of MDAlert
MDAlert.defaultProps = {
  color: "info",
  dismissible: false,
};

// Typechecking props of the MDAlert
MDAlert.propTypes = {
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
  dismissible: PropTypes.bool,
  children: PropTypes.node.isRequired,
};

export default MDAlert;
