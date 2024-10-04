import {createPost} from '@/api/post';
import queryClient from '@/api/queryClient';
import {queryKeys} from '@/constants';
import {UseMutatiolnCustomOptions} from '@/types/common';
import {Marker} from '@/types/domain';
import {useMutation} from '@tanstack/react-query';

const useMutateCreatePost = (mutationOptions?: UseMutatiolnCustomOptions) => {
  return useMutation({
    mutationFn: createPost,
    onSuccess: newPost => {
      // queryClient.invalidateQueries({
      //   queryKey: [queryKeys.MARKER, queryKeys.GET_MARKERS],
      // });
      queryClient.setQueryData<Marker[]>(
        [queryKeys.MARKER, queryKeys.GET_MARKERS],
        existingMarkers => {
          const newMarker = {
            id: newPost.id,
            latitude: newPost.latitude,
            longitude: newPost.longitude,
            score: newPost.score,
          };
          return existingMarkers
            ? [...existingMarkers, newMarker]
            : [newMarker];
        },
      );
    },
    ...mutationOptions,
  });
};

export {useMutateCreatePost};
