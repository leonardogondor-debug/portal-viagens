import Layout from "../components/Layout";
import CardDestino from "../components/CardDestino";
import { Destino } from "../types/Destino";

const destinos: Destino[] = [
    { id:"1", nome: "Chernobyl", imagem: "/chernobyl.jpg", descricao: "Uma cidade energizante."},
    { id:"2", nome: "Silent Hill", imagem: "/silent.jpg", descricao: "Uma cidade com uma bela neblina."},
    { id:"3", nome: "Raccoon City", imagem: "/raccoon.jpeg", descricao: "Uma cidade explosiva."},
    { id:"4", nome: "Gotham City", imagem: "/Gotham.jpg", descricao: "Uma cidade muito segura."},
];

export default function Destinos() {
    return (
        <Layout>
            <h1 className="text-4xl mb-10">Destinos Turisticos</h1>
            <div className="grid grid-cols-2 lg:grid-cols-4">
                {destinos.map(destino => (
                    <CardDestino key={destino.id} destino={destino} />
                ))}
            </div>
        </Layout>
    );
}