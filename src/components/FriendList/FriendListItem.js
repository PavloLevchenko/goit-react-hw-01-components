import PropTypes from 'prop-types';
import s from './FriendListItem.module.css';

const FriendListItem = props => {
  const { id, avatar, name, isOnline } = props;
  const online = isOnline ? ' ' + s.statusActive : '';
  return (
    <li className={s.item} key={id}>
      <span className={s.status + online}>{isOnline}</span>
      <img className={s.avatar} src={avatar} alt={id} width="48" />
      <p className={s.name}>{name}</p>
    </li>
  );
};

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

export default FriendListItem;
