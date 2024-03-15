// Bu kod, Badge bileşenini özelleştirmek için styled fonksiyonunu kullanır. styled fonksiyonu, bir bileşene özel stiller uygulamak için kullanılır.

// Badge bileşenine özel stiller şu özellikleri içerir:

// color: Badge'nin rengini belirler.
// variant: Badge'nin varyantını belirler.
// size: Badge'nin boyutunu belirler.
// circular: Badge'nin kenarlarını yuvarlamak için bir boolean değer alır.
// indicator: Badge'nin bir gösterge içerip içermediğini belirler.
// border: Badge etrafında bir kenarlık olup olmadığını belirler.
// container: Badge'nin bir konteyner içinde olup olmadığını belirler.
// children: Badge'nin içeriğini oluşturan bileşenler.
// Bileşenin stilleri, bu özelliklere göre dinamik olarak değişir. Örneğin, color özelliği gradient olarak ayarlandığında, gradient stilleri uygulanır. Ayrıca, size özelliğine göre farklı boyutlar ve fontSize değerleri ayarlanır. container özelliği true olduğunda, bileşenin pozisyonu ve dönüşü değiştirilir.

// @mui material components
import Badge from "@mui/material/Badge";
import { styled } from "@mui/material/styles";

export default styled(Badge)(({ theme, ownerState }) => {
  const { palette, typography, borders, functions } = theme;
  const { color, circular, border, size, indicator, variant, container, children } = ownerState;

  const { white, dark, gradients, badgeColors } = palette;
  const { size: fontSize, fontWeightBold } = typography;
  const { borderRadius, borderWidth } = borders;
  const { pxToRem, linearGradient } = functions;

  // padding values
  const paddings = {
    xs: "0.45em 0.775em",
    sm: "0.55em 0.9em",
    md: "0.65em 1em",
    lg: "0.85em 1.375em",
  };

  // fontSize value
  const fontSizeValue = size === "xs" ? fontSize.xxs : fontSize.xs;

  // border value
  const borderValue = border ? `${borderWidth[3]} solid ${white.main}` : "none";

  // borderRadius value
  const borderRadiusValue = circular ? borderRadius.section : borderRadius.md;

  // styles for the badge with indicator={true}
  const indicatorStyles = (sizeProp) => {
    let widthValue = pxToRem(20);
    let heightValue = pxToRem(20);

    if (sizeProp === "medium") {
      widthValue = pxToRem(24);
      heightValue = pxToRem(24);
    } else if (sizeProp === "large") {
      widthValue = pxToRem(32);
      heightValue = pxToRem(32);
    }

    return {
      width: widthValue,
      height: heightValue,
      display: "grid",
      placeItems: "center",
      textAlign: "center",
      borderRadius: "50%",
      padding: 0,
      border: borderValue,
    };
  };

  // styles for the badge with variant="gradient"
  const gradientStyles = (colorProp) => {
    const backgroundValue = gradients[colorProp]
      ? linearGradient(gradients[colorProp].main, gradients[colorProp].state)
      : linearGradient(gradients.info.main, gradients.info.state);
    const colorValue = colorProp === "light" ? dark.main : white.main;

    return {
      background: backgroundValue,
      color: colorValue,
    };
  };

  // styles for the badge with variant="contained"
  const containedStyles = (colorProp) => {
    const backgroundValue = badgeColors[colorProp]
      ? badgeColors[colorProp].background
      : badgeColors.info.background;
    let colorValue = badgeColors[colorProp] ? badgeColors[colorProp].text : badgeColors.info.text;

    if (colorProp === "light") {
      colorValue = dark.main;
    }
    return {
      background: backgroundValue,
      color: colorValue,
    };
  };

  // styles for the badge with no children and container={false}
  const standAloneStyles = () => ({
    position: "static",
    marginLeft: pxToRem(8),
    transform: "none",
    fontSize: pxToRem(9),
  });

  // styles for the badge with container={true}
  const containerStyles = () => ({
    position: "relative",
    transform: "none",
  });

  return {
    "& .MuiBadge-badge": {
      height: "auto",
      padding: paddings[size] || paddings.xs,
      fontSize: fontSizeValue,
      fontWeight: fontWeightBold,
      textTransform: "uppercase",
      lineHeight: 1,
      textAlign: "center",
      whiteSpace: "nowrap",
      verticalAlign: "baseline",
      border: borderValue,
      borderRadius: borderRadiusValue,
      ...(indicator && indicatorStyles(size)),
      ...(variant === "gradient" && gradientStyles(color)),
      ...(variant === "contained" && containedStyles(color)),
      ...(!children && !container && standAloneStyles(color)),
      ...(container && containerStyles(color)),
    },
  };
});
