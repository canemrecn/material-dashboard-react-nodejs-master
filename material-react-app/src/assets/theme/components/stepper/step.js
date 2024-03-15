// Bu dosya, bir adımın (step) stiline özel bir stil belirtir. root özelliği, adımın genel stilini tanımlar. Bu özel stil, adımın yatay düzeni gibi belirli özelliklerini düzenlemek için kullanılabilir. Örneğin, adımın kenar boşluğunu ayarlamak için padding özelliği kullanılıyor. Bu özelleştirme, adımların görünümünü belirleyerek kullanıcı arayüzünün estetiğini geliştirmek için kullanılabilir.

// Material Dashboard 2 React helper functions
import pxToRem from "assets/theme/functions/pxToRem";

const step = {
  styleOverrides: {
    root: {
      padding: `0 ${pxToRem(6)}`,
    },
  },
};

export default step;
