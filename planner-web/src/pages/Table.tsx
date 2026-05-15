export function Table() {
  return (
    <div className="w-full">
      {/* MOBILE: Visual de Card (idêntico ao seu print) */}
      <div className="md:hidden space-y-4">
        <div className="overflow-hidden rounded-lg border border-gray-300 shadow-sm">
          {/* Cabeçalho do Card (Preto) */}
          <div className="bg-[#1a1a1a] p-3">
            <h3 className="text-white font-bold text-lg">Serviço</h3>
          </div>
          
          {/* Corpo do Card (Linhas) */}
          <div className="bg-white divide-y divide-gray-200">
            <div className="p-3 flex gap-2">
              <span className="font-semibold text-gray-600">Data:</span>
              <span className="text-gray-800">15/05/2026</span>
            </div>
            <div className="p-3 flex gap-2">
              <span className="font-semibold text-gray-600">Hora:</span>
              <span className="text-gray-800">14:00</span>
            </div>
            <div className="p-3 flex gap-2">
              <span className="font-semibold text-gray-600">Local:</span>
              <span className="text-gray-800">Colombo</span>
            </div>
            <div className="p-3 flex gap-2">
              <span className="font-semibold text-gray-600">Client:</span>
              <span className="text-gray-800">Gilson Ramos</span>
            </div>
          </div>
        </div>
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
            <tr className="hover:bg-gray-50 transition-colors">
              <td className="px-6 py-4 text-gray-900 font-medium">Corte Degradê</td>
              <td className="px-6 py-4">15/05/2026</td>
              <td className="px-6 py-4">14:00</td>
              <td className="px-6 py-4">Colombo</td>
              <td className="px-6 py-4">Gilson Ramos</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}