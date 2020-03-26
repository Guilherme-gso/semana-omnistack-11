import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: 1120px;
  height: 100vh;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const Content = styled.div`
  @media(max-width: 576px) {
    display: flex;
    flex-direction: column;
  }
  
  width: 100%;
  padding: 96px;
  background: ${({theme}) => theme.primaryColor};
  box-shadow: 0 0 100px rgba(0,0,0, 0.1);
  border-radius: 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const Section = styled.section`
  width: 100%;
  max-width: 380px;

  h1 {
    margin: 64px 0 32px;
    font-size: 32px;
  }

  p {
    font-size: 18;
    color: #737380;
    line-height: 32px;
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
export const Form = styled.form`
  width: 100%;
  max-width: 400px;
  input {
    margin-bottom: 8px;
  }

`;
export const Group = styled.div`
  display: flex;
  input + input {
    margin-left: 8px;
  }
`;
export const TextArea = styled.textarea`
  width: 100%;
  resize: vertical;
  min-height: 140px;
  border: 1px solid ${({theme}) => theme.borderColor};
  border-radius: 3px;
  padding: 24px;
  line-height: 24px;
`;