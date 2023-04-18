import { useEffect, useCallback } from 'react';

import styled from '@emotion/styled';

import { useAppStore } from '@/store/reducers';

import CategoriesList from '@/components/CategoriesList';
import SitesByKeyword from '@/components/SitesByKeyword';

import { updateSitesByKeyword } from '@/store/actions';

import { getSitesByKeyword } from '@/services/api';

const Container = styled.div({
  maxWidth: '1194px',
});

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
    <Container className="m-auto">
      <CategoriesList />
      <SitesByKeyword sites={sitesByKeyword} />
    </Container>
  );
}
