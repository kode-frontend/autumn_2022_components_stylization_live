import { ComponentProps } from 'react';

import { MenuItem } from '../../molecules';
import { TMenuItem } from '../../molecules/menu-item/menu-item';

type TMenuList = {
  items: TMenuItem[];
  onPress: () => void;
};

export const MenuList = ({ items, onPress }: TMenuList) => {
  return (
    <>
      {items.map(item => (
        <MenuItem {...item} onPress={onPress} />
      ))}
    </>
  );
};
