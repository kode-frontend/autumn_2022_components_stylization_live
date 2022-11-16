import { styled } from '@shared/ui/theme';

import { Typography } from '../../atoms';

const AVATAR_SIZE = 88;

const Wrapper = styled.View`
  justify-content: center;
  align-items: center;
  flex: 1;
`;

const Avatar = styled.Image`
  width: ${AVATAR_SIZE}px;
  height: ${AVATAR_SIZE}px;
  border-radius: ${AVATAR_SIZE / 2}px;
`;

const UserName = styled(Typography)`
  margin-top: ${({ theme }) => theme.spacing(2)}px;
  margin-bottom: ${({ theme }) => theme.spacing(0.5)}px;
  text-align: center;
`;

export type TProfileInfo = {
  uri: string;
  userName: string;
  phone: string;
};

export const ProfileInfo = ({ uri, userName, phone }: TProfileInfo) => {
  return (
    <Wrapper>
      <Avatar source={{ uri }} />
      <UserName variant="subtitle2">{userName}</UserName>
      <Typography variant="caption2">{phone}</Typography>
    </Wrapper>
  );
};
