import { ComponentMeta, ComponentStory } from '@storybook/react-native';

import { Profile } from './profile';
import { Icons } from '../../atoms';

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

const menuMock = {
  items: [
    {
      title: 'Настройки',
      left: <Icons.Settings />,
      right: <Icons.ChevronRight />,
      onPress: () => null,
    },
    {
      title: 'Тема приложения',
      left: <Icons.Moon />,
      right: <Icons.ChevronRight />,
      onPress: () => null,
    },
    {
      title: 'Служба поддержки',
      left: <Icons.Phone />,
      onPress: () => null,
    },
    {
      title: 'Выход',
      left: <Icons.Exit />,
      onPress: () => null,
    },
  ],
};

export const Default: ComponentStory<typeof Profile> = args => (
  <Profile {...args} menu={menuMock} />
);
