import Link from "next/link";
import { Destino } from "../types/Destino";
import styles from "./CardDestino.module.css";

interface CardDestinoProps {
    destino: Destino;
}

export default function CardDestino({ destino }: CardDestinoProps) {
    return (
        <div className={styles.card}>
            <img src={destino.imagem} alt={destino.nome} className={styles.image} />
            <h2>{destino.nome}</h2>
            <Link href={`/destinos/${destino.id}`}>Ver detalhes</Link>
        </div>
    );
}