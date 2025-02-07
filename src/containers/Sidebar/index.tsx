import React from 'react'
import Title from '../../components/Title/index.tsx'
import Avatar from '../../components/Avatar/index.tsx'
import Paragrafo from '../../components/Paragrafo/index.tsx'

import { Descricao, BotaoTema, SidebarContainer } from './styles.ts'

const Sidebar = () => {
    return (
        <aside>
            <SidebarContainer>
                <Avatar></Avatar>
                <Title fontSize={20}>htferretti</Title>
                <Paragrafo tipo='secundario' fontSize={16}>htferretti</Paragrafo>
                <Descricao tipo='principal' fontSize={12}>Engenheiro front-end</Descricao>
                <BotaoTema>Trocar tema</BotaoTema>
            </SidebarContainer>
        </aside>
    )
}

export default Sidebar