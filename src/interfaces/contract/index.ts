import { UserInterface } from 'interfaces/user';
import { ApplicationInterface } from 'interfaces/application';
import { GetQueryInterface } from 'interfaces';

export interface ContractInterface {
  id?: string;
  created_at?: any;
  updated_at?: any;
  freelancer_id: string;
  application_id: string;

  user?: UserInterface;
  application?: ApplicationInterface;
  _count?: {};
}

export interface ContractGetQueryInterface extends GetQueryInterface {
  id?: string;
  freelancer_id?: string;
  application_id?: string;
}
