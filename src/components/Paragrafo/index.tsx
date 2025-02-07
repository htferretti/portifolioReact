import React from 'react'

import { P } from './styles.ts'

export type Props = {
    children: string
    tipo?: 'principal' | 'secundario'
}

const Paragrafo = ({ children, tipo = 'principal' }: Props) => {
    return (
        <P tipo={tipo}>
            {children}
        </P>
    )
}

export default Paragrafo