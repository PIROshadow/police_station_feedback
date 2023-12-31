"use client";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function policeStationList({ params }) {
  const [data, setData] = useState([]);

  function policeStationList() {
    fetch(
      `http://192.168.59.200:5000/api/${params.district}/${params.taluka}/policestations`
    )
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        setData(result); // Store the fetched data in the state
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }

  useEffect(() => {
    policeStationList();
  }, []);

  return (
    <>
      <h1 className="text-black">police Station List</h1>
      <div className="grid grid-cols-4 gap-4 p-20">
        {data.map((item, index) => (
          <Link
            href={`/feedback/${params.district}/${
              params.taluka
            }/${item.name.toLowerCase()}`}
          >
            <div
              key={index}
              className="col-span-1 p-4 max-w-3/4 px-4 w-40 h-40 rounded-lg bg-black text-black"
              style={{
                backgroundImage:
                  'url("https://redpithemes.com/Documentation/assets/img/page_bg/page_bg_00.jpg")',
              }}
            >
              {item.name}
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}
