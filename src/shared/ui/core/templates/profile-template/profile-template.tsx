import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { styled, Theme } from '@shared/ui/theme';

const Flex1 = styled.View`
  flex: 1;
`;

const Wrapper = styled.ScrollView.attrs(
  ({ theme, bottomInset }: { theme: Theme; bottomInset: number }) => ({
    contentContainerStyle: {
      flexGrow: 1,
      paddingBottom: bottomInset + theme.spacing(1),
    },
  }),
)<{
  bottomInset: number;
}>`
  flex: 1;
  background-color: ${({ theme }) => theme.palette.background.primary};
`;

export type TProfileTemplate = {
  profileInfo: React.ReactNode;
  menu: React.ReactNode;
};

export const ProfileTemplate = ({ profileInfo, menu }: TProfileTemplate) => {
  const { bottom: bottomInset } = useSafeAreaInsets();

  return (
    <Wrapper bottomInset={bottomInset}>
      <Flex1 />
      {profileInfo}
      <Flex1 />
      {menu}
      <Flex1 />
    </Wrapper>
  );
};
