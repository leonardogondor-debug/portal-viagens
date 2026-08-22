import Link from "next/link";
import Layout from "./components/Layout";

export default function Home() {
  return (
    <Layout>
      <h1>Bem-Vindo ao Portal de Viagens</h1>
      <p>Descubra destinos incriveis pelo mundo!</p>
      <Link href="/destinos">Ver destinos</Link>
    </Layout>
  );
}