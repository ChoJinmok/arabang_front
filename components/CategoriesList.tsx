import styled from '@emotion/styled';

import { useRouter } from 'next/router';

import businessCategories from '@/fixtures/businessCategories';

import type { Category } from '@/fixtures/businessCategories';

const Categories = styled.ul({
  display: 'flex',
  justifyContent: 'space-evenly',
  width: '100%',
});

interface ButtonProps {
  isActive: boolean;
}

const Button = styled.button(({ isActive }: ButtonProps) => ({
  transition: 'all ease-in-out 0.2s',
  ...(isActive && {
    color: 'rgb(14 165 233)',
    fontWeight: 'bold',
  }),
  '&:hover': {
    color: 'rgb(14 165 233)',
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
  currentCategory?: string;
}

export default function CategoriesList({ currentCategory }: CategoriesListProps) {
  const router = useRouter();

  function handleBusinessCategoryClick(category: Category) {
    return () => {
      router.push(`/categories/${category}`);
    };
  }

  return (
    <Categories>
      {businessCategories.map(({ id, name, category }) => (
        <li key={id}>
          <Button
            title={name}
            className="cursor text-xl"
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

CategoriesList.defaultProps = {
  currentCategory: '',
};
