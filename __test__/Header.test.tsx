import { render } from '@testing-library/react';

import Header from '@/components/Header';

describe('Header', () => {
  it('renders kakao login button', () => {
    const { queryByText, queryByTestId } = render(<Header />);

    expect(queryByText('카카오 로그인')).not.toBeNull();
    expect(queryByTestId('comment-icon')).not.toBeNull();
  });
});
