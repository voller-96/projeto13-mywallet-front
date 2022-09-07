import styled from "styled-components";
import logo from "../Assets/logo.png";

const LoginPage = () => {
  return (
    <>
      <Container>
        <Logo>
          <img src={logo} alt="logo"></img>
        </Logo>
        <form>
          <Input placeholder="email"></Input>
          <Input placeholder="senha"></Input>
        </form>
        <Button>Entrar</Button>
        <SignUp>Primeira vez? Cadastre-se!</SignUp>
      </Container>
    </>
  );
};

export default LoginPage;

const Container = styled.div`
  @media (max-width: 600px) {
    background-color: #8c11be;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

const Logo = styled.div`
  margin-bottom: 30px;
`;

const Input = styled.input`
  display: flex;
  justify-content: center;
  align-items: center;
  bacground-color: #fff;
  color: #000;
  font-size: 20px;
  font-weight: 400;
  width: 330px;
  height: 50px;
  margin-bottom: 10px;
  ::placeholder {
    padding: 0 20px;
  }
`;

const Button = styled.button`
  margin: 20px 0;
  width: 330px;
  height: 46px;
  border: none;
  border-radius: 5px;
  color: #fff;
  font-weigth: bold;
  font-size: 20px;

  background-color: #a328d6;
`;

const SignUp = styled.p`
  color: #fff;
  font-size: 15px;
  font-weigth: bold;
`;
