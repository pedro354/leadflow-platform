interface CardProps{
    title: string,
    value: number,
    trend: number
}
function renderTrend(trend: number) {
    if (trend > 0) {
        return <span className="trend-up">+{trend}% this week</span>
    }

    if (trend < 0) {
        return <span className="trend-down">-{Math.abs(trend)}% this week</span>
    }

    return <span>0% this week</span>
}export default function MetricCard({title, value, trend}: CardProps){
    return(
        <div className="card">
            <h3>{title}</h3>
            <h1>{value}</h1>
            <h3>{renderTrend(trend)}</h3>
        </div>
    )
}