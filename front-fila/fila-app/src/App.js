import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { Container, AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import ClienteForm from './components/ClienteForm';
import StatusCliente from './components/StatusCliente';
import VerFila from './components/VerFila';
import VerFilaFuncionario from './components/VerFilaFuncionario';
import io from 'socket.io-client';

const socket = io('http://localhost:3333');

const App = () => {
  return (
    <Router>
      <AppBar position="static">
        <Toolbar style={{ justifyContent: 'space-between', background: 'rgb(63, 37, 13)',height: '110px'}}>
          <Box sx={{ display: 'flex' }}>
            <Button id="buttonCliente" color="inherit" component={Link} to="/cliente">CLIENTE</Button>
          </Box>
          <Typography
            variant="h4"
            component="div"
            sx={{ fontFamily: 'Josefin-Sans', fontSize: '2rem', color: 'white', textAlign: 'center', flexGrow: 1 }}
          >
          <Typography variant='h4' id='tituloSGF'>SISTEMA DE GERENCIAMENTO DE FILA</Typography> 
          </Typography>
          <Box sx={{ display: 'flex' }}>
            <Button id='buttonFuncionario' color="inherit" component={Link} to="/funcionario">FUNCIONÁRIO</Button>
          </Box>
        </Toolbar>
      </AppBar>
      <Container>
        <Routes>
          <Route path="/cliente/*" element={<ClienteView />} />
          <Route path="/funcionario/*" element={<FuncionarioView />} />
        </Routes>
      </Container>
    </Router>
  );
};

const ClienteView = () => (
  <>
    <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, marginTop: 2 }}>
      <Button style={{color: '#56290F'}} className='status-cadastrar' component={Link} to="/cliente/cadastrar">Cadastrar Cliente</Button>
      <Button className='status-cadastrar' style={{color: '#56290F'}} component={Link} to="/cliente/status">Status Cliente</Button>
    </Box>
    <Routes>
      <Route path="cadastrar" element={<ClienteForm socket={socket} />} />
      <Route path="status" element={<StatusCliente />} />
    </Routes>
    <VerFila />
  </>
);

const FuncionarioView = () => (
  <VerFilaFuncionario />
);

export default App;