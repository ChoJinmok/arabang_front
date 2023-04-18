import type { SiteByKeyword } from '@/types';

interface SitesByKeywordProps {
  sites: SiteByKeyword[];
}

export default function SitesByKeyword({ sites }:SitesByKeywordProps) {
  return (
    <ul>
      {sites.map(({ id, keyword, siteCategoryKeyword }) => (
        <li key={id}>
          <h2>{keyword}</h2>
          <ul>
            {siteCategoryKeyword.map(({
              id: _id, category, name, price, link, thumbnail,
            }) => (
              <li key={_id}>
                <h3>{name}</h3>
                <span>{category}</span>
                <span>{price}</span>
                <span>{link}</span>
                <span>{thumbnail}</span>
              </li>
            ))}
          </ul>
        </li>
      ))}
    </ul>
  );
}
