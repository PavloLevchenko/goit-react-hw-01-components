import PropTypes from 'prop-types';
import s from './Statistics.module.css';

const Statistics = props => {
  return (
    <section className={s.statistics}>
      {props.title ? <h2 className={s.title}>{props.title}</h2> : ''}

      <ul className={s.statList}>
        <li className={s.item} key={props.stats[0]['id']}>
          <span className={s.label}>{props.stats[0]['label']}</span>
          <span className={s.percentage}>{props.stats[0]['percentage']}%</span>
        </li>
        <li className={s.item} key={props.stats[1]['id']}>
          <span className={s.label}>{props.stats[1]['label']}</span>
          <span className={s.percentage}>{props.stats[1]['percentage']}%</span>
        </li>
        <li className={s.item} key={props.stats[2]['id']}>
          <span className={s.label}>{props.stats[2]['label']}</span>
          <span className={s.percentage}>{props.stats[2]['percentage']}%</span>
        </li>
        <li className={s.item} key={props.stats[3]['id']}>
          <span className={s.label}>{props.stats[3]['label']}</span>
          <span className={s.percentage}>{props.stats[3]['percentage']}%</span>
        </li>
      </ul>
    </section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.array.isRequired,
};

export default Statistics;
