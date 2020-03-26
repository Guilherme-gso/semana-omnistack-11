import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: 1180px;
  padding: 30px;
  margin: 20px auto;

  @media(max-width: 570px) {
    max-width: 600px;
  }
  h1 {
    margin-top: 80px;
    margin-bottom: 24px;
  }
`;
export const Header = styled.header`
  display: flex;
  align-items: center;

  @media(max-width: 570px) {
    display: flex;
    justify-content: center;
    align-items: center;

    img {
      display: none;
    }
    a {
      width: 40px;
    }
  }
  img {
    height: 64px;
  }
  span {
    font-size: 20px;
    margin-left: 24px;
  }

  a {
    width: 260px;
    margin-left: auto;
    margin-top: 0;
    text-decoration: none;
    color: #fff;
    background: ${({theme}) => theme.secondaryColor};
    padding: 20px 0;
    border-radius: 7px;
    text-align: center;
  }
  button {
    height: 60px;
    width: 60px;
    border-radius: 4px;
    border: 1px solid #dcdce6;
    background: transparent;
    margin-left: 16px;

    &:hover {
      border-color: #999;
      transition: border-color 0.2s;
    }
  }
`;
export const List = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 24px;
  list-style: none;
`;
export const ListItem = styled.li`
  background: #FFF;
  padding: 24px;
  position: relative;
  border-radius: 8px;
  strong {
    display: block;
    margin-bottom: 16px;
    color: #41414d;
  }
  p + strong {
    margin-top: 22px;
  }
  p {
    color: #737380;
    line-height: 21px;
    font-size: 16px;
  }
  button {
    position: absolute;
    right: 24px;
    top: 24px;
    border: 0;
    background: transparent;

    &:hover {
      opacity: 0.8;
    }
  }
`;