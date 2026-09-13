import { Destino } from "../../types/Destino";
import Layout from "../../components/layout";


const destinos: Destino[] = [
    { id: "1", nome: "Chernobyl", imagem: "/chernobyl.jpg", descricao: "Visitar Chernobyl é uma experiência única e impactante. Localizada na Ucrânia, a cidade ficou marcada pelo desastre nuclear de 1986, mas hoje é um destino de turismo histórico e de reflexão. Os visitantes podem explorar a cidade fantasma de Pripyat, ver a famosa roda-gigante abandonada e caminhar pelas ruas silenciosas que parecem congeladas no tempo. Guias especializados conduzem os passeios, garantindo segurança e oferecendo contexto sobre os eventos que mudaram o mundo. É uma viagem que mistura história, ciência e emoção, ideal para quem busca compreender os efeitos da energia nuclear e da resiliência humana." },
    { id: "2", nome: "Silent Hill", imagem: "/silent.jpg", descricao: "Silent Hill é uma cidade fictícia que se tornou lendária entre os fãs de terror psicológico. Como atração turística imaginária, ela oferece uma atmosfera densa de neblina, ruas desertas e uma sensação constante de mistério. Os visitantes seriam atraídos pela experiência de caminhar por cenários sombrios, explorar hospitais abandonados e enfrentar seus próprios medos em ambientes que parecem vivos. Silent Hill não é apenas um lugar, mas uma jornada pela mente humana, onde o terror se mistura com simbolismos profundos. Para os amantes do suspense e da adrenalina, seria um destino inesquecível." },
    { id: "3", nome: "Raccoon City", imagem: "/raccoon.jpeg", descricao: "Raccoon City, conhecida do universo de Resident Evil, é uma cidade fictícia marcada por uma epidemia que transformou seus habitantes em zumbis. Como atração turística imaginária, ela seria um parque temático do apocalipse: ruas devastadas, delegacias icônicas e laboratórios secretos da Umbrella Corporation. Os visitantes poderiam participar de experiências imersivas, simulando sobrevivência em cenários urbanos infestados. É o destino perfeito para quem busca aventura extrema e gosta de se sentir dentro de uma história de ação e terror." },
    { id: "4", nome: "Gotham City", imagem: "/gotham.jpg", descricao: "Gotham City é o lar do lendário Batman e uma das cidades fictícias mais famosas da cultura pop. Como atração turística, ela oferece uma atmosfera urbana vibrante e sombria, com arranha-céus imponentes, becos misteriosos e uma vida noturna intensa. Os visitantes poderiam explorar o icônico Arkham Asylum, passear pela Wayne Tower e sentir a energia de uma metrópole que nunca dorme. Gotham é um destino para quem gosta de ação, mistério e cultura pop, onde cada esquina parece esconder uma história de heróis e vilões." },
];

export default async function DestinoDetalhe({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const destino = destinos.find(d => d.id === id);

    if (!destino) return <p className="text-2xl mt-2">Destino não encontrado!</p>;

    return (
        <Layout>
            <div className="h-full">
                <h1 className="text-4xl mb-2">{destino.nome}</h1>
                <img src={destino.imagem} alt={destino.nome} className="w-full" />
                <p className="text-2xl mt-2">{destino.descricao}</p>
            </div>
        </Layout>
    );
}