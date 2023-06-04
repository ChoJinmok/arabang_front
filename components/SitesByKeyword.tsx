import type { SiteByKeyword } from '@/types';

import Sites from './Sites';

interface SitesByKeywordProps {
  sites: SiteByKeyword[];
}

export default function SitesByKeyword({ sites }:SitesByKeywordProps) {
  return (
    <ul className="mt-14">
      {sites.map(({ id, keyword, siteCategoryKeyword }) => (
        <li key={id} className="mt-14 first-of-type:mt-0">
          <h2 className="w-fit px-7 py-4 rounded-lg bg-neutral-900 text-white heading-6 mb-6">{keyword}</h2>
          <Sites sites={siteCategoryKeyword} />
        </li>
      ))}
    </ul>
  );
}
