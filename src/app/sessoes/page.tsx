import { Clock, BarChart3, Flame, Trophy, Plus, ChevronDown, FileBraces, CodeXml, CalendarSearch, Star, Download } from "lucide-react";

export default function Sessoes() {
    return (
        <div>
            {/* Sessoes e botao + Nova sessao */}
            <div className="flex items-center justify-between max-w-[1500px] mx-auto mt-12">
                <div className="cursor-default">
                    <h1 className="text-3xl font-medium">Sessões</h1>
                    <p className="font-medium">Gerencie e acompanhe todas as suas sessões de estudo e código.</p>
                </div>
                <div>
                    <button className="flex items-center gap-1 cursor-pointer font-medium bg-nova-sessao/60 border border-border p-4 rounded-4xl transition-transform duration-200 hover:scale-95 active:scale-80"><Plus size={24} />Nova sessão</button>
                </div>
            </div>
            {/* Card resumo rapido */}
                <div className="flex flex-col max-w-[1500px] mx-auto mt-8">
                    <div className="flex flex-col bg-surface p-3 rounded-2xl mr-300 border border-border">
                        <h2 className="text-2xl">Resumo rápido</h2>
                        {/* Total hours + Clock div*/}
                        <div className="flex mt-3 gap-3 text-xl items-center">
                            <Clock size={27} className="text-accent transition-transform duration-200 hover:scale-95" />
                            <div>
                                <span className="text-muted text-base">Total de Horas</span>
                                <p className="text-2xl font-medium">120h 34m</p>
                            </div>
                        </div>
                        {/* Sessions held + BarChart*/}
                        <div className="flex gap-3 mt-5 items-center">
                            <BarChart3 size={27} className="text-accent transition-transform duration-200 hover:scale-95" />
                            <div>
                                <span className="text-muted text-base">Sessões realizadas</span>
                                <p className="text-2xl font-medium">48</p>
                            </div>
                            {/* Main Sequence */}
                        </div>
                        <div className="flex gap-3 mt-5 items-center">
                            <Flame size={27} className="text-accent transition-transform duration-200 hover:scale-95" />
                            <div>
                                <span className="text-muted text-base">Sequência atual</span>
                                <p className="text-2xl font-medium">7 dias</p>
                            </div>
                            {/* Best Sequence */}
                        </div>
                        <div className="flex gap-3 mt-5 items-center">
                            <Trophy size={27} className="text-accent transition-transform duration-200 hover:scale-95" />
                            <div className="flex flex-col">
                                <span className="text-muted text-base">Melhor Sequência</span>
                                <p className="text-2xl font-medium">14 dias</p>
                            </div>
                        </div>
                    </div>
                </div>
            {/* Card filtros */}
            <div className="flex flex-col max-w-[1500px] mx-auto mt-2">
                <div className="bg-surface mr-300 rounded-2xl border border-border p-3">
                    {/* Filtros/Limpar-Filtros */}
                    <div className="flex items-center gap-29">
                        <h2 className="text-2xl">Filtros</h2>
                        <p className="text-sm text-accent font-medium cursor-pointer transition-transform duration-200 hover:scale-95 active:scale-75">Limpar Filtros</p>
                    </div>
                    {/* Tecnologias/Select-Box */}
                    <div>
                        <p className="mt-4 text-base">Tecnologia</p>
                        {/* button #1 */}
                        <div className="">
                            <button className="cursor-pointer transition-transform duration-200 text-muted hover:scale-95 gap-2 flex items-center bg-background w-full rounded-lg border border-border p-2">
                                <CodeXml size={19} className="" />
                                Todas as tecnologias
                                <ChevronDown className="ml-auto" />
                            </button>
                        </div>
                        {/* button #2 */}
                        <p className="mt-4 text-base">Período</p>
                        <div className="">
                            <button className="cursor-pointer transition-transform duration-200 text-muted hover:scale-95 flex items-center gap-2 bg-background w-full rounded-lg border border-border p-2">
                                <CalendarSearch size={19} />
                                Todos os períodos
                                <ChevronDown className="ml-auto" />
                            </button>
                        </div>
                        {/* button #3 */}
                        <p className="mt-4 text-base">Nota</p>
                        <div className="">
                            <button className="cursor-pointer transition-transform duration-200 text-muted hover:scale-95 flex items-center gap-2 bg-background w-full rounded-lg border border-border p-2">
                                <Star size={19} />
                                Todas as notas
                                <ChevronDown className="ml-auto" />
                            </button>
                        </div>
                    </div>
                    <div className="bg-surface mt-10">
                        <button className="flex items-center gap-3 mx-auto bg-nova-sessao p-3 rounded-xl transition-transform duration-200 hover:scale-95 active:scale-75 cursor-pointer">
                            <Download />
                            Exportar dados
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}