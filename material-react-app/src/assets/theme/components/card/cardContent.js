//Bu dosya, kart içeriğinin stilini belirler.

//cardContent nesnesi, kart içeriği için stil geçersiz kılmalarını içerir. Özellikle, kart içeriğinin kök öğesi (root) için aşağıdaki stil değişikliklerini içerir:

//marginTop: Kart içeriğinin üst kenarından boşluk miktarını tanımlar.
//marginBottom: Kart içeriğinin alt kenarından boşluk miktarını tanımlar.
//padding: Kart içeriğinin iç kenarlarında boşluk miktarını tanımlar. Bu, üst, sağ ve sol kenarlarda 8px, alt kenarda ise 24px boşluk bırakır.
//Bu stil geçersiz kılmaları, kart bileşeninin içeriğinin daha iyi bir görünüm ve düzen elde etmesine yardımcı olur. Bu dosya, kart içeriğinin belirli bir stile sahip olmasını sağlamak için kullanılır ve farklı kart bileşenlerinde tekrar kullanılabilir.

// Material Dashboard 2 React Helper Functions
import pxToRem from "assets/theme/functions/pxToRem";

const cardContent = {
  styleOverrides: {
    root: {
      marginTop: 0,
      marginBottom: 0,
      padding: `${pxToRem(8)} ${pxToRem(24)} ${pxToRem(24)}`,
    },
  },
};

export default cardContent;
