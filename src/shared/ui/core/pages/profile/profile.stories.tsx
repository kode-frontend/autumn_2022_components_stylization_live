import { ComponentMeta, ComponentStory } from '@storybook/react-native';

import { Profile } from './profile';
import { Icons } from '../../atoms';
import { TMenuItem } from '../../molecules';

const menuItems: TMenuItem[] = [
  {
    title: 'Настройки',
    left: <Icons.Settings />,
    right: <Icons.ChevronRight />,
  },
  {
    title: 'Тема приложения',
    left: <Icons.Moon />,
    right: <Icons.ChevronRight />,
  },
  {
    title: 'Служба поддержки',
    left: <Icons.Phone />,
  },
  {
    title: 'Выход',
    left: <Icons.Exit />,
  },
];

const Meta: ComponentMeta<typeof Profile> = {
  title: 'ui/pages/Profile',
  component: Profile,
  args: {
    profileInfo: {
      uri: 'https://media.gettyimages.com/photos/closeup-of-thoughtful-young-woman-wearing-eyeglasses-against-neon-picture-id1132601613?s=612x612',
      userName: 'Филипп Ребийяр Олегович',
      phone: '+7 (951) *** - ** - 24',
    },
  },
};

export default Meta;

export const Default: ComponentStory<typeof Profile> = args => (
  <Profile {...args} menu={{ items: menuItems, onPress: () => null }} />
);
