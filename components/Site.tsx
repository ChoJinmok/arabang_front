import Image from 'next/image';

import styled from '@emotion/styled';

import type { Site as SiteType } from '@/types';

const SubInformation = styled.div({
  '&span:not(:last-of-type)::after': {
    content: '"|"',
    margin: '0 6px',
  },
});

interface SiteProps {
  site: SiteType;
}

export default function Site({
  site: {
    link, thumbnail, name, category, price,
  },
}:SiteProps) {
  return (
    <li>
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
  );
}
