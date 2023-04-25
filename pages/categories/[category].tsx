import { useEffect, useState } from 'react';

import { useRouter } from 'next/router';

import CategoriesList from '@/components/CategoriesList';

import { getSitesByCategory } from '@/services/api';

import type { Site } from '@/types';
import Sites from '@/components/Sites';

export default function Category() {
  const [state, setState] = useState<{ currentCategory: string; sites:Site[] }>({
    currentCategory: '',
    sites: [],
  });
  const router = useRouter();

  const { category } = router.query;
  const { sites, currentCategory } = state;

  async function fetchSitesByCategory(categoryValue: string): Promise<Site[]> {
    const { siteCategoryKeyword } = await getSitesByCategory(categoryValue);

    return siteCategoryKeyword.map(({
      site: {
        _id: id,
        link,
        name,
        price,
        thumbnail,
      },
    }) => ({
      id, link, name, price, thumbnail,
    }));
  }

  useEffect(() => {
    const categoryValue = typeof category === 'string' ? category : '';

    if (!categoryValue) return;

    setState((prevState) => ({ ...prevState, currentCategory: categoryValue }));

    fetchSitesByCategory(categoryValue).then((siteCategoryKeyword) => {
      setState((prevState) => ({ ...prevState, sites: siteCategoryKeyword }));
    });
  }, [category]);

  return (
    <div className="m-auto max-w-7xl px-3">
      <CategoriesList currentCategory={currentCategory} />
      <Sites sites={sites} />
    </div>
  );
}
