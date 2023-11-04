"use client";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function talukaList({ params }) {
  const [data, setData] = useState([]);

  function gettalukaList() {
    fetch(`http://192.168.59.200:5000/api/${params.district}/talukas`)
      .then((response) => response.json())
      .then((result) => {
        setData(result); // Store the fetched data in the state
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }

  useEffect(() => {
    gettalukaList();
  }, []);
  const arr = [
    "https://ngs-space1.sgp1.digitaloceanspaces.com/am/uploads/mediaGallery/image/1658653042367.jpg-org",
    "https://media-cdn.tripadvisor.com/media/photo-f/12/07/dd/95/presently-some-300-are.jpg",
    "https://shilpgroup.com/wp-content/uploads/2023/05/Picture-1.0-916x515-1.jpg",
  ];

  return (
    <>
      <h1 className="text-black">Taluks List</h1>
      <div className="grid grid-cols-4 gap-4 p-20">
        {data.map((item, index) => (
          <Link href={`/feedback/${params.district}/${item.toLowerCase()}`}>
            <div
              key={index}
              className="col-span-1 p-4 max-w-3/4 px-4 w-40 h-40 rounded-lg bg-black text-black"
              style={{
                backgroundImage:
                  'url("https://ngs-space1.sgp1.digitaloceanspaces.com/am/uploads/mediaGallery/image/1658653042367.jpg-org")',
              }}
            >
              {item}
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}
