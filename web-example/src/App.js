import React from 'react';
import { Button, StyleSheet, Text, View, Dimensions } from 'react-native';

function Link(props) {
  return <Text {...props} accessibilityRole="link" style={StyleSheet.compose(styles.link, props.style)} />;
}

function App() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Welcome to React Native for Web</Text>
      </View>
      <Text style={styles.text}>
        This starter project enables you to build web application using React Native module. .
      </Text>
      <Text style={styles.text}>
        Built with <Link href="https://github.com/facebook/create-react-app">Create React App</Link> and{' '}
        <Link href="https://github.com/necolas/react-native-web">React Native for Web</Link>
      </Text>
      <Button onPress={() => {}} title="Example button" />
    </View>
  );
}
let ScreenHeight = Dimensions.get('window').height;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: ScreenHeight,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  header: {
    padding: 20
  },
  title: {
    fontWeight: 'bold',
    fontSize: '1.5rem',
    marginVertical: '1em',
    textAlign: 'center'
  },
  text: {
    lineHeight: '1.5em',
    fontSize: '1.125rem',
    marginVertical: '1em',
    textAlign: 'center'
  },
  link: {
    color: '#1B95E0'
  },
  code: {
    fontFamily: 'monospace, monospace'
  }
});
export default App;