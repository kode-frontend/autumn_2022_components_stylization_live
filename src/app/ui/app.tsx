import { StrictMode, ReactNode, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';

import { AppThemeProvider, styled } from '@shared/ui/theme';
import { AppNavigation } from '@pages/ui';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

import { Storybook } from '../../../.storybook';

const StorybookButton = styled.TouchableOpacity`
  height: 32px;
  padding: ${({ theme }) => theme.spacing(1)}px;
  background-color: ${({ theme }) => theme.palette.button.primary};
`;
const StorybookButtonText = styled.Text`
  color: ${({ theme }) => theme.palette.text.primary};
  text-align: center;
`;

const customFonts = {
  SF_PRO_BOLD_700: require('../../../assets/fonts/SFProDisplay-Bold.ttf'),
  SF_PRO_SEMIBOLD_600: require('../../../assets/fonts/SFProDisplay-Semibold.ttf'),
  SF_PRO_MEDIUM_500: require('../../../assets/fonts/SFProDisplay-Medium.ttf'),
  SF_PRO_REGULAR_400: require('../../../assets/fonts/SFProDisplay-Regular.ttf'),
};

export const App = () => {
  const [isFontsLoaded] = useFonts(customFonts);
  const [isStorybookClosed, setStorybookClosed] = useState(false);

  if (!isFontsLoaded) {
    return <AppLoading />;
  }

  if (!isStorybookClosed) {
    return (
      <StrictMode>
        <SafeAreaProvider>
          <AppThemeProvider>
            <SafeAreaView style={{ flex: 1 }}>
              <Storybook />
              <StorybookButton onPress={() => setStorybookClosed(true)}>
                <StorybookButtonText>OPEN APP</StorybookButtonText>
              </StorybookButton>
            </SafeAreaView>
          </AppThemeProvider>
        </SafeAreaProvider>
      </StrictMode>
    );
  }

  return (
    <StrictMode>
      <SafeAreaProvider>
        <AppThemeProvider>
          <NavigationContainer>
            <AppNavigation />
          </NavigationContainer>
        </AppThemeProvider>
      </SafeAreaProvider>
    </StrictMode>
  );
};
