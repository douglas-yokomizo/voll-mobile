import { ITextProps, Text } from "native-base"
import { ReactNode } from "react"

interface TitleProps extends ITextProps {
    children: ReactNode
}

export const Title = ({ children, ...rest }:TitleProps) => {
    return (
        <Text
        fontSize="2xl"
        fontWeight="bold"
        color="gray.500"
        textAlign="center"
        mt={10}
        mb={8}
        {...rest}
        >
            {children}
        </Text>
    )
}