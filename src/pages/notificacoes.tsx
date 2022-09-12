import Layout from "../components/template/Layout"
import useData from "../data/hooks/useData"


export default function Notificacoes() {
  const {alternaTema} = useData()
  return (
    <Layout
      titulo="Notificações"
      subtitulo="Aqui você irá gerenciar as suas notificações!">
        <button onClick={alternaTema}>Alternar Tema</button>
    </Layout>
  )
}
