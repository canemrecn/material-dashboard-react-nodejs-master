// Bu dosya, kırıntı (breadcrumb) bileşeninin stilini özelleştirir.

// styleOverrides: Bu özellik, kırıntı bileşeninin farklı kısımlarının stilini özelleştirir.
// li: Liste öğelerine (li elementlerine) uygulanacak stil özelliklerini belirtir. Burada lineHeight özelliği 0 olarak ayarlanmıştır. Bu, kırıntılar arasındaki boşlukları sıfırlar.
// separator: Ayraç (separator) elementine (span elementine) uygulanacak stil özelliklerini belirtir. Burada fontSize özelliği typography temasından gelen size.sm değeriyle ayarlanmıştır. color özelliği ise colors temasından gelen grey[600] değeriyle ayarlanmıştır. Bu, ayraçların boyutunu ve rengini belirler.
// Bu özelleştirmeler, kırıntı bileşeninin görünümünü belirleyerek uygulamanın genel tasarımını kişiselleştirmek için kullanılabilir.

// Material Dashboard 2 React base styles
import colors from "assets/theme/base/colors";
import typography from "assets/theme/base/typography";

const { grey } = colors;
const { size } = typography;

const breadcrumbs = {
  styleOverrides: {
    li: {
      lineHeight: 0,
    },

    separator: {
      fontSize: size.sm,
      color: grey[600],
    },
  },
};

export default breadcrumbs;
