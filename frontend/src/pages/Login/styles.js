import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: 1120px;
  height: 100vh;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media(max-width: 576px) {
    img {
      display: none;
    }
  }

`;
export const Section = styled.section`
  width: 100%;
  max-width: 350px;
  margin: 30px;

  @media(max-width: 576px) {
    img {
      display: block;
    }
  }
`;
export const Form = styled.form`
  margin-top: 100px;

  @media(max-width: 720px) {
    padding-right: 22px;
  }

  h1 {
    font-size: 32px;
    margin-bottom: 32px;
  }
  a {
    text-decoration: none;
    color: ${({theme}) => theme.secondaryColor};
    display: flex;
    align-items: center;
    margin-top: 20px;
    font-size: 16px;
    font-weight: 500;
    transition: opacity 0.2s;

    &:hover {
      opacity: 0.8;
    }
  }
  svg {
    margin-right: 5px;
  }
`;
export const Input = styled.input`
  width: 100%;
  height: 60px;
  border: 1px solid ${({theme}) => theme.borderColor};
  border-radius: 3px;
  padding: 0 24px;
`;
export const Button = styled.button`
  width: 100%;
  height: 60px;
  border: 0;
  border-radius: 8px;
  color: #FFF;
  font-weight: bold;
  margin-top: 16px;
  margin-bottom: 15px;
  background-color: ${({theme}) => theme.secondaryColor};

  &:hover {
    transition: ease-in-out 0.5s;
    filter: brightness(90%);
  }
`;

