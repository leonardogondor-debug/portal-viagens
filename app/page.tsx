import Link from "next/link";
import Layout from "./components/Layout";

export default function Home() {
  return (
    <Layout>
      <h1 className="text-3xl m-4">Bem-Vindo ao Portal de Viagens</h1>
      <p className="text-2xl m-2">Descubra destinos incriveis pelo mundo!</p>
      <Link className="text-xl text-blue-600 hover:text-blue-300 " href="/destinos">Ver destinos</Link>
    </Layout>
  );
}