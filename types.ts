export interface Site {
  id: number;
  category?: string;
  link: string;
  name: string;
  price: string;
  thumbnail: string;
}

export interface SiteByKeyword {
  id: number;
  keyword: string;
  siteCategoryKeyword: Site[];
}
