const mapping: Record<string, string> = {
  applications: 'application',
  companies: 'company',
  contracts: 'contract',
  'freelancer-profiles': 'freelancer_profile',
  jobs: 'job',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
