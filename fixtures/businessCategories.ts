export type Category = 'snap' | 'studio' | 'hall' | 'dress' | 'hair' | 'suit' | 'bouquet';

interface BusinessCategory {
  id: number;
  name: string;
  category: Category;
}

const businessCategories: BusinessCategory[] = [
  { id: 1, name: 'Snap', category: 'snap' },
  { id: 2, name: 'Studio', category: 'studio' },
  { id: 3, name: 'Hall', category: 'hall' },
  { id: 4, name: 'Dress', category: 'dress' },
  { id: 5, name: 'Hair, Make-up', category: 'hair' },
  { id: 6, name: 'Suit', category: 'suit' },
  { id: 7, name: 'Bouquet', category: 'bouquet' },
];

export default businessCategories;
