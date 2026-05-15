import { api } from '../../services/api'; // Importa sua instância pronta
import type { IRecordResponse } from './types';


export const getRecords = async (): Promise<IRecordResponse> => {
  // O <IRecordResponse> diz ao Axios exatamente o que vai voltar do back
  const { data } = await api.get<IRecordResponse>('/records'); 
  return data;
};