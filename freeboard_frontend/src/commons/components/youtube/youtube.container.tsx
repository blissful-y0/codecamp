import React from 'react';
import ReactPlayer from 'react-player/youtube';

export default function YoutubePlayer({Url}) {
  return (
    <>
      <ReactPlayer controls={true} url={Url} />
    </>
  );
}
