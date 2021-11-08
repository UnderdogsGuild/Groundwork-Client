import { render } from '@testing-library/react';

import GroundworkComponents from './groundwork-components';

describe('GroundworkComponents', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<GroundworkComponents />);
    expect(baseElement).toBeTruthy();
  });
});
