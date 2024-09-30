import {createPost} from '@/api/post';
import {UseMutatiolnCustomOptions} from '@/types/common';
import {useMutation} from '@tanstack/react-query';

const useMutateCreatePost = (mutationOptions?: UseMutatiolnCustomOptions) => {
  return useMutation({
    mutationFn: createPost,
    ...mutationOptions,
  });
};

export {useMutateCreatePost};
