import classNames from 'classnames/bind';
import { parseISO, format } from 'date-fns';
import { ko } from 'date-fns/locale';
import { DayPicker } from 'react-day-picker';
import { memo } from 'react';
import 'react-day-picker/dist/style.css';
import styles from './Calendar.module.scss';
import Section from '@shared/Section';

const cx = classNames.bind(styles);

type Props = {
  date: string;
};

function Calendar({ date }: Props) {
  const weddingDate = parseISO(date);

  return (
    <Section
      title={
        <div className={cx('wrap-header')}>
          <span className={cx('txt-date')}>
            {format(weddingDate, 'yyyy.MM.dd')}
          </span>
          <span className={cx('txt-time')}>
            {format(weddingDate, 'aaa h시 eeee', { locale: ko })}
          </span>
        </div>
      }>
      <div className={cx('wrap-calendar')}>
        <style>{css}</style>
        <DayPicker
          locale={ko}
          month={weddingDate}
          selected={weddingDate} // 달력에 표기될 선택된 날짜
          formatters={{ formatCaption: () => '' }} // 달력 상단에 보여줄 텍스트
        />
      </div>
    </Section>
  );
}

const css = `
  .rdp-caption {
    display: none;
  }
  .rdp-cell {
    cursor: default;
  }
  .rdp-head_cell {
    font-weight: 500;
    font-size: 14px;
    font-weight: bold;
  }
  .rdp-day_selected {
    background-color: var(--red);
    font-weight: bold;
    color: #fff;
  }
  .rdp-day_selected:hover {
    background-color: var(--red);
  }
  .rdp-head_cell[aria-label="일요일"] {
    color: var(--red);
  }
  .rdp-head_cell[aria-label="토요일"] {
    color: var(--blue);
  }
`;

export default memo(Calendar);
