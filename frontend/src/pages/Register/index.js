import React, {useState, useEffect} from 'react';
import { api  } from '../../services/api';
import { Link } from 'react-router-dom';
import { Container, Content, Section, Form, Group } from './styles';
import { Input, Button } from '../Login/styles';
import { FiArrowLeft } from 'react-icons/fi';
import { errorNotify } from '../../utils/error';
import { ToastContainer } from 'react-toastify';
import logo from '../../assets/logo.svg';
import 'react-toastify/dist/ReactToastify.min.css';

export default function Register({history}) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [city, setCity] = useState('');
  const [uf, setUf] = useState('');
  const [error, setError] = useState('');
  const [acess, setAcess] = useState('');

  useEffect(() => {
    setError('');
  }, [error]);

  async function handleSubmit (e) {
    e.preventDefault(e);
    if(!name || !email || !whatsapp || !city || !uf) 
      return setError('Preencha todos os campos para e cadastrar');
      try {
        const response = await api.post('/ongs', {name, email, whatsapp, city, uf});
        const { id } = response.data;
        setAcess(`Ong cadastrada, para acessar use seu id de acesso na tela de login: ${id}`);
        
      }catch{
        return setError('Houve um erro a se cadastrar, tente novamente');
      }
  }

  return (
    <Container>
      <Content>
        <Section>
          <img src={logo} alt="Be the Hero"/>
          <h1>Faça seu cadastro</h1>
          <p>Faça seu cadastro, entre na plataforma e ajude pessoas a encontrarem os casos de sua ONG.</p>
          <Link to="/">
            <FiArrowLeft/>
            Voltar
          </Link>
        </Section>

        <Form onSubmit={handleSubmit}>
          <Input type="text" placeholder="Nome da ONG" onChange={e => setName(e.target.value)}/>
          <Input type="email" placeholder="Email" onChange={e => setEmail(e.target.value)}/>
          <Input type="text" placeholder="WhatsApp" onChange={e => setWhatsapp(e.target.value)}/>
          
          <Group>
            <Input type="text" placeholder="Cidade" onChange={e => setCity(e.target.value)}/>
            <Input type="text" placeholder="UF" style={{width: 80}} onChange={e => setUf(e.target.value)}/>
          </Group>

          <Button>Cadastrar</Button>
          {error && errorNotify(error)}
          {acess &&
            <strong style={{color: '000'}}>
                {acess}
            </strong>
          }
          <ToastContainer/>
        </Form>

      </Content>
    </Container>
  );
}
