import { useEffect, useState } from 'react';
import { Table } from './Table';
import { getRecords } from '../api/record';
import type { IRecordResponse } from '../api/record/types';


export function Home() {
  // Estado para armazenar a resposta da API conforme a imagem
  const [recordResponse, setRecordResponse] = useState<IRecordResponse>();

  useEffect(() => {
    const returnedRecords = async () => {
      try {
        const data = await getRecords();
        setRecordResponse(data);
      } catch (error) {
        console.log(`erro: ${error}`);
      }
    };

    returnedRecords();
  }, []);

  return (
    <main className="min-h-screen bg-gray-50 py-4 px-2 sm:py-8 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="w-full mb-3 bg-white p-4 sm:p-6 rounded-lg shadow-sm border border-gray-200">
           <h1 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">
             Dashboard de Agendamentos
           </h1>
           
           {/* Passamos os dados para a sua Table única que gerencia Mobile/Desktop */}
           <Table data={recordResponse?.content || []} />
        </div>
      </div>
    </main>
  );
}