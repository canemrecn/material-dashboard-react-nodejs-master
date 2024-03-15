// Bu stil dosyası, bir gölge efekti oluşturmak için bir fonksiyon içerir. Fonksiyon, bir dizi parametre alır ve bu parametrelere göre bir kutuya gölge efekti uygular. İşlev, aşağıdaki parametreleri alır:

// offset: Gölge efektinin x ve y eksenlerindeki konumunu belirten bir dizi. Varsayılan değeri [0, 0]'dır.
// radius: Gölge efektinin bulanıklık (blur) ve yayılma (spread) yarıçapını belirten bir dizi. Varsayılan değeri [0, 0]'dır.
// color: Gölge efektinin rengini belirten bir dize.
// opacity: Gölge efektinin opaklığını belirten bir sayı (0 ile 1 arasında bir değer).
// inset: Opsiyonel bir parametre. Eğer verilirse, gölge efekti içe doğru olur. "inset" olarak belirtilirse, içe doğru gölge efekti uygulanır.
// Fonksiyon, belirtilen parametrelere göre bir CSS kutu gölge efekti dizesi oluşturur ve bu dizeyi döndürür. Bu şekilde, gölge efekti stil dosyalarında kullanılabilir.

// Material Dashboard 2 React helper functions
import rgba from "assets/theme/functions/rgba";
import pxToRem from "assets/theme/functions/pxToRem";

function boxShadow(offset = [], radius = [], color, opacity, inset = "") {
  const [x, y] = offset;
  const [blur, spread] = radius;

  return `${inset} ${pxToRem(x)} ${pxToRem(y)} ${pxToRem(blur)} ${pxToRem(spread)} ${rgba(
    color,
    opacity
  )}`;
}

export default boxShadow;
