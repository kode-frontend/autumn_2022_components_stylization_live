import { styled } from '@shared/ui/theme';

import { MenuList } from './menu-list';
import { Icons } from '../../atoms';

const Wrapper = styled.View`
  flex: 1;
  justify-content: center;
`;

const Meta = {
  title: 'ui/organisms/MenuList',
};

export default Meta;

export const Default = () => (
  <Wrapper>
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
  </Wrapper>
);
