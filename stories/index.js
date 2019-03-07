import React from 'react';
import { storiesOf } from '@storybook/react';
import { Button } from '@storybook/react/demo';

storiesOf('Button', module)
  .add('with text', () => (
    <Button>Hello Button</Button>
  ))
  .add('with something', () => (
    <Button><span role="img" aria-label="so cool">Another Button</span></Button>
  ));   