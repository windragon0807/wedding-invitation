import classNames from 'classnames/bind';
import { format, parseISO, getDay } from 'date-fns';

import styles from './Heading.module.scss';
import Section from '@shared/Section';

const cx = classNames.bind(styles);

const days = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];

type Props = {
  date: string;
};

export default function Heading({ date }: Props) {
  /* Date 타입으로 변경시키기 */
  const weddingDate = parseISO(date);

  const title = format(weddingDate, 'yy.MM.dd');
  const subTitle = days[getDay(weddingDate)]; // 0 ~ 6

  return (
    <Section className={cx('container')}>
      <div className={cx('txt-date')}>{title}</div>
      <div className={cx('txt-day')}>{subTitle}</div>
    </Section>
  );
}
