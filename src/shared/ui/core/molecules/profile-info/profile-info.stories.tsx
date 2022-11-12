import { styled } from '@shared/ui/theme';
import { ComponentStory } from '@storybook/react-native';

import { ProfileInfo } from './profile-info';

const Wrapper = styled.View`
  flex: 1;
  justify-content: center;
`;

const Meta = {
  title: 'ui/molecules/ProfileInfo',
  args: {
    uri: 'https://media.gettyimages.com/photos/closeup-of-thoughtful-young-woman-wearing-eyeglasses-against-neon-picture-id1132601613?s=612x612',
    userName: 'Филипп Ребийяр Олегович',
    phone: '+7 (951) *** - ** - 24',
  },
};

export default Meta;

export const Default: ComponentStory<typeof ProfileInfo> = args => (
  <Wrapper>
    <ProfileInfo {...args} />
  </Wrapper>
);
