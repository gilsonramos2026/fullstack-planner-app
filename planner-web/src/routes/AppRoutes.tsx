import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { PATHS } from './paths';
// Importe suas páginas aqui
// import { HomePage } from '../pages/Home';

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={PATHS.HOME} element={<div>Tabela de Agendamentos</div>} />
        <Route path={PATHS.NEW_PLAN} element={<div>Formulário de Cadastro</div>} />
        <Route path={PATHS.EDIT_PLAN} element={<div>Edição de Agendamento</div>} />
        
        {/* Rota 404 - Pixel Perfect Error Page */}
        <Route path="*" element={<div>Página não encontrada</div>} />
      </Routes>
    </BrowserRouter>
  );
};