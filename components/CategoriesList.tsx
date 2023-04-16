import styled from '@emotion/styled';

import { useRouter } from 'next/router';

import businessCategories from '@/fixtures/businessCategories';

import type { Category } from '@/fixtures/businessCategories';

const Categories = styled.ul({
  '& li:not(:last-of-type)': {
    marginRight: '50px',
  },
});

interface ButtonProps {
  isActive: boolean;
}

const Button = styled.button(({ isActive }: ButtonProps) => ({
  transition: 'opacity ease-in-out 0.2s',
  ...(isActive && {
    color: 'rgb(14 165 233)',
    fontWeight: 'bold',
  }),
  '&:hover': {
    opacity: isActive ? 1 : 0.7,
  },
  '&::after': {
    content: 'attr(title)',
    display: 'block',
    height: '0px',
    fontWeight: 'bold',
    visibility: 'hidden',
  },
}));

interface CategoriesListProps {
  currentCategory: string;
}

export default function CategoriesList({ currentCategory }: CategoriesListProps) {
  const router = useRouter();

  function handleBusinessCategoryClick(category: Category) {
    return () => {
      router.push(`/categories/${category}`);
    };
  }

  return (
    <Categories className="flex">
      {businessCategories.map(({ id, name, category }) => (
        <li key={id}>
          <Button
            title={name}
            className="cursor text-lg"
            onClick={handleBusinessCategoryClick(category)}
            type="button"
            isActive={category === currentCategory}
          >
            {name}
          </Button>
        </li>
      ))}
    </Categories>
  );
}
