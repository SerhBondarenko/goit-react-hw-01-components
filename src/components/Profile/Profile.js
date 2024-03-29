import PropTypes from 'prop-types';
// импортируется в компонент где будет использоваться
// нужно только для разработки, в продакшин не пойдет
import s from '../Profile/ProfileStyles.module.css';

export default function Profile(props) {
  const {
    stats,
    avatar,
    location = 'не известно',
    tag,
    username = 'не известно',
  } = props;
  return (
    <div className={s.profile}>
      <div className={s.description}>
        <img src={avatar} alt={avatar} width={200} className={s.avatar} />
        <p className={s.name}>{username}</p>
        <p className={s.tag}>{tag}</p>
        <p className={s.location}>{location}</p>
      </div>

      <ul className={s.stats}>
        <li>
          <span className={s.label}>Follovers</span>
          <span className={s.quantity}>{stats.followers}</span>
        </li>
        <li>
          <span className={s.label}>Views</span>
          <span className={s.quantity}>{stats.views}</span>
        </li>
        <li>
          <span className={s.label}>Likes</span>
          <span className={s.quantity}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
}
//================================ propTypes =================
Profile.propTypes = {
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.objectOf(PropTypes.number).isRequired,
  location: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
};
