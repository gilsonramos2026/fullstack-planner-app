import { Link } from 'react-router-dom';

// Removendo o 'export default' e usando 'export function'
export function Menu() {
  return (
    <nav className="w-full bg-[#1a1a1a] text-white shadow-md mb-1">
      {/* Equivalente ao <Container> do Bootstrap */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* Equivalente ao <Navbar.Brand> */}
          <div className="flex-shrink-0">
            <Link to="/" className="text-xl font-bold tracking-tight text-white no-underline">
              Planner
            </Link>
          </div>

          {/* Equivalente ao <Nav className="me-auto"> + <Navbar.Collapse> */}
          <div className="hidden md:flex items-center gap-6">
            <Link 
              to="/" 
              className="text-sm font-medium text-gray-300 hover:text-white transition-colors no-underline"
            >
              Home
            </Link>
          </div>

          {/* Botão Hambúrguer (Equivalente ao <Navbar.Toggle>) */}
          <div className="md:hidden flex items-center">
            <button className="text-gray-400 hover:text-white">
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