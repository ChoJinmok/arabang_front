export type Category = 'snap' | 'studio' | 'wedding-hall' | 'dress' | 'hair/makeup' | 'suit' | 'bouquet' | 'film';

interface BusinessCategory {
  id: number;
  name: string;
  category: Category;
}

const businessCategories: BusinessCategory[] = [
  { id: 1, name: '.Snap', category: 'snap' },
  { id: 2, name: '.Studio', category: 'studio' },
  { id: 3, name: '.Hall', category: 'wedding-hall' },
  { id: 4, name: '.Dress', category: 'dress' },
  { id: 5, name: '.Hair & Make-up', category: 'hair/makeup' },
  { id: 6, name: '.Suit', category: 'suit' },
  { id: 7, name: '.Bouquet', category: 'bouquet' },
  { id: 8, name: '.Film', category: 'film' },
];

export default businessCategories;
