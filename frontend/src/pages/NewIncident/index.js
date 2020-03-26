import React, {useState, useEffect} from 'react';
import { api } from '../../services/api';
import { Link, useHistory } from 'react-router-dom';
import { Container, Content, Section, Form, TextArea } from './styles';
import { Input, Button } from '../Login/styles';
import { FiArrowLeft } from 'react-icons/fi';
import { errorNotify } from '../../utils/error';
import { ToastContainer } from 'react-toastify';
import logo from '../../assets/logo.svg';
import 'react-toastify/dist/ReactToastify.min.css';

export default function Register() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [value, setValue] = useState('');
  const [error, setError] = useState('');
  const history = useHistory();

  useEffect(() => {
    setError('');
  }, [error]);
  
  async function handleSubmit(e) {
    e.preventDefault();

    const data = {title, description, value};
    const ong_id = localStorage.getItem('id');
      if(!data.title || !data.description || !data.value) 
        return setError("Preencha todos os campos para cadastrar um novo caso");

    try{
      await api.post('/incidents', data, {
        headers: {Authorization: ong_id}
      });
        history.push('/profile');
        
    }catch(e) {
      setError("Houve um erro ao cadastrar novo caso, tente novamente");
    }
  }

  return (
    <Container>
      <Content>
        <Section>
          <img src={logo} alt="Be the Hero"/>
          <h1>Cadastrar novo caso</h1>
          <p>Descreva o caso detalhadamente para encontrar um herói em resolver isso.</p>
          <Link to="/profile">
            <FiArrowLeft/>
            Voltar para o seu perfil
          </Link>
        </Section>

        <Form onSubmit={handleSubmit}>
          <Input type="text" placeholder="Titulo do caso" onChange={e => setTitle(e.target.value)}/>
          <TextArea type="email" placeholder="Descrição"  onChange={e => setDescription(e.target.value)}/>
          <Input type="text" placeholder="Valor em reais" onChange={e => setValue(e.target.value)} />
    
          <Button>Cadastrar</Button>
          {error && errorNotify(error)}
          <ToastContainer/>
        </Form>

      </Content>
    </Container>
  );
}
