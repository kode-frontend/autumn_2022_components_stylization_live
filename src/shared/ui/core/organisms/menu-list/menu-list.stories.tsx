import { ComponentMeta, ComponentStory } from '@storybook/react-native';
import { styled } from '@shared/ui/theme';

import { MenuList } from './menu-list';
import { Icons } from '../../atoms';
import { TMenuItem } from '../../molecules';

const Wrapper = styled.View`
  flex: 1;
  justify-content: center;
`;

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

const Meta: ComponentMeta<typeof MenuList> = {
  title: 'ui/organisms/MenuList',
  component: MenuList,
  args: {},
  argTypes: {
    onPress: {
      action: 'onPress',
    },
  },
};

export default Meta;

type TStory = ComponentStory<typeof MenuList>;

export const Default: TStory = args => (
  <Wrapper>
    <MenuList {...args} items={menuItems} />
  </Wrapper>
);
