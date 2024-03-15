// Bu dosya, gölge oluşturmak için bir fonksiyon sağlar. İşlev, gölgeyi CSS kutu gölge özelliğine uygun bir dize olarak döndürür.

// İşlevin parametreleri aşağıdaki gibidir:

// offset: Gölgenin x ve y eksenlerindeki konumu. Varsayılan değer [] (yani, gölge olmadan).
// radius: Gölgenin bulanıklık (blur) ve yayılma (spread) yarıçapı. Varsayılan değer [] (yani, gölge olmadan).
// color: Gölge rengi. Örnek format: "#RRGGBB" veya "rgba(0, 0, 0, 0.5)".
// opacity: Gölge opaklığı. Değer aralığı [0, 1].
// inset: İç gölge oluşturup oluşturmayacağını belirten bir değer. Boş bir dize ("") iç gölge oluşturulmadığını, "inset" iç gölge oluşturulduğunu belirtir.
// İşlev, yukarıdaki parametreleri kullanarak CSS kutu gölge özelliğine uygun bir dize oluşturur ve döndürür. Bu dize daha sonra stil dosyalarında veya bileşenlerde kullanılabilir ve belirtilen özelliklere sahip bir gölge oluşturur.

// Material Dashboard 2 React helper functions
import rgba from "assets/theme-dark/functions/rgba";
import pxToRem from "assets/theme-dark/functions/pxToRem";

function boxShadow(offset = [], radius = [], color, opacity, inset = "") {
  const [x, y] = offset;
  const [blur, spread] = radius;

  return `${inset} ${pxToRem(x)} ${pxToRem(y)} ${pxToRem(blur)} ${pxToRem(spread)} ${rgba(
    color,
    opacity
  )}`;
}

export default boxShadow;
