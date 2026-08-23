import { Destino } from "../../types/Destino";
import Layout from "../../components/Layout";

const destinos: Destino[] = [
    { id:"1", nome: "Chernobyl", imagem: "/chernobyl.jpg", descricao: "Uma cidade energizante."},
    { id:"2", nome: "Silent Hill", imagem: "/silent.jpg", descricao: "Uma cidade com uma bela neblina."},
    { id:"3", nome: "Reccoon City", imagem: "/raccoon.jpeg", descricao: "Uma cidade explosiva."},
    { id:"4", nome: "Gotham City", imagem: "/Gotham.jpg", descricao: "Uma cidade muito sigura."},
];

export default async function DestinoDetalhe({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const destino = destinos.find(d => d.id === id);

    if (!destino) return <p>Destino não encontrado!</p>;

    return (
        <Layout>
            <h1>{destino.nome}</h1>
            <img src={destino.imagem} alt={destino.nome} width={400} />
            <p>{destino.descricao}</p>
        </Layout>
    );
}