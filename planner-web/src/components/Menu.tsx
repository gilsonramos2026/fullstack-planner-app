import { Link } from 'react-router-dom';

// Named Export: export function (sem default)
export function Menu() {
  // Tradução das classes Bootstrap para Tailwind:
  // bg-dark -> bg-[#1a1a1a]
  // variant-dark -> text-white
  // expand-lg -> hidden md:flex (responsividade manual)
  // mb-1 -> mb-1 (4px)
  
  return (
    <nav className="w-full bg-[#1a1a1a] text-white shadow-md mb-1">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* Brand/Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="text-xl font-bold tracking-wider text-white no-underline">
              PLANNER<span className="text-blue-500">WEB</span>
            </Link>
          </div>

          {/* Nav Links (O que o expand-lg controlava) */}
          <div className="hidden md:flex items-center gap-6">
            <Link 
              to="/" 
              className="text-sm font-medium text-gray-300 hover:text-white transition-colors no-underline"
            >
              Home
            </Link>
            <Link 
              to="/planner" 
              className="text-sm font-medium text-gray-300 hover:text-white transition-colors no-underline"
            >
              Agendamentos
            </Link>
            
            {/* Botão de Ação Estilizado */}
            <Link 
              to="/novo" 
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded text-sm font-bold transition-all shadow-sm no-underline"
            >
              NOVO AGENDAMENTO
            </Link>
          </div>

          {/* Mobile Menu Button (Visível apenas em telas pequenas) */}
          <div className="md:hidden flex items-center">
            <button className="text-gray-400 hover:text-white focus:outline-none">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            </button>
          </div>

        </div>
      </div>
    </nav>
  );
}