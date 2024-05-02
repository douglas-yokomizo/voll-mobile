import React from "react";
import { FormControl, Input } from "native-base";

interface TextInputProps extends React.ComponentProps<typeof FormControl> {
  label?: string;
  placeholder: string;
  value?: string;
  onChangeText?: (text: string) => void;
  type?: "text" | "password";
}

const TextInput = ({
  label,
  placeholder,
  value,
  onChangeText,
  type,
  ...rest
}: TextInputProps) => {
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
        value={value}
        onChangeText={onChangeText}
        type={type}
      />
    </FormControl>
  );
};

export { TextInput };
