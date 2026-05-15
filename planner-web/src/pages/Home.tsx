import { Table } from './Table';

export function Home() {
  return (
    <main className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="w-full mb-3 bg-white p-6 rounded-lg shadow-sm border border-gray-200">
           <h1 className="text-2xl font-bold text-gray-900 mb-6">Dashboard de Agendamentos</h1>
           
           {/* Chamando o componente para o valor ser lido e aparecer na tela */}
           <Table />
        </div>
      </div>
    </main>
  );
}