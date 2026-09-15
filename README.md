# Portal de Viagens

Projeto feito para aplicar tecnicas de **performance web** e otimizacao de front-end usando **Next.js**.

## Analise inicial
Relatorio Lighthouse antes das otimizacoes:

home
- Permormance: 100, 98 (com 4g lento), 71 (com 3g)
- Acessibilidade: 100, 98 (com 4g lento), 100 (com 3g)
- Boas praticas: 100, 98 (com 4g lento), 100 (com 3g)
- SEO: 50

destinos
- Permormance: 99, 96 (com 4g lento), 66 (com 3g)
- Acessibilidade: 100, 100 (com 4g lento), 100 (com 3g)
- Boas praticas: 100, 100 (com 4g lento), 100 (com 3g)
- SEO: 54

detalhes do destino
- Permormance: 87, 85 (com 4g lento), 65 (com 3g)
- Acessibilidade: 100, 100 (com 4g lento), 100 (com 3g)
- Boas praticas: 100, 100 (com 4g lento), 100 (com 3g)
- SEO: 54

### Problemas encontrados
- Imagens pesadas e sem otimizacao
- Ausencia de lazy em imagens secundarias
- Codigo nao minificado
- Paragrafos sem estrutura adequada

## Melhorias aplicadas
- Uso de `next/image` com formato `.webp` e atributos `priority` e `loading="lazy"`.
- Minificacao de HTML, CSS, e JS.
- Metadados configurado para SEO
- Transformei os paragrafos em **arrays de string**.

## Resultado
Relatorio Lighthouse depois das otimizacoes:

home
- Permormance: 100, 98 (com 4g lento),  71(com 3g)
- Acessibilidade: 100, 100(com 4g lento),  100(com 3g)
- Boas praticas: 100, 100(com 4g lento),  100(com 3g)
- SEO: 60

destinos
- Permormance: 100, 98 (com 4g lento),  71(com 3g)
- Acessibilidade: 100, 100 (com 4g lento),  100(com 3g)
- Boas praticas: 100, 100 (com 4g lento),  100(com 3g)
- SEO: 63

detalhes do destino
- Permormance: 100, 97 (com 4g lento), 72 (com 3g)
- Acessibilidade: 100, 100 (com 4g lento), 100 (com 3g)
- Boas praticas: 100, 100 (com 4g lento), 100 (com 3g)
- SEO: 63

### Comparativos
Antes | Depois

![Print Antes](docs/antes) | ![Print Depois](docs/depois)

## Conclucao
As mudancas que tiverem o maior impacto foram:
- Otimizacao de imagem
- Uso de lazy em imagens secundarias.
- Minificacao de HTML, CSS E JS

## Comandos basicos
Instalar dependencias
```bash
npm install
```

Rodar em ambiente de desenvolvimento 
```bash
npm run dev`
```

Gerar build de producao
```bash
npm run build
```

Iniciar servidos em producao
```bash
npm start
```

Rodar linter
```bash
npm run lint
```
## Repositorio GitHub
Acesse aqui:
```bash
https://github.com/leonardogondor-debug/portal-viagens
```

## URL do codigo
Acesse aqui:
```bash
https://portal-viagens-s6ra-git-master-leo-vit.vercel.app/
```

