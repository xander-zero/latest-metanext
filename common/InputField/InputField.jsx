import styled from "styled-components";

const InputField = ({ type, placeholder }) => {
  return (
    <FormGroup>
      <Input type={type} placeholder={placeholder} />
    </FormGroup>
  );
};

const FormGroup = styled.div`
  display: flex;
  margin: 2rem 0;
`;

const Input = styled.input`
  width: 100%;
  border: 1px solid #ededed;
  /* border: 1px solid red; */
  padding: 0.5rem;
  color: #757a86;
  width: 100%;
  border-radius: 10px;
  font-size: 12px;
  outline: none;
`;

export default InputField;
