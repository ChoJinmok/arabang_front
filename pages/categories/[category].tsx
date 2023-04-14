import { useEffect } from 'react';

import { useRouter } from 'next/router';

import CategoriesList from '@/components/CategoriesList';

import { getSitesByCategory } from '@/services/api';

export default function Categories() {
  const router = useRouter();
  const { category } = router.query;

  useEffect(() => {
    // getSitesByCategory(category);
  }, [category]);

  return (
    <div className="flex w-full justify-center">
      <CategoriesList />
      <h1>ca</h1>
    </div>
  );
}
