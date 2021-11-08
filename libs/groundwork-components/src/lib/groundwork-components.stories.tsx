import { Story, Meta } from '@storybook/react';
import {
  GroundworkComponents,
  GroundworkComponentsProps,
} from './groundwork-components';

export default {
  component: GroundworkComponents,
  title: 'GroundworkComponents',
} as Meta;

const Template: Story<GroundworkComponentsProps> = (args) => (
  <GroundworkComponents {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
