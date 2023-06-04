import type { Site as SiteType } from '@/types';

import Site from './Site';

interface SitesByKeywordProps {
  sites: SiteType[];
}

export default function Sites({ sites }:SitesByKeywordProps) {
  return (
    <ul className="mt-14 grid gap-y-8 gap-x-7 grid-cols-3">
      {sites.map((site) => <Site key={site.id} site={site} />)}
    </ul>
  );
}
