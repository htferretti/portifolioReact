import React from 'react'

import { Titulo as TituloEstilo} from './styles.ts'

export type Props = {
    children: string
    fontSize?: number
}

const Title = (props: Props) => {
    return (
        <TituloEstilo fontSize={props.fontSize}>
            {props.children}
        </TituloEstilo>
    )
}

export default Title