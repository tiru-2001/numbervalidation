import React from "react";
import { Stack, Box } from "@mui/material";
import { VideoCard, ChannelCard } from "./common.js";
const Videos = ({ videos, direction }) => {
  if (!videos?.length) return "loading";
  return (
    <>
      <Stack
        direction={direction || "row"}
        flexWrap="wrap"
        justifyContent="start"
        gap="2"
      >
        {videos.map((item, id) => {
          return (
            <Box key={id}>
              {item.id.videoId && <VideoCard video={{ item }} />}
              {item.id.channelId && <ChannelCard channelDetail={{ item }} />}
            </Box>
          );
        })}
      </Stack>
    </>
  );
};

export default Videos;
