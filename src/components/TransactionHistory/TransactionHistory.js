import PropTypes from 'prop-types';
import s from './TransactionHistory.module.css';

const TransactionHistory = props => {
  return (
    <table className={s.transactionHistory}>
      <thead className={s.transactionHead}>
        <tr>
          <th className={s.transactionHeadCell}>Type</th>
          <th className={s.transactionHeadCell}>Amount</th>
          <th className={s.transactionHeadCell}>Currency</th>
        </tr>
      </thead>

      <tbody>
        {props.items.map(transaction => (
          <tr className={s.transactionRow} key={transaction.id}>
            <td className={s.transactionCell}>{transaction.type}</td>
            <td className={s.transactionCell}>{transaction.amount}</td>
            <td className={s.transactionCell}>{transaction.currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.array.isRequired,
};

export default TransactionHistory;
