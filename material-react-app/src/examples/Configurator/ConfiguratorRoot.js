// Bu kod, @mui/material kütüphanesinden Drawer bileşenini özelleştirmek için kullanılır. styled fonksiyonu, Drawer bileşenini temel alarak özel bir bileşen oluşturur. Bu özel bileşen, ownerState parametresi aracılığıyla openConfigurator durumuna göre farklı stillere sahip olabilir.

// Özelleştirme şunları içerir:

// drawerOpenStyles ve drawerCloseStyles fonksiyonları, çekmece açık veya kapalıyken uygulanacak stilleri tanımlar.
// drawerOpenStyles fonksiyonu, çekmece açıkken configuratorWidth genişliğinde olacak şekilde ayarlanmıştır.
// drawerCloseStyles fonksiyonu, çekmece kapalıyken sağa doğru 350px kaydırılmış bir stil tanımlar.
// Dönüş değeri, .MuiDrawer-paper sınıfına özel stilleri içerir. Bu stiller, çekmece kağıdının genel davranışını ve görünümünü belirler.
// openConfigurator durumuna göre, çekmece açık veya kapalıyken farklı stiller uygulanır. Bu, çekmeceyi açıp kapatırken animasyonlu bir geçiş sağlar.
// Sonuç olarak, bu kod parçası, MUI Drawer bileşenini açık veya kapalıyken farklı görsel stillere sahip olacak şekilde özelleştirir. Bu, uygulamanın gereksinimlerine göre çekmecenin davranışını ve görünümünü esnek bir şekilde kontrol etmenizi sağlar.

// @mui material components
import Drawer from "@mui/material/Drawer";
import { styled } from "@mui/material/styles";

export default styled(Drawer)(({ theme, ownerState }) => {
  const { boxShadows, functions, transitions } = theme;
  const { openConfigurator } = ownerState;

  const configuratorWidth = 360;
  const { lg } = boxShadows;
  const { pxToRem } = functions;

  // drawer styles when openConfigurator={true}
  const drawerOpenStyles = () => ({
    width: configuratorWidth,
    left: "initial",
    right: 0,
    transition: transitions.create("right", {
      easing: transitions.easing.sharp,
      duration: transitions.duration.short,
    }),
  });

  // drawer styles when openConfigurator={false}
  const drawerCloseStyles = () => ({
    left: "initial",
    right: pxToRem(-350),
    transition: transitions.create("all", {
      easing: transitions.easing.sharp,
      duration: transitions.duration.short,
    }),
  });

  return {
    "& .MuiDrawer-paper": {
      height: "100vh",
      margin: 0,
      padding: `0 ${pxToRem(10)}`,
      borderRadius: 0,
      boxShadow: lg,
      overflowY: "auto",
      ...(openConfigurator ? drawerOpenStyles() : drawerCloseStyles()),
    },
  };
});
