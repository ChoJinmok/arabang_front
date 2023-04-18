import type { SiteByKeyword } from '@/types';

export function updateSitesByKeyword(sitesByKeyword: SiteByKeyword[]) {
  return {
    type: 'UPDATE_SITES_BY_KEYWORD',
    payload: { sitesByKeyword },
  };
}

export type AppAction = ReturnType<typeof updateSitesByKeyword>;
