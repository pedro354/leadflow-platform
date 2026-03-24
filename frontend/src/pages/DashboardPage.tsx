import CampaignPerfomanceSection from "../components/dashboard/CampaignPerformanceSection";
import MetricsSection from "../components/dashboard/MetricsSection";
import RecentLeadsSection from "../components/dashboard/RecentLeadsSection";


export default function DashboardPage() {
    //TODO: transformar em SectionWrapper com children
    return (
        <div className="dashboardContainer">

            <section>
                <h1>Olá Pedro</h1> //Apenas um nome de apresentação no começo
                <h3>Overview</h3> // Cards de metricas
                <MetricsSection />
            </section>
            
            <section>
                <h3>Campaign Performance</h3> // Tabela de performance das campanhas
                <CampaignPerfomanceSection />
            </section>
            
            <section>
                <h3>Recent Leads</h3> // Tabela de recentes leads
                <RecentLeadsSection />
            </section>
        </div>

    )

}
