import Image from 'next/image';

import styled from '@emotion/styled';

import type { SiteByKeyword } from '@/types';

const SubInformation = styled.div({
  '&span:not(:last-of-type)::after': {
    content: '"|"',
    margin: '0 6px',
  },
});

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
            {siteCategoryKeyword.map(({
              id: _id, category, name, price, link, thumbnail,
            }) => (
              <li key={_id}>
                <a href={link} target="_blank" rel="noreferrer">
                  <div className="aspect-video overflow-hidden relative mb-4">
                    <Image src={thumbnail} alt="site thumbnail" fill className="object-cover" />
                  </div>
                </a>
                <a href={link} target="_blank" rel="noreferrer">
                  <h3 className="paragraph-16">{name}</h3>
                </a>
                <SubInformation className="text-neutral-600 text-xs mt-1.5">
                  <span>{category}</span>
                  <span>{price}</span>
                </SubInformation>
              </li>
            ))}
          </ul>
        </li>
      ))}
    </ul>
  );
}
