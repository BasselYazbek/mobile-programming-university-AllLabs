// FunctionTabulationScreen.js
import React, { useState } from 'react';
import { View, Text, TextInput, Button, FlatList } from 'react-native';

const FunctionTabulationScreen = () => {
  const [minValue, setMinValue] = useState('');
  const [maxValue, setMaxValue] = useState('');
  const [step, setStep] = useState('');
  const [functionData, setFunctionData] = useState([]);

  const calculateFunction = () => {
    const minX = parseInt(minValue);
    const maxX = parseInt(maxValue);
    const stepValue = parseInt(step);

    const newData = [];
    for (let i = minX; i <= maxX; i += stepValue) {
      newData.push({ x: i, y: i * i }); // Example function: y = x^2
    }

    setFunctionData(newData);
  };

  return (
    <View>
      <TextInput
        placeholder="Min value"
        value={minValue}
        onChangeText={setMinValue}
        keyboardType="numeric"
      />
      <TextInput
        placeholder="Max value"
        value={maxValue}
        onChangeText={setMaxValue}
        keyboardType="numeric"
      />
      <TextInput
        placeholder="Step"
        value={step}
        onChangeText={setStep}
        keyboardType="numeric"
      />
      <Button title="Calculate" onPress={calculateFunction} />
      <FlatList
        data={functionData}
        renderItem={({ item }) => (
          <View style={{ flexDirection: 'row', padding: 10 }}>
            <Text style={{ flex: 1 }}>{item.x}</Text>
            <Text style={{ flex: 1 }}>{item.y}</Text>
          </View>
        )}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};

export default FunctionTabulationScreen;
