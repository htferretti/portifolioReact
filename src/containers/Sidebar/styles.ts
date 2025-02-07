import styled from "styled-components";
import { P } from "../../components/Paragrafo/styles.ts";

export const Descricao = styled(P)`
    margin: 24px 0;
`

export const BotaoTema = styled.button`
    border-radius: 12px;
    border: none;
    padding: 8px;
    color: #eee;
    font-size: 10px;
    font-weight: bold;
    background: #282A35;
    cursor: pointer
`

export const SidebarContainer = styled.div`
    position: sticky;
    top: 80px;
    left: 0;
`