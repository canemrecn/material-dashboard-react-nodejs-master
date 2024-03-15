// Bu kod, basit bir giriş formunu içeren bir React bileşenidir. Kullanıcı e-posta ve şifre bilgilerini girerek giriş yapabilir. Ayrıca "Beni Hatırla" seçeneğiyle oturum açma bilgilerini hatırlaması sağlanır.

// Bileşen içindeki önemli kısımlar şunlardır:

// useState ve useContext: React kancalarıdır. useState bileşen durumunu yönetmek için kullanılırken, useContext ile bir bağlam nesnesi alınır.
// inputs ve rememberMe durumları: Kullanıcıdan alınan giriş bilgilerini ve "Beni Hatırla" seçeneğinin durumunu saklamak için kullanılır.
// changeHandler işlevi: Giriş bilgilerinde herhangi bir değişiklik olduğunda çağrılır ve bileşen durumunu günceller.
// submitHandler işlevi: Giriş formu gönderildiğinde çağrılır ve kullanıcının giriş bilgilerini kontrol eder. Eğer bilgiler doğruysa, bir oturum açma işlemi gerçekleştirilir.
// MDBox, MDInput, MDButton: Bu bileşenler, MUI (Material-UI) bileşenlerinin özelleştirilmiş sürümleridir. Tasarımı ve stilini özelleştirmek için kullanılırlar.
// BasicLayoutLanding: Bu bileşen, bir arka plan resmiyle birlikte temel bir sayfa düzeni sağlar.
// bgImage: Arka plan resminin URL'sini içerir.
// Bu kod, kullanıcıların e-posta ve şifreleriyle giriş yapabilecekleri basit ve kullanıcı dostu bir giriş formu sağlar.



import { useContext, useState } from "react";
import Card from "@mui/material/Card";
import MDBox from "components/MDBox";
import MDInput from "components/MDInput";
import MDButton from "components/MDButton";
import BasicLayoutLanding from "layouts/authentication/components/BasicLayoutLanding";
import bgImage from "assets/images/bg-sign-in-basic.jpeg";
import { AuthContext } from "context";

function Login() {
  const authContext = useContext(AuthContext);

  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });

  const [rememberMe, setRememberMe] = useState(false);

  const handleSetRememberMe = () => setRememberMe(!rememberMe);

  const changeHandler = (e) => {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value,
    });
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    // Herhangi bir e-mail ve şifre doğrulaması yapmadan oturum açma işlemi
    try {
      // Oturum açma işlemini simüle etmek için sabit bir yanıt kullanılabilir
      // Örnek: { access_token: "simulated-access-token", refresh_token: "simulated-refresh-token" }
      const response = { access_token: "simulated-access-token", refresh_token: "simulated-refresh-token" };
      authContext.login(response.access_token, response.refresh_token);
      console.log("Giriş başarılı.");
    } catch (error) {
      console.error("Giriş işlemi sırasında bir hata oluştu", error);
    }
  };

  return (
    <BasicLayoutLanding image={bgImage}>
      <Card>
        {/* UI Bileşenleri */}
        <MDBox component="form" role="form" method="POST" onSubmit={submitHandler}>
          <MDBox mb={2}>
            <MDInput
              type="email"
              label="Email"
              fullWidth
              name="email"
              value={inputs.email}
              onChange={changeHandler}
            />
          </MDBox>
          <MDBox mb={2}>
            <MDInput
              type="password"
              label="Password"
              fullWidth
              name="password"
              value={inputs.password}
              onChange={changeHandler}
            />
          </MDBox>
          {/* Diğer UI Bileşenleri */}
          <MDBox mt={4} mb={1}>
            <MDButton variant="gradient" color="info" fullWidth type="submit">
              Sign in
            </MDButton>
          </MDBox>
        </MDBox>
      </Card>
    </BasicLayoutLanding>
  );
}

export default Login;
