import * as React from 'react';
import { View } from 'react-native';
import { RadioButton, Text } from 'react-native-paper';

const answerButton = () => {
  const [choice, setValue] = React.useState('');

  const [question, setQuestion] = useState("")

  const questionAr = question
  const title = questionAr


  return (
    <View>
      <Text>{title}</Text>
      <RadioButton value="first" />
    </View>
  );
};

export default answerButton;