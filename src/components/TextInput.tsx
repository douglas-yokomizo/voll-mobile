import React from 'react';
import { FormControl, Input } from 'native-base';

interface TextInputProps {
  label: string;
  placeholder: string;
}

const TextInput = ({ label, placeholder }: TextInputProps) => {
  return (
    <FormControl mt={3}>
      <FormControl.Label>{label}</FormControl.Label>
      <Input placeholder={placeholder} size='lg' w='100%' borderRadius='lg' bgColor='gray.100' shadow={3}/>
    </FormControl>
  );
};

export {TextInput};