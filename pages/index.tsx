import { useEffect, useCallback } from 'react';

import { useAppStore } from '@/store/reducers';

import CategoriesList from '@/components/CategoriesList';
import SitesByKeyword from '@/components/SitesByKeyword';

import { updateSitesByKeyword } from '@/store/actions';

import { getSitesByKeyword } from '@/services/api';

export default function Home() {
  const [state, dispatch] = useAppStore();

  const { sitesByKeyword } = state;

  const fetchSitesByKeyword = useCallback(async () => {
    const sites = await getSitesByKeyword();

    const convertedSites = sites.map(({ _id, keyword, siteCategoryKeyword }) => {
      const convertedSiteCategoryKeyword = siteCategoryKeyword.map(({
        _id: id,
        category: { title: category },
        site: {
          link, name, price, thumbnail,
        },
      }) => ({
        id, category, link, name, price, thumbnail,
      }));

      return {
        id: _id,
        keyword,
        siteCategoryKeyword: convertedSiteCategoryKeyword,
      };
    });

    dispatch(updateSitesByKeyword(convertedSites));
  }, [dispatch]);

  useEffect(() => {
    fetchSitesByKeyword();
  }, [fetchSitesByKeyword]);

  return (
    <>
      <CategoriesList />
      <video autoPlay loop muted className="aspect-video mt-5 w-full">
        <source src="https://player.vimeo.com/external/575736075.hd.mp4?s=3f22566c05f2204df03a5c8b01672db0c6b9fdfb&profile_id=172&oauth2_token_id=57447761" type="video/mp4" />
      </video>
      <SitesByKeyword sites={sitesByKeyword} />
    </>
  );
}
