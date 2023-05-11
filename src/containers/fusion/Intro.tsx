import { useRef, useState } from 'react';
import { BsFillPlayFill, BsPauseFill } from 'react-icons/bs';

import styles from '@/styles/Intro.module.css';
import { classNames } from 'utils/classNames';

export const Intro = () => {
  const [playVideo, setPlayVideo] = useState(false);
  const vidRef = useRef<HTMLVideoElement>(null);

  return (
    <section className={classNames(styles["app__video"])}>
      <video
        ref={vidRef}
        src="/fusion/meal.mp4"
        loop
        controls={false}
        muted
      />
      <div className={classNames(styles["app__video-overlay"], "flex__center")}>
        <div
          className={classNames(styles["app__video-overlay_circle"],"flex__center")}
          onClick={() => {
            setPlayVideo(!playVideo);
            if(vidRef.current){
              playVideo ?  vidRef.current.pause() : vidRef.current.play();
            }
          }}
        >
          {playVideo ? (
            <BsPauseFill color="#fff" fontSize={30} />
          ) : (
            <BsFillPlayFill color="#fff" fontSize={30} />
          )}
        </div>
      </div>
    </section>
  );
};

