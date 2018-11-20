/**
 * @Author: JoseMunoz
 * @Date:   2018-05-22T11:46:27-06:00
 * @Last modified by:   JoseMunoz
 * @Last modified time: 2018-11-12T18:37:51-06:00
 */
import React from 'react';
import { SafeAreaView } from 'react-native';
import Amplify, { I18n } from 'aws-amplify';
import App from './src/components/App';
import AWS_CONFIG from './src/aws-exports';

Amplify.configure(AWS_CONFIG);
I18n.setLanguage('es');

const Root = () => (
  <SafeAreaView
    style={{
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'flex-end',
    }}
  >
    <App />
  </SafeAreaView>
);

export default Root;
