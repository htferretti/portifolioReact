import React from 'react'

import Title from "../../components/Title/index.tsx"
import Projeto from '../../components/Projeto/index.tsx'

import { Lista } from './styles.ts'

const Projetos = () => {
    return (
        <section>
            <Title fontSize={16}>Projetos</Title>
            <Lista>
                <li>
                    <Projeto></Projeto>
                </li>
                <li>
                    <Projeto></Projeto>
                </li>
                <li>
                    <Projeto></Projeto>
                </li>
                <li>
                    <Projeto></Projeto>
                </li>
                <li>
                    <Projeto></Projeto>
                </li>
                <li>
                    <Projeto></Projeto>
                </li>
                <li>
                    <Projeto></Projeto>
                </li>
                <li>
                    <Projeto></Projeto>
                </li>
            </Lista>
        </section>
    )
}

export default Projetos