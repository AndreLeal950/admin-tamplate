import Layout from "../components/template/Layout"
import useData from "../data/hooks/useData"


export default function Notificacoes() {
  const context = useData()
  return (
    <Layout
      titulo="Notificações"
      subtitulo="Aqui você irá gerenciar as suas notificações!">
      
      <h3>{context.nome}</h3>    

    </Layout>
  )
}
