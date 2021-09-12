import { Button } from '@material-ui/core';
import { createMount } from '@material-ui/core/test-utils';
import { Link } from 'react-router-dom';
import { MemoryRouter } from 'react-router-dom';
import React from 'react';

import ExplainPage from './ExplainPage';

describe('<ExplainPage />', () => {
  let mount;
  const proceedButton = (
    <Button
      madliberationid="proceed-from-explanation-button"
      variant="contained"
      color="primary"
      component={Link}
      to="/pick-script"
    >
      Proceed
    </Button>
  );
  beforeEach(() => {
    mount = createMount();
  });

  afterEach(() => {
    mount.cleanUp();
  });

  test('Should render an ExplainPage', () => {
    const wrapper = mount(
      <MemoryRouter>
        <ExplainPage />
      </MemoryRouter>
    );
    expect(wrapper.containsMatchingElement(<ExplainPage />)).toBe(true);
  });
  test('Should render a button-link to /pick-script', () => {
    const wrapper = mount(
      <MemoryRouter>
        <ExplainPage />
      </MemoryRouter>
    );
    expect(wrapper.containsMatchingElement(proceedButton)).toBe(true);
  });
});
