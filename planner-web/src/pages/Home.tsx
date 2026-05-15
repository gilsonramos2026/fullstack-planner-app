// src/containers/Home/index.tsx

export function Home() {
  return (
    <main className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      {/* Equivalente ao Container, Row e Col do Bootstrap */}
      <div className="max-w-7xl mx-auto flex justify-center">
        <div className="w-full mb-3 bg-white p-6 rounded-lg shadow-sm border border-gray-200">
           {/* Conteúdo da Home virá aqui */}
           <h1 className="text-2xl font-bold text-gray-900">Dashboard de Agendamentos</h1>
        </div>
      </div>
    </main>
  );
}