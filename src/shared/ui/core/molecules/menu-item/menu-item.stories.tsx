import { ComponentMeta, ComponentStory } from '@storybook/react-native';

import { MenuItem } from './menu-item';
import { Icons } from '../../atoms';

const Meta: ComponentMeta<typeof MenuItem> = {
  title: 'ui/molecules/MenuItem',
  component: MenuItem,
  args: {
    title: 'Настройки',
  },
  argTypes: {
    onPress: { action: 'onPress' },
  },
};

export default Meta;

export const Default: ComponentStory<typeof MenuItem> = args => (
  <MenuItem
    {...args}
    left={<Icons.Settings />}
    right={<Icons.ChevronRight />}
  />
);
