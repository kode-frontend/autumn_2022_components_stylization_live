import { ComponentStory } from '@storybook/react-native';

import { ProfileInfo } from './profile-info';

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
  <ProfileInfo {...args} />
);
