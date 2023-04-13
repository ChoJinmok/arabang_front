import styled from '@emotion/styled';

import { useRouter } from 'next/router';

import businessCategories from '@/fixtures/businessCategories';

import type { Category } from '@/fixtures/businessCategories';

const Categories = styled.ul({
  '& li:not(:last-of-type)::after': {
    content: '""',
    margin: '10px',
  },
});

export default function CategoriesList() {
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

  return (
    <Categories className="flex">
      {businessCategories.map(({ id, name, category }) => (
        <li key={id}>
          <button className="cursor" onClick={handleBusinessCategoryClick(category)} type="button">{name}</button>
        </li>
      ))}
    </Categories>
  );
}
