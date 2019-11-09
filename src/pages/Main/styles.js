import styled from 'styled-components/native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

export const Container = styled.SafeAreaView`
  flex: 1;
`;

export const Scroll = styled.ScrollView.attrs({
  contentInsetAdjustmentBehavior: 'automatic',
})`
  background-color: ${Colors.lighter};
`;

export const Engine = styled.View`
  position: absolute;
  right: 0;
`;

export const Body = styled.View`
  background-color: ${Colors.white};
`;

export const SectionContainer = styled.View`
  margin-top: 32px;
  padding: 0 24px;
`;

export const SectionTitle = styled.Text`
  font-size: 24px;
  font-weight: 600;
  color: ${Colors.black};
`;

export const SectionDescription = styled.Text`
  margin-top: 8px;
  font-size: 18px;
  font-weight: 400;
  color: ${Colors.dark};
`;

export const Highlight = styled.Text`
  font-weight: 700;
`;

export const Footer = styled.Text`
  padding: 4px;
  padding-right: 12px;
  font-size: 12px;
  font-weight: 600;
  text-align: right;
  color: ${Colors.dark};
`;
