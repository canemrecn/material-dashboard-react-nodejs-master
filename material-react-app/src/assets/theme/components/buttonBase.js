// Bu dosya, genel düğme (button) bileşenlerinin bazı varsayılan özelliklerini ayarlar.

// defaultProps: Bu özellik, bileşenin varsayılan özelliklerini belirtir. Bu durumda, disableRipple özelliği false olarak ayarlanmıştır. Bu, düğmelerin tıklama efektine (ripple effect) sahip olmasını sağlar.
// Bu ayarlar, genel düğme bileşenlerinin davranışlarını ve görünümlerini belirleyerek uygulamanın genel tasarımını standartlaştırmak için kullanılabilir.

const buttonBase = {
  defaultProps: {
    disableRipple: false,
  },
};

export default buttonBase;
