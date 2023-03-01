import { render } from '@testing-library/react';

import Header from '@/components/Header';

describe('Header', () => {
  it('renders kakao login button', () => {
    const { container } = render(<Header />);

    expect(container).toHaveTextContent('카카오 로그인');
  });
});
