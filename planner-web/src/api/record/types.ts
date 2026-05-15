export interface IRecord {
  id: number;
  service: string;
  customer: string;
  location: string;
  dateTime: string;
}

export interface IRecordResponse {
  content: IRecord[];
}