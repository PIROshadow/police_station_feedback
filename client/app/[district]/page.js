"use client";
import { useEffect, useState } from "react";

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

  return (
    <>
      <h1>District List</h1>
      <div className="grid grid-cols-4 gap-4 p-20">
        {data.map((item, index) => (
          <div
            key={index}
            className="col-span-1 p-4 max-w-3/4 px-4 w-40 h-40 rounded-lg bg-black text-white"
            style={{ backgroundImage: 'url("your-image-url.jpg")' }}
          >
            {item}
          </div>
        ))}
      </div>
    </>
  );
}
