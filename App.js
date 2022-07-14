/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  TouchableHighlight,
  Linking,
  Alert,
  TextInput,
  Platform,
  DeviceEventEmitter,
  Button,
} from 'react-native';

import { useEffect } from "react";

import ReactAppboy from "react-native-appboy-sdk";
import Braze from "react-native-appboy-sdk";

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const Section = ({children, title}): Node => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
};

const App: () => Node = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };
  const [text, setText] = useState('');



  return (
    <SafeAreaView
    style={backgroundStyle}
>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
        <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
          }}>
          <Section title="Basic Braze Functions">
          <View>
            <TextInput
              style={styles.textInput}
              placeholder="Type here to translate!"
              onChangeText={newText => setText(newText)}
              defaultValue={text}
            />
            <Button
              title= "Set User ID"
              onPress={() => Braze.changeUser(text)}
            />
            <Button
              title="Set Custom Event"
              color="#f194ff"
              onPress={() => Braze.logCustomEvent(text)}
            />
            <Button
              title="Set Custom Attribute"
              color="#f194ff"
              onPress={() => Braze.setCustomUserAttribute('customAttribute',text)}
            />
            <Button
              title="Trigger IAM"
              onPress={() => Braze.logCustomEvent("triggerEvent")}
              />
            <Button
              title="Launch ContentCards"
              onPress={() => Braze.launchContentCards()}
            />
            </View>
          </Section>
        </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
  textInput: {
    height: 40,
    width: 150,
    borderColor: 'gray',
    borderWidth: .5,
    paddingLeft: 5,
    marginLeft: 5,
    fontSize: 14
    },
});

export default App;
