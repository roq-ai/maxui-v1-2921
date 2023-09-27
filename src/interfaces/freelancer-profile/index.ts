import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface FreelancerProfileInterface {
  id?: string;
  created_at?: any;
  updated_at?: any;
  freelancer_id: string;
  skills?: string;
  portfolio_url?: string;
  experience_years?: number;

  user?: UserInterface;
  _count?: {};
}

export interface FreelancerProfileGetQueryInterface extends GetQueryInterface {
  id?: string;
  freelancer_id?: string;
  skills?: string;
  portfolio_url?: string;
}
