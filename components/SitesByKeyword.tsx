import type { SiteByKeyword } from '@/types';

import Site from './Site';

interface SitesByKeywordProps {
  sites: SiteByKeyword[];
}

export default function SitesByKeyword({ sites }:SitesByKeywordProps) {
  return (
    <ul>
      {sites.map(({ id, keyword, siteCategoryKeyword }) => (
        <li key={id} className="mt-14">
          <h2 className="w-fit px-7 py-4 rounded-lg bg-neutral-900 text-white heading-6 mb-6">{keyword}</h2>
          <ul className="grid gap-y-8 gap-x-7 grid-cols-3">
            {siteCategoryKeyword.map((site) => <Site key={site.id} site={site} />)}
          </ul>
        </li>
      ))}
    </ul>
  );
}
