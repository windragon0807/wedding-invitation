import classNames from 'classnames/bind';
import styles from './Dimmed.module.scss';

const cx = classNames.bind(styles);

type Props = {
  children: React.ReactNode;
};

export default function Dimmed({ children }: Props) {
  return <div className={cx('dimmed')}>{children}</div>;
}
