import React from "react";
import YouTube, { YouTubeProps } from "react-youtube";
import { CSSProperties } from "styled-components";

type Props = {
  videoId?: string;
  loading?: "eager" | "lazy";
  id?: string;
  style?: CSSProperties;
  className?: string;
  iFrameClassName?: string;
  title?: string;
};

const YoutubePlayer = ({
  videoId = "8KK1HYCvx9s",
  loading,
  id = "youtube-player",
  style,
  className,
  iFrameClassName,
  title,
}: Props) => {
  const opts = {
    height: "800",
    width: "100%",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };

  const onPlayerReady: YouTubeProps["onReady"] = (event) => {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  };

  const onPlay: YouTubeProps["onPlay"] = (e) => {
    console.log(e, "@@@");
    e.target.playVideo();
  };

  return (
    <YouTube
      videoId={videoId} // defaults -> ''
      id={id} // defaults -> ''
      className={className} // defaults -> ''
      iframeClassName={iFrameClassName} // defaults -> ''
      style={style} // defaults -> {}
      title={title} // defaults -> ''
      loading={loading} // defaults -> undefined
      opts={opts} // defaults -> {}
      //   onReady={onPlayerReady} // defaults -> noop
      onPlay={onPlay} // defaults -> noop
      //   onPause={func} // defaults -> noop
      //   onEnd={func} // defaults -> noop
      //   onError={func} // defaults -> noop
      //   onStateChange={func} // defaults -> noop
      //   onPlaybackRateChange={func} // defaults -> noop
      //   onPlaybackQualityChange={func} // defaults -> noop
    />
  );
};

export default YoutubePlayer;
