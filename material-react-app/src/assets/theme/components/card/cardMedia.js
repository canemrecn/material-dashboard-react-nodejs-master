//Bu dosya, kart medyasının (örneğin, bir resim veya video) stiline ilişkin geçersiz kılma bilgilerini içerir.

//cardMedia nesnesi, kart medyasının stilini değiştirmek için styleOverrides özelliğini içerir. Bu özellik altında, kart medyasının kök öğesi (root) ve medya öğesi için stil değişiklikleri bulunur.

//root: Kart medyasının kök öğesi için belirtilen stil değişikliklerini içerir. Bu özellik, öncelikle kart medyasının kenarlarında yuvarlaklık (border radius) sağlar. Ayrıca, kart medyasının dış boşluklarını (margin) tanımlar. Bu örnekte, kart medyasının kök öğesine xl büyüklüğünde bir yuvarlaklık uygulanır ve üst, sağ ve sol kenarlarda 16px, alt kenarda ise 0 boşluk bırakır.

//media: Kart medyasının içindeki medya öğesi için belirtilen stil değişikliklerini içerir. Bu özellik, genellikle medya öğesinin özel bir genişliği veya yüksekliği gibi özelliklerini tanımlar. Bu örnekte, medya öğesi için width özelliği otomatik olarak ayarlanır.

//Bu stil geçersiz kılmaları, kart medyasının görünümünü özelleştirmek ve diğer bileşenlerle uyumlu hale getirmek için kullanılır. Bu dosya, kart medyasının belirli bir stile sahip olmasını sağlamak için kullanılır ve farklı kart bileşenlerinde tekrar kullanılabilir.

// Material Dashboard 2 React Base Styles
import borders from "assets/theme/base/borders";

// Material Dashboard 2 React Helper Functions
import pxToRem from "assets/theme/functions/pxToRem";

const { borderRadius } = borders;

const cardMedia = {
  styleOverrides: {
    root: {
      borderRadius: borderRadius.xl,
      margin: `${pxToRem(16)} ${pxToRem(16)} 0`,
    },

    media: {
      width: "auto",
    },
  },
};

export default cardMedia;
