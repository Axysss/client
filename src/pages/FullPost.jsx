import React from "react";
import { useParams } from "react-router-dom";
import axios from "../axios";
import Markdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

import { Post } from "../components/Post";



export const FullPost = () => {
  const [data, setData] = React.useState();
  const [isLoading, setLoading] = React.useState(true);
  const { id } = useParams();

React.useEffect(() => {
  axios
    .get(`/posts/${id}`)
    .then((res) => {
    setData(res.data);
    setLoading(false);
  })
  .catch((err) => {
    console.warn(err);
    alert('Ошибка при получении статьи');
  })
}, []);

if (isLoading) {
  return <Post isLoading={isLoading} isFullPost />
}

  return (
    <>
      <Post
         id={data._id}
         title={data.title}
         imageUrl={data.imageUrl ? `http://localhost:4444${data.imageUrl}` : ''}
         user={data.user}
         createdAt={data.createdAt}
         viewsCount={data.viewsCount}

         isFullPost
      >
        <Markdown remarkPlugins={[remarkGfm]}>{data.text}</Markdown>
      </Post>
      
    </>
  );
};