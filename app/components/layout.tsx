import Link from "next/link";
import styles from "./Layout.module.css";

export default function  Layout({ children } : { children: React.ReactNode }) {
  return (
    <div>
      <header className={styles.header}>
        <nav>
          <Link href="/">Home</Link> | <Link href="/destinos">Destinos</Link>
        </nav>
      </header>
      <main className={styles.main}>{children}</main>
      <footer className={styles.footer}>2026 Portal de Viagens</footer>  
    </div>
  );
}