import { useEffect } from 'react';

import { useRouter } from 'next/router';

import styled from '@emotion/styled';

import businessCategories from '@/fixtures/businessCategories';

import type { Category } from '@/fixtures/businessCategories';

const Categories = styled.ul({
  '& li:not(:last-of-type)::after': {
    content: '"/"',
    margin: '10px',
  },
});

export default function Home() {
  const router = useRouter();

  function handleBusinessCategoryClick(category: Category) {
    return () => {
      router.push(`?category=${category}`);
    };
  }

  useEffect(() => {
    console.log(router.query.category);
  }, [router.query.category]);

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
