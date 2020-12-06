import React from 'react';
import { render } from '@testing-library/react';

import SignIn from '.';

describe('SignIn', () => {
  it('should be able to render screen', () => {
    const { getAllByText } = render(<SignIn />);

    expect(getAllByText('Public Page')).toBeTruthy();
  });
});
