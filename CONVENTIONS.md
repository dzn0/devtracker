# DevTracker

## Propósito
Projeto de portfólio para aprender a stack TypeScript → React → Next.js → Tailwind → Node → Postgres/Prisma na prática, construindo algo com uso real: rastrear o próprio progresso de estudo/código dia a dia.

## Funcionalidades
- Registrar uma sessão de estudo/código: tecnologia, minutos gastos, data, nota opcional
- Ver lista dos registros recentes (mais novo primeiro)
- Ver estatísticas agregadas: total de horas, streak de dias seguidos, tecnologia mais estudada
- Heatmap estilo GitHub (grid de dias, cor mais intensa = mais tempo estudado naquele dia)
- Editar/excluir um registro

## Estilo visual
Dark theme, paleta inspirada no GitHub dark + roxo como cor de destaque (accent). Ver `--color-*` em `src/app/globals.css`.

# Tags HTML

| Tag | Significa | Como renderiza |
|---|---|---|
| `<div>` | divisão genérica, sem significado próprio | bloco sem estilo, quebra linha antes/depois |
| `<span>` | trecho genérico, sem significado próprio | inline, não quebra linha, fica no meio do texto |
| `<header>` | cabeçalho da página/seção | bloco, geralmente topo |
| `<footer>` | rodapé da página/seção | bloco, geralmente fim |
| `<nav>` | agrupa links de navegação | bloco, sem estilo próprio visível |
| `<aside>` | conteúdo secundário/lateral | bloco, sem estilo próprio visível |
| `<main>` | conteúdo principal da página (único por página) | bloco |
| `<section>` | agrupa um bloco temático de conteúdo | bloco |
| `<a href="...">` | link, navega para outra URL | inline, sublinhado azul por padrão |
| `<button>` | botão clicável | inline-block, com borda/fundo padrão do navegador |
| `<ul>` / `<li>` | lista não ordenada / item da lista | `<ul>` bloco, `<li>` com marcador (•) antes |
| `<ol>` / `<li>` | lista ordenada / item da lista | igual `<ul>`, mas marcador numérico (1. 2. 3.) |
| `<h1>`...`<h6>` | títulos, do mais (`h1`) ao menos (`h6`) importante | bloco, negrito, tamanho decrescente |
| `<p>` | parágrafo de texto | bloco, com margem acima/abaixo |
| `<img src="..." alt="...">` | imagem | inline, sem fechamento (`/>` ou nada) |
| `<input>` | campo de formulário | inline-block, caixa de texto/checkbox/etc |
| `<label>` | rótulo de um campo de formulário | inline, texto associado a um `<input>` |
| `<form>` | agrupa campos de um formulário | bloco |

## Tags de texto

| Tag | Significa | Como renderiza |
|---|---|---|
| `<a href="...">` | link, navega para outra URL (já listado acima) | inline, azul sublinhado por padrão |
| `<strong>` | texto de importância forte | inline, **negrito** |
| `<b>` | texto destacado (sem peso semântico de importância) | inline, **negrito** |
| `<em>` | ênfase | inline, *itálico* |
| `<i>` | texto em voz/estilo diferente (sem ênfase semântica) | inline, *itálico* |
| `<small>` | texto secundário/legal | inline, fonte menor |
| `<mark>` | texto marcado/destacado | inline, fundo amarelo por padrão |
| `<del>` | texto removido | inline, ~~riscado~~ |
| `<ins>` | texto inserido | inline, sublinhado |
| `<sub>` | subscrito | inline, menor e abaixo da linha (ex: H₂O) |
| `<sup>` | sobrescrito | inline, menor e acima da linha (ex: x²) |
| `<code>` | trecho de código | inline, fonte monoespaçada |
| `<pre>` | texto pré-formatado (preserva espaços/quebras) | bloco, fonte monoespaçada |
| `<blockquote>` | citação longa | bloco, com margem/recuo |
| `<q>` | citação curta | inline, aspas automáticas |
| `<abbr title="...">` | abreviação/sigla | inline, sublinhado pontilhado, mostra `title` no hover |
| `<br>` | quebra de linha forçada | não tem conteúdo, só quebra a linha |
| `<hr>` | linha divisória horizontal | bloco, linha fina |
| `<time datetime="...">` | data/hora legível por máquina | inline, sem estilo próprio |

Exemplo de como um trecho comum fica montado:
```html
<nav>
  <a href="/">Dashboard</a>
  <a href="/sessoes">Sessões</a>
</nav>
```
Renderiza como dois links um do lado do outro (porque `<a>` é inline), sem estilo — texto azul sublinhado, um espaço entre eles vindo da quebra de linha no código.

# Escalas Tailwind (mais usadas)

## Espaçamento (padding, margin, gap, width, height...)
| Classe | rem | px |
|---|---|---|
| `1` | 0.25rem | 4px |
| `2` | 0.5rem | 8px |
| `3` | 0.75rem | 12px |
| `4` | 1rem | 16px |
| `6` | 1.5rem | 24px |
| `8` | 2rem | 32px |
| `10` | 2.5rem | 40px |
| `12` | 3rem | 48px |
| `16` | 4rem | 64px |
| `20` | 5rem | 80px |
| `24` | 6rem | 96px |

Direções: `p`/`m` (todos os lados), `x` (horizontal), `y` (vertical), `t`/`b`/`l`/`r` (um lado só). Ex: `px-4`, `mt-8`.

## Tamanho de texto (`text-*`)
`xs` < `sm` < `base` (padrão) < `lg` < `xl` < `2xl` < `3xl` < `4xl`...

## Peso da fonte (`font-*`)
`thin` (100) < `light` (300) < `normal` (400, padrão) < `medium` (500) < `semibold` (600) < `bold` (700) < `black` (900)

## Arredondamento (`rounded-*`)
`sm` < padrão (sem sufixo) < `md` < `lg` < `xl` < `2xl` < `3xl` < `full` (círculo/pílula)

## Largura máxima (`max-w-*`)
`sm` (384px) < `md` (448px) < `lg` (512px) < `xl` (576px) < `2xl` (672px) < ... < `7xl` (1280px, o maior nomeado)

## Breakpoints (responsividade, `sm:`/`md:`/etc, sempre "a partir de")

| Prefixo | Largura mínima |
|---|---|
| (nenhum) | 0px (mobile, padrão) |
| `sm:` | 640px |
| `md:` | 768px |
| `lg:` | 1024px |
| `xl:` | 1280px |
| `2xl:` | 1536px |

Inverso (só **abaixo** de um tamanho): prefixo `max-` — ex: `max-md:hidden`.

## Cursor (`cursor-*`)
`pointer` (clicável) | `default` (seta normal) | `not-allowed` (bloqueado) | `wait` (carregando) | `text` (seleção de texto)

# Stack Planejada
**TypeScript → React → Next.js → Tailwind → Node → Postgres/Prisma**

# TypeScript
Basicamente **JavaScript** onde você precisa declarar o tipo da variável, parecido com **C++**. Os tipos são checados só em tempo de compilação — eles somem quando vira JS puro.
```typescript
function verificar(idade: number): boolean {
  return idade >= 18;
}
verificar("vinte"); // erro de compilação, pego antes de rodar
```

# React
Uma **Lib** pra construir UI com **JS/TS/TailWindCSS**. Em vez de editar HTML na mão, você escreve componentes que descrevem a UI em função do estado, e o React atualiza o DOM quando o estado muda.
```tsx
function Botao({ salvando }: { salvando: boolean }) {
  return <button>{salvando ? "Salvando..." : "Salvar"}</button>;
}
```

# Next.js
Um **framework** construído em cima do React. Adiciona rotas baseadas em arquivos, renderização no servidor, e API routes (endpoints de backend) dentro do mesmo projeto — sem precisar de servidor separado.
```
app/
  page.tsx        → rota "/"
  sobre/page.tsx  → rota "/sobre"
  api/entries/route.ts → endpoint "/api/entries"
```

# Tailwind
**CSS** escrito como classes utilitárias direto no JSX, em vez de arquivos `.css` separados com seletores.
```tsx
<button className="p-2 bg-blue-500 text-white rounded">Salvar</button>
```

# Node
O **runtime** que permite JS/TS rodar fora do navegador (em um servidor ou na sua máquina). O Next.js usa Node por baixo dos panos pra rodar as API routes.
```bash
node teste.js   # roda JS puro fora do navegador
```

# Postgres / Prisma
**Postgres**: um banco de dados de verdade (tipo SQLite, mas multi-usuário, nível produção). **Prisma**: um ORM — você escreve TS em vez de SQL cru, com tipos gerados automaticamente a partir do schema.
```typescript
const entries = await prisma.entry.findMany({
  where: { tecnologia: "React" },
});
```