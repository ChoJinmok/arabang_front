import { useEffect } from 'react';

import { useRouter } from 'next/router';

import styled from '@emotion/styled';

import businessCategories from '@/fixtures/businessCategories';

import type { Category } from '@/fixtures/businessCategories';

const Categories = styled.ul({
  '& li:not(:last-of-type)::after': {
    content: '""',
    margin: '10px',
  },
});

export default function Home() {
  const router = useRouter();

  function handleBusinessCategoryClick(category: Category) {
    return async () => {
      const categoryUrl = `/categories/${category}`;

      router.push(categoryUrl);

      const url = `${process.env.NEXT_PUBLIC_API_HOST}${categoryUrl}`;
      const response = await fetch(url);
      const data = await response.json();

      return data;
    };
  }

  useEffect(() => {
    async function getSitesByKeyword() {
      const url = `${process.env.NEXT_PUBLIC_API_HOST}/keywords`;
      const response = await fetch(url);
      const data = await response.json();

      return data;
    }

    getSitesByKeyword();
  }, []);

  return (
    <div className="flex w-full justify-center">
      <Categories className="flex">
        {businessCategories.map(({ id, name, category }) => (
          <li key={id}>
            <button className="cursor" onClick={handleBusinessCategoryClick(category)} type="button">{name}</button>
          </li>
        ))}
      </Categories>
    </div>
  );
}
