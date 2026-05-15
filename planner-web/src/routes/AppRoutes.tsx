import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { PATHS } from './paths';
import { Menu } from '../components/Menu'; // Importando seu Menu
import { Home } from '../pages/Home';
 // Importando sua Home

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      {/* O Menu fica aqui para ser fixo no topo de todas as rotas */}
      <Menu /> 

      <Routes>
        {/* Agora passamos o componente Home que tem o Tailwind */}
        <Route path={PATHS.HOME} element={<Home />} />
        
        <Route path={PATHS.NEW_PLAN} element={<div>Formulário de Cadastro</div>} />
        <Route path={PATHS.EDIT_PLAN} element={<div>Edição de Agendamento</div>} />
        
        <Route path="*" element={<div>Página não encontrada</div>} />
      </Routes>
    </BrowserRouter>
  );
};