import { ApplicationInterface } from 'interfaces/application';
import { CompanyInterface } from 'interfaces/company';
import { GetQueryInterface } from 'interfaces';

export interface JobInterface {
  id?: string;
  created_at?: any;
  updated_at?: any;
  company_id?: string;
  name: string;
  application?: ApplicationInterface[];
  company?: CompanyInterface;
  _count?: {
    application?: number;
  };
}

export interface JobGetQueryInterface extends GetQueryInterface {
  id?: string;
  company_id?: string;
  name?: string;
}
