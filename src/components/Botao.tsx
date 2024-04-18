import { Button, IButtonProps } from 'native-base';

interface BotaoProps extends IButtonProps {
    children: React.ReactNode
}

const Botao = ( { children, ...rest }:BotaoProps ) => {
    return(
    <Button w={'100%'} mt={4} borderRadius={'lg'} bgColor={'blue.800'} {...rest}>
        { children }
    </Button>
    )
}

export {Botao}