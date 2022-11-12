import { ComponentProps } from 'react';

import { MenuItem } from '../../molecules';

type TMenuItemProps = ComponentProps<typeof MenuItem>;

type TMenuList = {
  items: TMenuItemProps[];
};

export const MenuList = ({ items }: TMenuList) => {
  return (
    <>
      {items.map(item => (
        <MenuItem {...item} />
      ))}
    </>
  );
};
