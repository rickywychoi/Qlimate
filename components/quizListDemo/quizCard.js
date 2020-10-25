import * as React from 'react'
import { View } from 'react-native'
import { RadioButton, Text } from 'react-native-paper'
import QuizAnswerButton from './quizAnswerBtn'

const answerButton = (props) => {
  // the question text
  const [title, setTitle] = useState("")
  // the choices contain "a, b, c, d" and answer text
  // an Array of Object
  const [choices, setChoices] = useState([])

  // this Array will contain 4-5 Views that contain text and radio button
  // an Array of object
  const choiceBtnAr = [];

  setChoice(databse.someArray)

  useEffect(() => {
    
    // axios.get() gets a path as a param
    axios.get(uri + "/quiz").then(res => {
      console.log(res.data)
    }).catch(err => console.error(err)).then(() => {
      
    })
  }, [])
  

  for (let i = 0; i < choiceArLength; i++) {
    choiceBtnAr.push(
      <QuizAnswerButton name={choiceBtnAr[i].name} text={choiceBtnAr[i].text}></QuizAnswerButton> 
    )
  }

  return (
    <View>
      <Text></Text>
      { choiceBtnAr }
    </View>
  );
};

export default answerButton;