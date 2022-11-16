import { TouchableOpacity } from 'react-native';

import { styled } from '@shared/ui/theme';

import { Typography } from '../../atoms';

const Button = styled(TouchableOpacity)`
  flex-direction: row;
  align-items: center;
  padding: ${({ theme }) => theme.spacing(2)}px;
`;

const Title = styled(Typography)`
  flex: 1;
  margin-left: ${({ theme }) => theme.spacing(2)}px;
  margin-right: ${({ theme }) => theme.spacing(1)}px;
`;

// Пример с интерполяцией
// type TVBoxProps = {
//   width?: number;
// };
// const VBox = styled.View<TVBoxProps>`
//   width: ${({ theme, width }) => width ?? theme.spacing(1)}px;
// `;

export type TMenuItem = {
  left: React.ReactNode;
  title: string;
  right?: React.ReactNode;
};

type Props = TMenuItem & {
  onPress: () => void;
};

export const MenuItem = ({ left, title, right, onPress }: Props) => {
  return (
    <Button activeOpacity={0.7} onPress={onPress}>
      {left}
      <Title variant="body15Regular">{title}</Title>
      {right}
    </Button>
  );
};
