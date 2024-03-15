
// Bu kod, bir TextField bileşenini genişletir ve error, success ve disabled özelliklerine göre özel stiller uygular.

// Bir TextField bileşeni, kullanıcıların metin girişi yapabileceği bir giriş alanıdır. Bu bileşen, MUI (Material-UI) kütüphanesinde bulunan TextField bileşenine dayanır ve onu özelleştirir.

// Bileşen, aşağıdaki özelliklere sahiptir:

// error: Metin girişinin geçerli olmadığını belirten bir Boolean değer. Varsayılan değeri false'dur.
// success: Metin girişinin geçerli olduğunu belirten bir Boolean değer. Varsayılan değeri false'dur.
// disabled: Metin girişinin etkin olup olmadığını belirten bir Boolean değer. Varsayılan değeri false'dur.
// rest: Diğer MUI TextField bileşeni özelliklerini içeren bir nesnedir.
// ref: Bileşenin referansını alır.
// Bu özelliklere bağlı olarak, bileşenin içindeki TextField bileşenine özel stiller uygulanır. error özelliği true olduğunda hata göstergesi görüntülenir, success özelliği true olduğunda başarı göstergesi görüntülenir ve disabled özelliği true olduğunda metin girişi devre dışı bırakılır.

// Bileşen, styled fonksiyonu kullanılarak özelleştirilir. errorStyles ve successStyles fonksiyonları, hata ve başarı durumlarında arka plan görüntüsü ve renklerini ayarlar. Bu şekilde, uygulamada özelleştirilmiş metin giriş alanları oluşturulabilir.

// @mui material components
import TextField from "@mui/material/TextField";
import { styled } from "@mui/material/styles";

export default styled(TextField)(({ theme, ownerState }) => {
  const { palette, functions } = theme;
  const { error, success, disabled } = ownerState;

  const { grey, transparent, error: colorError, success: colorSuccess } = palette;
  const { pxToRem } = functions;

  // styles for the input with error={true}
  const errorStyles = () => ({
    backgroundImage:
      "url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' fill='none' stroke='%23F44335' viewBox='0 0 12 12'%3E%3Ccircle cx='6' cy='6' r='4.5'/%3E%3Cpath stroke-linejoin='round' d='M5.8 3.6h.4L6 6.5z'/%3E%3Ccircle cx='6' cy='8.2' r='.6' fill='%23F44335' stroke='none'/%3E%3C/svg%3E\")",
    backgroundRepeat: "no-repeat",
    backgroundPosition: `right ${pxToRem(12)} center`,
    backgroundSize: `${pxToRem(16)} ${pxToRem(16)}`,

    "& .Mui-focused": {
      "& .MuiOutlinedInput-notchedOutline, &:after": {
        borderColor: colorError.main,
      },
    },

    "& .MuiInputLabel-root.Mui-focused": {
      color: colorError.main,
    },
  });

  // styles for the input with success={true}
  const successStyles = () => ({
    backgroundImage:
      "url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 10 8'%3E%3Cpath fill='%234CAF50' d='M2.3 6.73L.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1z'/%3E%3C/svg%3E\")",
    backgroundRepeat: "no-repeat",
    backgroundPosition: `right ${pxToRem(12)} center`,
    backgroundSize: `${pxToRem(16)} ${pxToRem(16)}`,

    "& .Mui-focused": {
      "& .MuiOutlinedInput-notchedOutline, &:after": {
        borderColor: colorSuccess.main,
      },
    },

    "& .MuiInputLabel-root.Mui-focused": {
      color: colorSuccess.main,
    },
  });

  return {
    backgroundColor: disabled ? `${grey[200]} !important` : transparent.main,
    pointerEvents: disabled ? "none" : "auto",
    ...(error && errorStyles()),
    ...(success && successStyles()),
  };
});
