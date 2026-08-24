import { Destino } from "../../types/Destino";
import Layout from "../../components/Layout";


const destinos: Destino[] = [
    { id:"1", nome: "Chernobyl", imagem: "/chernobyl.jpg", descricao: "Uma cidade energizante."},
    { id:"2", nome: "Silent Hill", imagem: "/silent.jpg", descricao: "Uma cidade com uma bela neblina."},
    { id:"3", nome: "Raccoon City", imagem: "/raccoon.jpeg", descricao: "Uma cidade explosiva."},
    { id:"4", nome: "Gotham City", imagem: "/Gotham.jpg", descricao: "Uma cidade muito segura."},
];

export default async function DestinoDetalhe({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const destino = destinos.find(d => d.id === id);

    if (!destino) return <p className="text-2xl mt-2">Destino não encontrado!</p>;

    return (
        <Layout>
            <div className="h-full">
            <h1 className="text-4xl mb-2">{destino.nome}</h1>
            <img src={destino.imagem} alt={destino.nome} className="w-full"/>
            <p className="text-2xl mt-2">{destino.descricao}</p>
            </div>
        </Layout>
    );
}