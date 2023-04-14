import { useEffect } from 'react';

import CategoriesList from '@/components/CategoriesList';

import { getSitesByKeyword } from '@/services/api';

export default function Home() {
  useEffect(() => {
    // getSitesByKeyword();
  }, []);

  return (
    <div className="flex w-full justify-center">
      <CategoriesList />
    </div>
  );
}
