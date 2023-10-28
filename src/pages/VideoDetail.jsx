import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getData } from '../utils/helpers';
import ReactPlayer from 'react-player';
import VideoInfo from '../components/VideoInfo';
import VideoCard from '../components/VideoCard';
import VideoComment from '../components/VideoComment';
import SkeletonLoading from '../components/SkeletonLoading';

const VideoDetail = () => {
  const [searchParam] = useSearchParams();
  const [related, setRelated] = useState(null);
  const id = searchParam.get('v');

  useEffect(() => {
    // videoyla alakalı içerikleri getirir
    getData(`/related?id=${id}`).then((res) =>
      setRelated(res.data.data)
    );
  }, []);

  return (
    <div className="lg: flex flex-col lg:flex-row lg:px-[100px] gap-5 p-4">
      <div className="w-full">
        <ReactPlayer
          controls
          url={`https://www.youtube.com/watch?v=${id}`}
          width={'100%'}
          height={'60vh'}
        />

        <VideoInfo id={id} />
        <div>
        <VideoComment id={id} />
      </div>
      </div>
     

      <div className="contain">
        {!related
          ?  < SkeletonLoading 
          className="h-2.5  rounded-full bg-gray-700 w-32 mb-2"
          />
          : related.map((item) => {
              if (item.type !== 'video') return;
              return <VideoCard video={item} />;
            })}
      </div>
    </div>
  );
};

export default VideoDetail;
