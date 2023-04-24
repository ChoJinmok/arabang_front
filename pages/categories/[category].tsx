import { useEffect, useState } from 'react';

import { useRouter } from 'next/router';

import CategoriesList from '@/components/CategoriesList';

import { getSitesByCategory } from '@/services/api';

export default function Category() {
  const [currentCategory, setCurrentCategory] = useState('');
  const router = useRouter();
  const { category } = router.query;

  useEffect(() => {
    const categoryValue = typeof category === 'string' ? category : '';

    setCurrentCategory(categoryValue);

    getSitesByCategory(categoryValue);
  }, [category]);

  return (
    <div className="flex w-full justify-center">
      <CategoriesList currentCategory={currentCategory} />
    </div>
  );
}
