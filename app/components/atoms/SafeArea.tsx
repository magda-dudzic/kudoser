import React from 'react';
import { ReactNode } from 'react';
import { SafeAreaView, StatusBar } from 'react-native';

import { styled } from '../../static/theme';

const SafeAreaStyled = styled(SafeAreaView)`
  flex: 1;
  ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`};
`;

export default function SafeArea({ children }: { children: ReactNode }) {
  return <SafeAreaStyled>{children}</SafeAreaStyled>;
}
