import React from 'react'

import { P } from './styles.ts'

export type Props = {
    children: string
    tipo?: 'principal' | 'secundario'
    fontSize?: number
}

const Paragrafo = ({ children, tipo = 'principal', fontSize }: Props) => {
    return (
        <P tipo={tipo} fontSize={fontSize}>
            {children}
        </P>
    )
}

export default Paragrafo