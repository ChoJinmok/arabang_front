import { render } from '@testing-library/react';

import Header from '@/components/Header';

describe('Header', () => {
  const accessToken = '';
  const refreshToken = '';
  const setTokenData = jest.fn();

  it('renders kakao login button', () => {
    const { queryByText, queryByTestId } = render(
      <Header accessToken={accessToken} refreshToken={refreshToken} setTokenData={setTokenData} />,
    );

    expect(queryByText('카카오 로그인')).not.toBeNull();
    expect(queryByTestId('comment-icon')).not.toBeNull();
  });
});
