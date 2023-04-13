import { useEffect } from 'react';

import CategoriesList from '@/components/CategoriesList';

export default function Home() {
  useEffect(() => {
    async function getSitesByKeyword() {
      const url = `${process.env.NEXT_PUBLIC_API_HOST}/keywords`;
      const response = await fetch(url);
      const data = await response.json();

      return data;
    }

    // getSitesByKeyword();
  }, []);

  return (
    <div className="flex w-full justify-center">
      <CategoriesList />
    </div>
  );
}
