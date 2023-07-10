import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import styled from "styled-components";
import schema from "../../consts/schema";
import InputBox from "./inputBox";

const SignUpForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = (data) => console.log(data);

  return (
    <S.Container>
      <S.Title>SIGN UP</S.Title>
      <form onSubmit={handleSubmit(onSubmit)}>
        <InputBox name={"email"} register={register} errors={errors} />
        <InputBox name={"password"} register={register} errors={errors} />
        <InputBox
          name={"passwordConfirm"}
          register={register}
          errors={errors}
        />
        <InputBox name={"name"} register={register} errors={errors} />
        <InputBox name={"age"} register={register} errors={errors} />

        <div>
          <S.Button>SUBMIT</S.Button>
        </div>
      </form>
    </S.Container>
  );
};

export default SignUpForm;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
  form {
    margin-top: 20px;
  }
`;

const Title = styled.div`
  font-weight: bold;
  font-size: 36px;
`;

const Button = styled.button`
  background-color: "black";
  color: white;
  border: none;
  width: 100px;
  height: 50px;
  margin-left: 100px;
`;

const S = { Container, Title, Button };
