import { ContractInterface } from 'interfaces/contract';
import { UserInterface } from 'interfaces/user';
import { JobInterface } from 'interfaces/job';
import { GetQueryInterface } from 'interfaces';

export interface ApplicationInterface {
  id?: string;
  created_at?: any;
  updated_at?: any;
  freelancer_id: string;
  job_id: string;
  contract?: ContractInterface[];
  user?: UserInterface;
  job?: JobInterface;
  _count?: {
    contract?: number;
  };
}

export interface ApplicationGetQueryInterface extends GetQueryInterface {
  id?: string;
  freelancer_id?: string;
  job_id?: string;
}
