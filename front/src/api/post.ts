import {ImageUri, Post} from '@/types/domain';
import axiosInstance from './axios';

type RequestCreatePost = Omit<Post, 'id'> & {imageUris: ImageUri};

type ResponsePost = Post & {images: ImageUri[]};

const createPost = async (body: RequestCreatePost): Promise<ResponsePost> => {
  const {data} = await axiosInstance.post('/posts', body);

  return data;
};

export {createPost};
export type {ResponsePost};
