import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComment } from '@fortawesome/free-solid-svg-icons';

export default function Header() {
  return (
    <div>
      <button type="button">
        <FontAwesomeIcon icon={faComment} />
        {' '}
        <span>카카오 로그인</span>
      </button>
    </div>
  );
}
