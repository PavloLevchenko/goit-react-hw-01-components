import PropTypes from 'prop-types';
import s from './Statistics.module.css';

const Statistics = props => {
  return (
    <section className={s.statistics}>
      {props.title ? <h2 className={s.title}>{props.title}</h2> : ''}

      <ul className={s.statList}>
        {props.stats.map(stat => (
          <li className={s.item} key={stat['id']}>
            <span className={s.label}>{stat['label']}</span>
            <span className={s.percentage}>{stat['percentage']}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.array.isRequired,
};

export default Statistics;
