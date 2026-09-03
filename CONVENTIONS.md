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