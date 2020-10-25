import * as React from 'react';
import { View } from 'react-native';
import { RadioButton, Text } from 'react-native-paper';

const answerButton = () => {
  const [value, setValue] = React.useState('first');

  return (
    <RadioButton.Group onValueChange={value => setValue(value)} value={value}>
      <View>
        <Text>True</Text>
        <RadioButton value="first" />
      </View>
      <View>
        <Text>False</Text>
        <RadioButton value="second" />
      </View>
    </RadioButton.Group>
  );
};

export default answerButton;