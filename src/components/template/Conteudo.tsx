interface ConteudoProps {
    childrern?: any
    
   
}

export default function Conteudo(props: ConteudoProps) {
    return (
        <div className={`
            flex flex-col mt-7
            dark:text-gray-100
        `}>
          {props.childrern}
        </div>
    )
}