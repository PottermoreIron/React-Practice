import React from "react";
import { useParams, useSearchParams, useLocation } from "react-router-dom";

export const Detail = () => {
  const DetailData = [
    {
      id: "01",
      content: "hello world",
    },
    {
      id: "02",
      content: "test",
    },
    {
      id: "03",
      content: "POTATO",
    },
  ];
  //  params传参
  const { id, title } = useParams();

  // search传参
  //   const [search] = useSearchParams();
  //   const id = search.get("id");
  //   const title = search.get("title");

  //   state传参
  // const { id, title } = useLocation().state;

  const DetailItem = DetailData.find((item) => item.id === id);

  return (
    <ul>
      <li>ID:{id}</li>
      <li>TITLE:{title}</li>
      <li>CONTENT:{DetailItem.content}</li>
    </ul>
  );
};
