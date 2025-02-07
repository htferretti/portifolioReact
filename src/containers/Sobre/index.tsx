import React from 'react';

import Title from "../../components/Title/index.tsx"
import Paragrafo from "../../components/Paragrafo/index.tsx"
import { GithubSecao } from './styles.ts';

const Sobre = () => {
    return (
        <section>
            <Title fontSize={16}>Sobre</Title>
            <Paragrafo tipo='principal'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore tempora repellat velit. Nobis ducimus voluptas modi illum, nihil soluta dolores ratione veniam pariatur. Assumenda exercitationem maxime dolores quaerat obcaecati distinctio.</Paragrafo>
            <GithubSecao>
                <img src="https://github-readme-stats.vercel.app/api?username=htferretti&show_icons=true&theme=dracula&include_all_commits=true&count_private=true" />
                <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=htferretti&layout=compact&langs_count=7&theme=dracula" />
            </GithubSecao>
        </section>
    )
}

export default Sobre