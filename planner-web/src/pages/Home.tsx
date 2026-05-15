import { Table } from './Table';

export function Home() {
  return (
    // Mobile: py-4 px-2 | Desktop (sm em diante): py-8 px-4/8
    <main className="min-h-screen bg-gray-50 py-4 px-2 sm:py-8 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Mobile: p-4 (menos espaço) | Desktop: p-6 */}
        <div className="w-full mb-3 bg-white p-4 sm:p-6 rounded-lg shadow-sm border border-gray-200">
           <h1 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">
             Dashboard de Agendamentos
           </h1>
           
           <Table />
        </div>
      </div>
    </main>
  );
}