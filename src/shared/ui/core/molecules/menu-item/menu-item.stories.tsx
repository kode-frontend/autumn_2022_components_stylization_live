import { ComponentMeta, ComponentStory } from '@storybook/react-native';

import { MenuItem } from './menu-item';
import { Icons } from '../../atoms';

const Meta: ComponentMeta<typeof MenuItem> = {
  title: 'ui/molecules/MenuItem',
  args: {
    title: 'Настройки',
  },
};

export default Meta;

export const Default: ComponentStory<typeof MenuItem> = args => (
  <MenuItem
    {...args}
    onPress={() => {}}
    left={<Icons.Settings />}
    right={<Icons.ChevronRight />}
  />
);
