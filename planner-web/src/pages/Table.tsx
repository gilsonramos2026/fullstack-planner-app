import { useEffect, useState } from 'react';
import { getRecords } from '../api/record';
import { IRecord } from '../api/record/types';

export function Table() {
  const [records, setRecords] = useState<IRecord[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadData() {
      try {
        const data = await getRecords();
        setRecords(data.content);
      } catch (error) {
        console.error("Erro ao buscar agendamentos:", error);
      } finally {
        setLoading(false);
      }
    }
    loadData();
  }, []);

  if (loading) return <div className="text-center py-10">Carregando agendamentos...</div>;

  return (
    <div className="w-full">
      {/* MOBILE: Visual de Card */}
      <div className="md:hidden space-y-4">
        {records.map((item) => (
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

      {/* DESKTOP: Tabela tradicional */}
      <div className="hidden md:block overflow-hidden rounded-lg border border-gray-200 shadow-sm">
        <table className="w-full text-left text-sm">
          <thead className="bg-[#1a1a1a] text-white uppercase text-xs">
            <tr>
              <th className="px-6 py-4 font-bold">Serviço</th>
              <th className="px-6 py-4 font-bold">Local</th>
              <th className="px-6 py-4 font-bold">Cliente</th>
              <th className="px-6 py-4 font-bold">Data/Hora</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 bg-white">
            {records.map((item) => (
              <tr key={item.id} className="hover:bg-gray-50 transition-colors">
                <td className="px-6 py-4 text-gray-900 font-medium">{item.service}</td>
                <td className="px-6 py-4">{item.location}</td>
                <td className="px-6 py-4">{item.customer}</td>
                <td className="px-6 py-4">{item.dateTime}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}