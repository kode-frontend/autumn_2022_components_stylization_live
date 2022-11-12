import { ComponentMeta, ComponentStory } from '@storybook/react-native';

import { styled } from '@shared/ui/theme';

import { MenuItem } from './menu-item';
import { Icons } from '../../atoms';

const Wrapper = styled.View`
  flex: 1;
  justify-content: center;
`;

const Meta: ComponentMeta<typeof MenuItem> = {
  title: 'ui/molecules/MenuItem',
  args: {
    title: 'Настройки',
  },
};

export default Meta;

export const Default: ComponentStory<typeof MenuItem> = args => (
  <Wrapper>
    <MenuItem
      {...args}
      onPress={() => null}
      left={<Icons.Settings />}
      right={<Icons.ChevronRight />}
    />
  </Wrapper>
);