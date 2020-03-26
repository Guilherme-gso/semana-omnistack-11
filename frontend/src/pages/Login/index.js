import React, {useState, useEffect} from 'react';
import { api } from '../../services/api';
import { Link, useHistory } from 'react-router-dom';
import { Container, Section, Form, Input, Button } from './styles';
import { FiLogIn } from 'react-icons/fi';
import { errorNotify } from '../../utils/error';
import { ToastContainer } from 'react-toastify';
import logo from '../../assets/logo.svg';
import homeImg from '../../assets/heroes.png';
import 'react-toastify/dist/ReactToastify.min.css';


export default function Login() {
  const [id, setId] = useState('');
  const [error, setError] = useState('');

  const history = useHistory();

  useEffect(()=> {
    setError('');
  }, [error]);

  async function handleSubmit(e) {
    e.preventDefault();

    if(!id) return setError('Preencha seu ID para fazer login');

    try{
      const response = await api.post('/auth', {id});
      const { name } = response.data;

      localStorage.setItem('name', name);
      localStorage.setItem('id', id);
      
      history.push('/profile');

    } catch(e){
      setError('Houve um erro ao fazer login, verifique seu ID e tente novamente.')
    }
  }
  return (
    <Container>
      <Section>
        <img src={logo} alt="Be the hero"/>

        <Form onSubmit={handleSubmit}>
          <h1>Faça login</h1>
            <Input placeholder="Sua ID" type="text" onChange={e => setId(e.target.value)}/>
            <Button>Entrar</Button>
          <Link to="/register">
            <FiLogIn size={16} color="#E02041"/>
            Não tenho cadastro 
          </Link>
        </Form>
      </Section>
      <img src={homeImg} alt=""/>
      {error && errorNotify(error)}
      <ToastContainer/>
    </Container>
  );
}
