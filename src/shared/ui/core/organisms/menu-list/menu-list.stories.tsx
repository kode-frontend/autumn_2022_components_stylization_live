import { MenuList } from './menu-list';
import { Icons } from '../../atoms';

const Meta = {
  title: 'ui/organisms/MenuList',
};

export default Meta;

export const Default = () => (
  <MenuList
    items={[
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
    ]}
  />
);
