import { useEffect } from 'react';

import { useRouter } from 'next/router';

import CategoriesList from '@/components/CategoriesList';

export default function Categories() {
  const router = useRouter();
  const { category } = router.query;

  useEffect(() => {
    async function getSitesByCategory() {
      const url = `${process.env.NEXT_PUBLIC_API_HOST}/categories/${category}`;
      const response = await fetch(url);
      const data = await response.json();

      return data;
    }

    // getSitesByCategory();
  }, [category]);

  return (
    <div className="flex w-full justify-center">
      <CategoriesList />
      <h1>ca</h1>
    </div>
  );
}
