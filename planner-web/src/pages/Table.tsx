import type { IRecord } from '../api/record/types';

// Removemos useState e useEffect pois a Home já gerencia o carregamento
export function Table({ data }: { data: IRecord[] }) {
  
  // Se não houver dados, exibe um feedback simples sem quebrar o layout
  if (!data || data.length === 0) {
    return <div className="p-4 text-center text-gray-500">Nenhum agendamento encontrado.</div>;
  }

  return (
    <div className="w-full">
      {/* MOBILE: Visual de Card (idêntico ao seu print) */}
      <div className="md:hidden space-y-4">
        {data.map((item) => (
          <div key={item.id} className="overflow-hidden rounded-lg border border-gray-300 shadow-sm">
            <div className="bg-[#1a1a1a] p-3">
              <h3 className="text-white font-bold text-lg">{item.service}</h3>
            </div>
            
            <div className="bg-white divide-y divide-gray-200">
              <div className="p-3 flex gap-2">
                <span className="font-semibold text-gray-600">Data:</span>
                <span className="text-gray-800">{item.dateTime.split(' ')[0]}</span>
              </div>
              <div className="p-3 flex gap-2">
                <span className="font-semibold text-gray-600">Hora:</span>
                <span className="text-gray-800">{item.dateTime.split(' ')[1] || '--:--'}</span>
              </div>
              <div className="p-3 flex gap-2">
                <span className="font-semibold text-gray-600">Local:</span>
                <span className="text-gray-800">{item.location}</span>
              </div>
              <div className="p-3 flex gap-2">
                <span className="font-semibold text-gray-600">Client:</span>
                <span className="text-gray-800">{item.customer}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* DESKTOP: Tabela tradicional (oculta no mobile) */}
      <div className="hidden md:block overflow-hidden rounded-lg border border-gray-200 shadow-sm">
        <table className="w-full text-left text-sm">
          <thead className="bg-[#1a1a1a] text-white uppercase text-xs">
            <tr>
              <th className="px-6 py-4 font-bold">Serviço</th>
              <th className="px-6 py-4 font-bold">Data</th>
              <th className="px-6 py-4 font-bold">Hora</th>
              <th className="px-6 py-4 font-bold">Local</th>
              <th className="px-6 py-4 font-bold">Cliente</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 bg-white">
            {data.map((item) => (
              <tr key={item.id} className="hover:bg-gray-50 transition-colors">
                <td className="px-6 py-4 text-gray-900 font-medium">{item.service}</td>
                <td className="px-6 py-4">{item.dateTime.split(' ')[0]}</td>
                <td className="px-6 py-4">{item.dateTime.split(' ')[1] || '--:--'}</td>
                <td className="px-6 py-4">{item.location}</td>
                <td className="px-6 py-4">{item.customer}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}