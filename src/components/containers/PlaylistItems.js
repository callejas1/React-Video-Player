import React from 'react';
import PlaylistItem from '../PlaylistItem';
import withLink from '../hoc/withLink';
import StyledPlaylistItems from '../styles/StyledPlaylistitems';

const PlaylistItemWithLink = withLink(PlaylistItem);

const PlaylistItems = ({ videos, active }) => (
  <StyledPlaylistItems>
    {videos.map((video) => (
      <PlaylistItemWithLink
        key={video.id}
        video={video}
        active={active.id === active.id ? true : false}
        played={video.played}
      />
    ))}
  </StyledPlaylistItems>
);

export default PlaylistItems;