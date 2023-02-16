import PropTypes from "prop-types";
export const Statistics = ({ title, stats }) => {
    return <section className="statistics">
        <h2 className="title">{title}</h2>

        <ul className="stat-list">
            <li className="item">
                <span className="label">{stats[0].label}</span>
                <span className="percentage">{stats[0].percentage}</span>
            </li>
            <li className="item">
                <span className="label">{stats[1].label}</span>
                <span className="percentage">{stats[1].percentage}</span>
            </li>
            <li className="item">
                <span className="label">{stats[2].label}</span>
                <span className="percentage">{stats[2].percentage}</span>
            </li>
            <li className="item">
                <span className="label">{stats[3].label}</span>
                <span className="percentage">{stats[3].percentage}</span>
            </li>
        </ul>
    </section>
};

Statistics.protoType = {
    title: PropTypes.string.isRequired,
    stats: PropTypes.shape({
        label: PropTypes.string,
        percentage:PropTypes.number,
    }),
}