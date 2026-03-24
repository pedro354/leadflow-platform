import MetricCard from "./MetricCard";

export default function MetricsSection() {
    return (
            <section className="metric-section">
                <MetricCard title="New Leads" value={150} trend={20} />
                <MetricCard title="Opportunities" value={40} trend={1.4} />
                <MetricCard title="Converted" value={321} trend={35.4} />
                <MetricCard title="Conversion Rate" value={20} trend={2} />
            </section>
    )
}

