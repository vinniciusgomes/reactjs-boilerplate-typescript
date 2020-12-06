import React from 'react';
import { render } from '@testing-library/react';

import Dashboard from '.';

describe('Dashboard screen', () => {
  it('should be able to render screen', () => {
    const { getAllByText } = render(<Dashboard />);

    expect(getAllByText('Reference Architecture - ReactJS')).toBeTruthy();
  });
});
