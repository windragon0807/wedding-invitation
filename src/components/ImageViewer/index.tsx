import { Swiper, SwiperSlide } from 'swiper/react';
import classNames from 'classnames/bind';
import 'swiper/css';
import styles from './ImageViewer.module.scss';
import './swiper.css';
import Dimmed from '../shared/Dimmed';
import generateImageUrl from '@/utils/generateImageUrl';

const cx = classNames.bind(styles);

type Props = {
  images: string[];
  open: boolean;
  selectedIdx: number;
  onClose: () => void;
};

export default function ImageViewer({
  images,
  open = false,
  selectedIdx,
  onClose,
}: Props) {
  if (open === false) {
    return null;
  }

  return (
    <Dimmed>
      <CloseButton className={cx('icon-close')} onClose={onClose} />
      <Swiper
        spaceBetween={20} // 이미지 사이의 간격
        slidesPerView={1} // 한 화면에 보여줄 이미지 개수
        loop={true} // 순환 반복
        initialSlide={selectedIdx}>
        {images.map((src, idx) => (
          <SwiperSlide key={idx}>
            <picture>
              <source
                srcSet={generateImageUrl({
                  filename: src,
                  format: 'webp',
                })}
                type="image/webp"
              />
              <img
                src={generateImageUrl({
                  filename: src,
                  format: 'jpg',
                })}
                alt="이미지"
              />
            </picture>
          </SwiperSlide>
        ))}
      </Swiper>
    </Dimmed>
  );
}

type CloseButtonProps = {
  onClose: () => void;
  className: string;
};

function CloseButton({ onClose, className }: CloseButtonProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      onClick={onClose}>
      <path d="M12,0A12,12,0,1,0,24,12,12.013,12.013,0,0,0,12,0Zm0,22A10,10,0,1,1,22,12,10.011,10.011,0,0,1,12,22Z" />
      <path d="M16.707,7.293a1,1,0,0,0-1.414,0L12,10.586,8.707,7.293A1,1,0,1,0,7.293,8.707L10.586,12,7.293,15.293a1,1,0,1,0,1.414,1.414L12,13.414l3.293,3.293a1,1,0,0,0,1.414-1.414L13.414,12l3.293-3.293A1,1,0,0,0,16.707,7.293Z" />
    </svg>
  );
}
