import { styled } from '@shared/ui/theme';
import { TypographyVariants } from '@shared/ui/theme/types';

type TTypographyProps = {
  variant?: TypographyVariants;
};

export const Typography = styled.Text<TTypographyProps>`
  font-family: ${({ theme, variant = 'body20' }) =>
    theme.typography[variant].fontFamily};
  font-size: ${({ theme, variant = 'body20' }) =>
    theme.typography[variant].size};
  letter-spacing: ${({ theme, variant = 'body20' }) =>
    theme.typography[variant].letterSpacing};
  line-height: ${({ theme, variant = 'body20' }) =>
    theme.typography[variant].lineHeight};
  color: ${({ theme }) => theme.palette.text.primary};
`;
