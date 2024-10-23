import { VideoConference } from "@superviz/react-sdk";

const VideoRoom = () => {
  const collaborationMode = {
    enabled: true,
  };

  return (
    <VideoConference
      enableRecording={true}
      participantType="host"
      collaborationMode={collaborationMode}
    />
  );
};

export default VideoRoom;
