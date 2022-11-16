import { ComponentProps } from 'react';

import { ProfileInfo } from '../../molecules';
import { MenuList } from '../../organisms';
import { ProfileTemplate } from '../../templates';

type TProfile = {
  profileInfo: ComponentProps<typeof ProfileInfo>;
  menu: ComponentProps<typeof MenuList>;
};

export const Profile = ({ profileInfo, menu }: TProfile) => {
  return (
    <ProfileTemplate
      profileInfo={<ProfileInfo {...profileInfo} />}
      menu={<MenuList {...menu} />}
    />
  );
};
