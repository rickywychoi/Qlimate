import * as React from 'react';
import { View } from 'react-native';
import { RadioButton, Text } from 'react-native-paper';

const answerButton = (props) => {
  const [value, setValue] = React.useState('first');

  const [title, setTitle] = useState("")
  const [answer, setAnswer] = useState("")
  
  

  return (
    <View>
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
    </View>
  );
};

export default answerButton;