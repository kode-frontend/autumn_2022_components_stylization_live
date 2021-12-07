import { storiesOf } from '@storybook/react-native';
import { text } from '@storybook/addon-knobs';

import { ProfileInfo } from './profile-info';

storiesOf('ui/molecules', module).add('profiule-info', () => {
  return (
    <ProfileInfo
      uri="https://media.gettyimages.com/photos/closeup-of-thoughtful-young-woman-wearing-eyeglasses-against-neon-picture-id1132601613?s=612x612"
      userName={text('userName', 'Филипп Ребийяр Олегович')}
      phone={text('phone', '+7 (951) *** - ** - 24')}
    />
  );
});
