import Link from 'next/link'
import styles from '../src/styles/Botao.module.css'

interface BotaoProps {
    texto: string
    href?: string
    onClick?: (e: any) => void
}

export default function Botao(props: BotaoProps) {

    function renderizarBotao(){
        return (
            <button className={styles.botao}
                onClick={props.onClick}>
                {props.texto}
            </button>
        )
    }

    return props.href ? (
        <Link href={props.href}>
            {renderizarBotao()}
        </Link>
    ) : renderizarBotao()
}