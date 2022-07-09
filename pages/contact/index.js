import styled from "styled-components";
import { useSelector } from "react-redux";

import Button from "../../common/Button/Button";
import InputField from "../../common/InputField/InputField";
import Typography from "../../common/Typography/Typography";
import HeaderTitle from "../../components/HeaderTitle/HeaderTitle";

const ContactPage = () => {
  const languageSelctor = useSelector((state) => state.language);
  const { languageData } = languageSelctor;

  return (
    <LoginStyle>
      <Form>
        <WrapperBtn>
          <HeaderTitle weight="bold" size="20px">
            {languageData.menu_item_contact}
          </HeaderTitle>
        </WrapperBtn>
        <div className="my-3 w-100">
          <InputField
            type="text"
            placeholder={languageData.contact_phoneNumber}
          />
          <InputField
            type="text"
            placeholder={languageData.login_label_password}
          />
        </div>
        <FormControl>
          <HeaderTitle size="16px">{languageData.question_contact}</HeaderTitle>
          <div className="my-4">
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault1"
              />
              <label className="form-check-label" htmlFor="flexRadioDefault1">
                {languageData.question_contact_one}
              </label>
            </div>
          </div>
          <div className="my-2">
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault1"
              />
              <label className="form-check-label" htmlFor="flexRadioDefault1">
                {languageData.question_contact_two}
              </label>
            </div>
          </div>
        </FormControl>
        <Button bgColor="#1F52FD" width="300px" color="#fff">
          {languageData.confirm_request}
        </Button>
      </Form>
    </LoginStyle>
  );
};

const LoginStyle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;
const Form = styled.form`
  width: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  border: 1px solid #ecf1ff;
`;

const WrapperBtn = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const Line = styled.div`
  width: 100%;
  height: 2px;
  background-color: ${({ blue }) =>
    blue ? "#053EFF" : "rgba(117, 122, 134, 0.5)"};
`;

const FormControl = styled.div`
  margin: 1.5rem 0;
  display: flex;
  width: 100%;
  justify-content: flex-start;
  flex-direction: column;
`;

export default ContactPage;
