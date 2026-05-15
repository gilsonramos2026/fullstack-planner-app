import { DesktopTable } from './DesktopTable'; // Se quiser manter separado
// OU FAÇA TUDO AQUI EMBAIXO:

export function Table() {
  return (
    <div className="w-full">
      {/* VERSÃO DESKTOP: Aparece em telas médias (md) para cima */}
      <div className="hidden md:block overflow-hidden rounded-xl border border-gray-200 shadow-sm">
        <table className="w-full text-left border-collapse">
          <thead className="bg-[#1a1a1a] text-white">
            <tr>
              <th className="px-6 py-4 font-semibold uppercase text-xs">Serviço</th>
              <th className="px-6 py-4 font-semibold uppercase text-xs">Data/Hora</th>
              <th className="px-6 py-4 font-semibold uppercase text-xs">Local</th>
              <th className="px-6 py-4 font-semibold uppercase text-xs text-right">Ações</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-100">
            <tr className="hover:bg-gray-50 transition-colors">
              <td className="px-6 py-4 text-gray-900 font-medium">Corte Degradê</td>
              <td className="px-6 py-4 text-gray-600">15/05/2026 - 14:00</td>
              <td className="px-6 py-4 text-gray-600">Unidade Colombo</td>
              <td className="px-6 py-4 text-right">
                <button className="text-blue-600 hover:underline font-medium">Editar</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* VERSÃO MOBILE: Aparece apenas em telas pequenas (até 767px) */}
      <div className="md:hidden space-y-4">
        <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm">
          <div className="flex justify-between items-start mb-2">
            <span className="text-xs font-bold uppercase text-gray-400">Serviço</span>
            <span className="bg-blue-100 text-blue-700 text-[10px] font-bold px-2 py-0.5 rounded">Agendado</span>
          </div>
          <p className="text-gray-900 font-bold mb-3">Corte Degradê</p>
          
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div>
              <span className="block text-gray-400 text-xs">Data/Hora</span>
              <span className="text-gray-700">15/05 - 14:00</span>
            </div>
            <div>
              <span className="block text-gray-400 text-xs">Local</span>
              <span className="text-gray-700">Colombo</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}