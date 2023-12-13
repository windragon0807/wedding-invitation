import classNames from 'classnames/bind';
import Section from '@shared/Section';
import styles from './Map.module.scss';
import React, { useEffect, useRef } from 'react';
import { Location } from '@models/wedding';

declare global {
  interface Window {
    // 카카오맵 API가 타이핑이 잘 되어 있지 않기 때문에 일단 any로 설정
    kakao: any;
  }
}

const cx = classNames.bind(styles);

type Props = {
  location: Location;
};

export default function Map({ location }: Props) {
  const mapContainer = useRef(null);

  // https://apis.map.kakao.com/web/guide/
  useEffect(() => {
    /* script 태그를 비동기적으로 생성해서 head 태그에 추가 */
    const script = document.createElement('script');
    script.src = `https://dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.REACT_APP_KAKAO_APP_KEY}&autoload=false`;
    script.async = true;

    document.head.appendChild(script);

    /* 비동기로 받아옴에 따라 스크립트 로드 -> 카카오맵 로드 순서 보장 */
    script.onload = () => {
      window.kakao.maps.load(() => {
        const position = new window.kakao.maps.LatLng(
          location.lat, // 위도
          location.lng, // 경도
        );

        const options = {
          center: position, // 지도의 중심좌표
          level: 3, // 지도의 확대 레벨
        };
        const map = new window.kakao.maps.Map(mapContainer.current, options); // 지도 생성 및 객체 리턴

        const marker = new window.kakao.maps.Marker({ position });
        marker.setMap(map); // 마커를 지도에 표시
      });
    };
  }, [location]);

  return (
    <Section
      title={
        <div className={cx('wrap-header')}>
          <span className={cx('txt-title')}>오시는길</span>
          <span className={cx('txt-subtitle')}>{location.name}</span>
          <span className={cx('txt-subtitle')}>{location.address}</span>
        </div>
      }>
      <div className={cx('wrap-map')}>
        <div className={cx('map')} ref={mapContainer}></div>
        <a
          className={cx('btn-find-way')}
          href={location.link}
          target="_blank" // 새 탭에서 열기
          rel="noreferrer" // 보안 관련
        >
          길찾기
        </a>
      </div>

      <div>
        <WayToCome label="버스" list={location.waytocome.bus} />
        <WayToCome label="지하철" list={location.waytocome.metro} />
      </div>
    </Section>
  );
}

type WayToComeProps = {
  label: React.ReactNode;
  list: string[];
};

function WayToCome({ label, list }: WayToComeProps) {
  return (
    <div className={cx('wrap-waytocome')}>
      <div className={cx('txt-label')}>{label}</div>
      <ul>
        {list.map(waytocome => (
          <li>{waytocome}</li>
        ))}
      </ul>
    </div>
  );
}
