
// Bu kod, MDAvatar adlı bir bileşen oluşturur. Bu bileşen, forwardRef fonksiyonu kullanılarak bir ref'i doğrudan alt bileşene iletebilir. Bileşen, MDAvatarRoot adlı bir bileşene sarmalanır ve ownerState propu aracılığıyla bazı özel özellikleri iletir. İşte bileşenin ana özellikleri:

// bgColor: Arkaplan rengi. Varsayılan değeri transparent olup, bir dizi farklı renk seçeneği kabul eder.
// size: Avatar boyutu. Varsayılan değeri md (orta) olup, bir dizi farklı boyut seçeneği kabul eder.
// shadow: Gölge efekti. Varsayılan değeri none olup, bir dizi farklı gölge seçeneği kabul eder.
// ref: Bileşene bir ref iletmek için kullanılır.
// Bu bileşenin amacı, avatar görüntüleri veya kullanıcı profili resimlerini temsil etmektir. MDAvatarRoot bileşeni, avatar bileşeninin temel stilini ve yapılandırmasını içerir. MDAvatar bileşeni, bu temel yapıyı kullanarak farklı renkler, boyutlar ve gölgelerle avatarları özelleştirmek için kullanılabilir. Ayrıca, bileşenin propTypes özelliği, bileşenin beklenen props türlerini kontrol ederek güvenli bir kullanım sağlar.

import { forwardRef } from "react";

// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

// Custom styles for MDAvatar
import MDAvatarRoot from "components/MDAvatar/MDAvatarRoot";

const MDAvatar = forwardRef(({ bgColor, size, shadow, ...rest }, ref) => (
  <MDAvatarRoot ref={ref} ownerState={{ shadow, bgColor, size }} {...rest} />
));

// Setting default values for the props of MDAvatar
MDAvatar.defaultProps = {
  bgColor: "transparent",
  size: "md",
  shadow: "none",
};

// Typechecking props for the MDAvatar
MDAvatar.propTypes = {
  bgColor: PropTypes.oneOf([
    "transparent",
    "primary",
    "secondary",
    "info",
    "success",
    "warning",
    "error",
    "light",
    "dark",
  ]),
  size: PropTypes.oneOf(["xs", "sm", "md", "lg", "xl", "xxl"]),
  shadow: PropTypes.oneOf(["none", "xs", "sm", "md", "lg", "xl", "xxl", "inset"]),
};

export default MDAvatar;
