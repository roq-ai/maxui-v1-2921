import queryString from 'query-string';
import { FreelancerProfileInterface, FreelancerProfileGetQueryInterface } from 'interfaces/freelancer-profile';
import { fetcher } from 'lib/api-fetcher';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getFreelancerProfiles = async (
  query?: FreelancerProfileGetQueryInterface,
): Promise<PaginatedInterface<FreelancerProfileInterface>> => {
  return fetcher('/api/freelancer-profiles', {}, query);
};

export const createFreelancerProfile = async (freelancerProfile: FreelancerProfileInterface) => {
  return fetcher('/api/freelancer-profiles', { method: 'POST', body: JSON.stringify(freelancerProfile) });
};

export const updateFreelancerProfileById = async (id: string, freelancerProfile: FreelancerProfileInterface) => {
  return fetcher(`/api/freelancer-profiles/${id}`, { method: 'PUT', body: JSON.stringify(freelancerProfile) });
};

export const getFreelancerProfileById = async (id: string, query?: GetQueryInterface) => {
  return fetcher(`/api/freelancer-profiles/${id}${query ? `?${queryString.stringify(query)}` : ''}`, {});
};

export const deleteFreelancerProfileById = async (id: string) => {
  return fetcher(`/api/freelancer-profiles/${id}`, { method: 'DELETE' });
};
