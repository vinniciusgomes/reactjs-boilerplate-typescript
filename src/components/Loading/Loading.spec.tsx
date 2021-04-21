import { render } from '@testing-library/react';

import { Loading } from './Loading';

describe('<Loading />', () => {
  it('should render', () => {
    const component = render(<Loading />);
    expect(component).toBeTruthy();
  });
});
