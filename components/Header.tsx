import Link from 'next/link';

import KakaoLoginButton from './KakaoLoginButton';

interface HeaderProps {
  accessToken: string;
}

export default function Header({ accessToken }: HeaderProps) {
  return (
    <header className="flex items-center flex-row-reverse m-auto relative h-28 px-3 max-w-7xl">
      <Link href="/" className="w-60 absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2">
        <span>제주 웨딩의 모든 것</span>
        <h1 className="text-right text-5xl font-semibold">Arabang</h1>
      </Link>
      <div>
        {!accessToken && <KakaoLoginButton />}
      </div>
    </header>
  );
}
