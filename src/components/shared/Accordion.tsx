import classNames from 'classnames/bind';
import { PropsWithChildren, useState } from 'react';

import styles from './Accordion.module.scss';

const cx = classNames.bind(styles);

type Props = {
  label: string;
};

export default function Accordion({
  label,
  children,
}: PropsWithChildren<Props>) {
  const [expanded, setExpanded] = useState(false);

  const handleToggle = () => {
    setExpanded(prev => !prev);
  };

  return (
    <div className={cx(['wrap-accoridon', expanded ? 'open' : ''])}>
      <div className={cx('wrap-header')} onClick={handleToggle}>
        <span>{label}</span>
        <IconArrowDown className={cx('ico-arrow-down')} />
      </div>
      <div className={cx('wrap-content')}>{children}</div>
    </div>
  );
}

function IconArrowDown({ className }: { className: string }) {
  return (
    <svg className={className} viewBox="0 0 512 512">
      <polygon points="396.6,160 416,180.7 256,352 96,180.7 115.3,160 256,310.5 " />
    </svg>
  );
}
