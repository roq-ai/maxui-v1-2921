interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
  getQuoteUrl: string;
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Owner'],
  customerRoles: ['Freelancer'],
  tenantRoles: ['Owner', 'Recruiter'],
  tenantName: 'Company',
  applicationName: 'Maxui v1',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: ['Manage own contracts', 'Apply to jobs', 'Manage own profile', 'View companies'],
  ownerAbilities: ['Manage contracts', 'Manage applications', 'Manage jobs', 'Manage user profiles'],
  getQuoteUrl: 'https://app.roq.ai/proposal/63dcf78a-cd50-422b-ac36-8979feefabf6',
};
