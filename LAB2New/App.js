import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import i18next from './res/localization';

const CalculatorApp = () => {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [result, setResult] = useState('');

  const handleAddition = () => {
    setResult(parseFloat(num1) + parseFloat(num2));
  };

  const handleSubtraction = () => {
    setResult(parseFloat(num1) - parseFloat(num2));
  };

  const handleMultiplication = () => {
    setResult(parseFloat(num1) * parseFloat(num2));
  };

  const handleDivision = () => {
    setResult(parseFloat(num1) / parseFloat(num2));
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <TextInput
        style={{ width: 200, height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 10 }}
        onChangeText={text => setNum1(text)}
        value={num1}
        placeholder="Enter number 1"
        keyboardType="numeric"
      />
      <TextInput
        style={{ width: 200, height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 10 }}
        onChangeText={text => setNum2(text)}
        value={num2}
        placeholder="Enter number 2"
        keyboardType="numeric"
      />
      <View style={{ flexDirection: 'row', marginBottom: 10 }}>
        <Button title="+" onPress={handleAddition} />
        <Button title="-" onPress={handleSubtraction} />
        <Button title="*" onPress={handleMultiplication} />
        <Button title="/" onPress={handleDivision} />
      </View>
      <Text>Result: {result}</Text>
    </View>
  );
};

export default CalculatorApp;
