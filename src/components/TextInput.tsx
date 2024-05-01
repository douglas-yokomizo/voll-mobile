import React from "react";
import { FormControl, Input } from "native-base";

interface TextInputProps extends React.ComponentProps<typeof FormControl> {
  label: string;
  placeholder: string;
}

const TextInput = ({ label, placeholder, ...rest }: TextInputProps) => {
  return (
    <FormControl mt={3} {...rest}>
      <FormControl.Label>{label}</FormControl.Label>
      <Input
        placeholder={placeholder}
        size="lg"
        w="100%"
        borderRadius="lg"
        bgColor="gray.100"
        padding={3}
      />
    </FormControl>
  );
};

export { TextInput };
