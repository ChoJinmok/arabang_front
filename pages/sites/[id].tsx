import Image from 'next/image';

import BlackButton from '@/components/sites/BlackButton';

export default function Site() {
  return (
    <>
      <header className="flex justify-between mb-10">
        <button type="button">
          <Image src="/icons/arrow-left.svg" alt="left arrow icon" width={40} height={40} />
        </button>

        <div className="flex gap-2">
          <BlackButton name="arrow-up-right" width={24} height={24} />
          <BlackButton name="bookmark" width={24} height={24} />
        </div>
      </header>
      <h1>상세페이지</h1>
    </>
  );
}
