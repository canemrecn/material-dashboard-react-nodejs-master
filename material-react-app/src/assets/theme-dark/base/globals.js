// Bu dosya, bir React projesinde kullanılmak üzere genel CSS kurallarını tanımlayan bir yapılandırma dosyasıdır. Özellikle, projenin karanlık temasından renkler içe aktarılır ve bu renkler, belirli HTML elemanları ve sınıflar üzerinde stil tanımları oluşturmak için kullanılır. Dosyadaki stil tanımları, web sayfanızın görünümünü ve hissini belirler ve kullanıcı arayüzünüzün temelini oluşturur.

// Tanımlanan Stillerin Açıklamaları
// html: Sayfanın kaydırma davranışını smooth olarak ayarlar. Bu, kullanıcıların sayfa içi bağlantılar arasında geçiş yaptığında pürüzsüz bir kaydırma efekti görmesini sağlar.

// ***, ::before, ::after: Tüm elemanlar için (*), bu elemanların before ve after psödo-elemanları dahil, varsayılan margin ve padding değerlerini sıfırlar. Bu, tarayıcılar arası tutarlılık sağlamak ve beklenmedik boşluklarla ilgili sorunları önlemek için yaygın bir uygulamadır.

// a, a:link, a:visited: Tüm a (bağlantı) elemanları için, text-decoration özelliğini none olarak ayarlar ve !important ile bu stilin öncelikli olduğunu belirtir. Bu, bağlantıların altını çizme gibi varsayılan tarayıcı stillerini kaldırır.

// a.link, .link, a.link:link, .link:link, a.link:visited, .link:visited: .link sınıfına sahip a etiketleri ve .link sınıfı için, color özelliğini dark temasının ana rengine ayarlar ve yine !important ile bu stilin öncelikli olduğunu belirtir. Ayrıca, renk değişimlerinde pürüzsüz bir geçiş efekti için transition özelliğini tanımlar.

// a.link:hover, .link:hover, a.link:focus, .link:focus: .link sınıfına sahip a etiketlerinin ve .link sınıfının hover ve focus durumları için, color özelliğini info temasının ana rengine ayarlar ve yine !important ile bu stilin öncelikli olduğunu belirtir. Bu, kullanıcılar bağlantının üzerine geldiğinde veya odaklandığında renk değişikliği efekti yaratır.

// Bu tanımlar, sitenizin temel stilini oluştururken kullanılabilir ve projenin genelinde tutarlı bir görünüm ve his sağlamak için önemlidir. Bu tür genel stil tanımları, proje başlangıcında belirlenerek CSS'in daha yönetilebilir ve tutarlı olmasını sağlar.

// Material Dashboard 2 React Base Styles
import colors from "assets/theme-dark/base/colors";

const { info, dark } = colors;

const globals = {
  html: {
    scrollBehavior: "smooth",
  },
  "*, *::before, *::after": {
    margin: 0,
    padding: 0,
  },
  "a, a:link, a:visited": {
    textDecoration: "none !important",
  },
  "a.link, .link, a.link:link, .link:link, a.link:visited, .link:visited": {
    color: `${dark.main} !important`,
    transition: "color 150ms ease-in !important",
  },
  "a.link:hover, .link:hover, a.link:focus, .link:focus": {
    color: `${info.main} !important`,
  },
};

export default globals;
