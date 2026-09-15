# Portal de Viagens

Projeto feito para aplicar tecnicas de **performance web** e otimizacao de front-end usando **Next.js**.

## Analise inicial
Relatorio Lighthouse antes das otimizacoes:

home
- Permormance:
- Acessibilidade:
- Boas praticas:
- SEO: 

destinos
- Permormance:
- Acessibilidade:
- Boas praticas:
- SEO:

detalhes do destino
- Permormance:
- Acessibilidade:
- Boas praticas:
- SEO:

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
- Permormance:
- Acessibilidade:
- Boas praticas:
- SEO: 

destinos
- Permormance:
- Acessibilidade:
- Boas praticas:
- SEO:

detalhes do destino
- Permormance:
- Acessibilidade:
- Boas praticas:
- SEO:

### Comparativos
Antes | Depois

![Print Antes](docs/lighthouse-antes.png) | ![Print Depois](docs/lighthouse-depois.png)

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

