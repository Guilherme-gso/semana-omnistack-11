import React, {useState, useEffect} from 'react';
import { api } from '../../services/api';
import { Link, useHistory } from 'react-router-dom';
import { Container, Header, List, ListItem } from './styles';
import { FiPower, FiTrash2 } from 'react-icons/fi';
import { errorNotify } from '../../utils/error';
import { ToastContainer } from 'react-toastify';
import logo from '../../assets/logo.svg';
import 'react-toastify/dist/ReactToastify.min.css';

export default function Profile() {
  const [incidents, setIncidents] = useState([]);
  const ong_id = localStorage.getItem('id');
  const name = localStorage.getItem('name');
  const [error, setError] = useState([]);
  const history = useHistory();

  useState(() => {
    setError('');
  }, [error])

  async function loadIncidents () {
    const response = await api.get('/incidents');
    console.log(response.data);
    
    const { data } = response;

    setIncidents(data);
  } 

  async function handleRemove(id) {
    try {
      await api.delete(`/incidents/${id}`, {
        headers: {Authorization: ong_id }
      });
    
      const result = incidents.filter(incident => {
        return incident.id !== id;
      });

      setIncidents(result);
    }catch(e) {
      setError("Você não tem permissão para deletar esse item");
    }
  }

  function handleLogout() {
    localStorage.clear();
    history.push('/');
  }

  useEffect(() =>{
    loadIncidents();
  }, []);

  return (
    <Container>
      <Header>
        <img src={logo} alt="Be the Hero"/>
        <span>Bem vindo, {name} </span>

        <Link to="/new">Cadastrar novo caso</Link>
        <button onClick={handleLogout}>
          <FiPower size={18} color="#E02041" />
        </button>
      </Header>
    
        <h1>Casos cadastrados</h1>
        <List>
          {incidents.length > 0 ? incidents.map(incident => (
              <ListItem key={incident.id}>
              <strong>Caso</strong>
              <p>{incident.title}</p>
              
              <strong>Descrição</strong>
              <p>{incident.description}</p>

              <strong>Valor</strong>
              <p>R${incident.value}</p>

              <button onClick={() => handleRemove(incident.id)}>
                <FiTrash2 size={20} color="#a8a8b3"/>
              </button>
            </ListItem> 
          )): <strong>Nenhum caso registrado até o momento</strong> }
        </List>

        {error && errorNotify(error)}
        <ToastContainer />
        
    </Container>
  );
}
