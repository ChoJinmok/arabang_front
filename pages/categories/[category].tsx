import { useEffect } from 'react';

import { useRouter } from 'next/router';

import CategoriesList from '@/components/CategoriesList';

import { getSitesByCategory } from '@/services/api';

export default function Category() {
  const router = useRouter();
  const { category } = router.query;
  const currentCategory = typeof category === 'string' ? category : '';

  useEffect(() => {
    // getSitesByCategory(category);
  }, [category]);

  return (
    <div className="flex w-full justify-center">
      <CategoriesList currentCategory={currentCategory} />
    </div>
  );
}
