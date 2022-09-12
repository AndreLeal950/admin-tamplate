import useData from '../../data/hooks/useData'
import BotaoAlternaTema from './BotaoAlternaTema'
import Titulo from './Titulo'


interface CabecalhoProps {
    titulo: string
    subtitulo: string
    
}

export default function Cabecalho(props: CabecalhoProps) {
    const { tema, alternaTema} = useData()
    return (
        <div className='flex' >
            <Titulo titulo={props.titulo} subtitulo={props.subtitulo} />
            <div className='flex flex-grow justify-end'>
                <BotaoAlternaTema tema={tema} alternaTema={alternaTema} />
            </div>
        </div>
    )
}