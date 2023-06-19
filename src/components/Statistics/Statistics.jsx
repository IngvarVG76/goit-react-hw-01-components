import PropTypes from 'prop-types';

export const Statistics = ({ title, data }) => {

  return (
    <section className="statistics">
      {title && <h2 className="title">{title}</h2>}

      <ul className="stat-list">
        {data.map(item => (
          <li key={item.id} className="item">
            <span className="label">{item.label}</span>
            <span className="percentage">{item.percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

Statistics.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
    ).isRequired,
    title: PropTypes.string,
};
