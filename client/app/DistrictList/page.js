"use client";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function DistrictList() {
  const [data, setData] = useState([]);

  const boxContent = "Use Client"; // Content to display in all boxes

  const arr = [
    "https://www.shutterstock.com/image-vector/police-station-department-building-vector-260nw-2146124569.jpg",
    "https://gumlet.assettype.com/psuwatch%2Fimport%2Fwp-content%2Fuploads%2F2022%2F02%2F2147267006_5fc8ac9eb0239.jpg?auto=format%2Ccompress&fit=max&w=768&dpr=1.3",
    "https://clipart-library.com/img/1717261.jpg",
    "https://www.shutterstock.com/image-vector/police-station-department-building-vector-260nw-2146124569.jpg",
    "https://gumlet.assettype.com/psuwatch%2Fimport%2Fwp-content%2Fuploads%2F2022%2F02%2F2147267006_5fc8ac9eb0239.jpg?auto=format%2Ccompress&fit=max&w=768&dpr=1.3",
    "https://clipart-library.com/img/1717261.jpg",

    "https://www.shutterstock.com/image-vector/police-station-department-building-vector-260nw-2146124569.jpg",
    "https://gumlet.assettype.com/psuwatch%2Fimport%2Fwp-content%2Fuploads%2F2022%2F02%2F2147267006_5fc8ac9eb0239.jpg?auto=format%2Ccompress&fit=max&w=768&dpr=1.3",
    "https://clipart-library.com/img/1717261.jpg",
    "https://www.shutterstock.com/image-vector/police-station-department-building-vector-260nw-2146124569.jpg",
    "https://gumlet.assettype.com/psuwatch%2Fimport%2Fwp-content%2Fuploads%2F2022%2F02%2F2147267006_5fc8ac9eb0239.jpg?auto=format%2Ccompress&fit=max&w=768&dpr=1.3",
    "https://clipart-library.com/img/1717261.jpg",
    "https://www.shutterstock.com/image-vector/police-station-department-building-vector-260nw-2146124569.jpg",
    "https://gumlet.assettype.com/psuwatch%2Fimport%2Fwp-content%2Fuploads%2F2022%2F02%2F2147267006_5fc8ac9eb0239.jpg?auto=format%2Ccompress&fit=max&w=768&dpr=1.3",
    "https://clipart-library.com/img/1717261.jpg",
    "https://www.shutterstock.com/image-vector/police-station-department-building-vector-260nw-2146124569.jpg",
    "https://gumlet.assettype.com/psuwatch%2Fimport%2Fwp-content%2Fuploads%2F2022%2F02%2F2147267006_5fc8ac9eb0239.jpg?auto=format%2Ccompress&fit=max&w=768&dpr=1.3",
    "https://clipart-library.com/img/1717261.jpg",
    "https://www.shutterstock.com/image-vector/police-station-department-building-vector-260nw-2146124569.jpg",
    "https://gumlet.assettype.com/psuwatch%2Fimport%2Fwp-content%2Fuploads%2F2022%2F02%2F2147267006_5fc8ac9eb0239.jpg?auto=format%2Ccompress&fit=max&w=768&dpr=1.3",
    "https://clipart-library.com/img/1717261.jpg",
    "https://www.shutterstock.com/image-vector/police-station-department-building-vector-260nw-2146124569.jpg",
    "https://gumlet.assettype.com/psuwatch%2Fimport%2Fwp-content%2Fuploads%2F2022%2F02%2F2147267006_5fc8ac9eb0239.jpg?auto=format%2Ccompress&fit=max&w=768&dpr=1.3",
    "https://clipart-library.com/img/1717261.jpg",
    "https://www.shutterstock.com/image-vector/police-station-department-building-vector-260nw-2146124569.jpg",
    "https://gumlet.assettype.com/psuwatch%2Fimport%2Fwp-content%2Fuploads%2F2022%2F02%2F2147267006_5fc8ac9eb0239.jpg?auto=format%2Ccompress&fit=max&w=768&dpr=1.3",
    "https://clipart-library.com/img/1717261.jpg",
    "https://www.shutterstock.com/image-vector/police-station-department-building-vector-260nw-2146124569.jpg",
    "https://gumlet.assettype.com/psuwatch%2Fimport%2Fwp-content%2Fuploads%2F2022%2F02%2F2147267006_5fc8ac9eb0239.jpg?auto=format%2Ccompress&fit=max&w=768&dpr=1.3",
    "https://clipart-library.com/img/1717261.jpg",
    "https://www.shutterstock.com/image-vector/police-station-department-building-vector-260nw-2146124569.jpg",
    "https://gumlet.assettype.com/psuwatch%2Fimport%2Fwp-content%2Fuploads%2F2022%2F02%2F2147267006_5fc8ac9eb0239.jpg?auto=format%2Ccompress&fit=max&w=768&dpr=1.3",
    "https://clipart-library.com/img/1717261.jpg",
    "https://www.shutterstock.com/image-vector/police-station-department-building-vector-260nw-2146124569.jpg",
    "https://gumlet.assettype.com/psuwatch%2Fimport%2Fwp-content%2Fuploads%2F2022%2F02%2F2147267006_5fc8ac9eb0239.jpg?auto=format%2Ccompress&fit=max&w=768&dpr=1.3",
    "https://clipart-library.com/img/1717261.jpg",
    "https://www.shutterstock.com/image-vector/police-station-department-building-vector-260nw-2146124569.jpg",
    "https://gumlet.assettype.com/psuwatch%2Fimport%2Fwp-content%2Fuploads%2F2022%2F02%2F2147267006_5fc8ac9eb0239.jpg?auto=format%2Ccompress&fit=max&w=768&dpr=1.3",
    "https://clipart-library.com/img/1717261.jpg",
    "https://www.shutterstock.com/image-vector/police-station-department-building-vector-260nw-2146124569.jpg",
    "https://gumlet.assettype.com/psuwatch%2Fimport%2Fwp-content%2Fuploads%2F2022%2F02%2F2147267006_5fc8ac9eb0239.jpg?auto=format%2Ccompress&fit=max&w=768&dpr=1.3",
    "https://clipart-library.com/img/1717261.jpg",
    "https://www.shutterstock.com/image-vector/police-station-department-building-vector-260nw-2146124569.jpg",
    "https://gumlet.assettype.com/psuwatch%2Fimport%2Fwp-content%2Fuploads%2F2022%2F02%2F2147267006_5fc8ac9eb0239.jpg?auto=format%2Ccompress&fit=max&w=768&dpr=1.3",
    "https://clipart-library.com/img/1717261.jpg",
    "https://www.shutterstock.com/image-vector/police-station-department-building-vector-260nw-2146124569.jpg",
    "https://gumlet.assettype.com/psuwatch%2Fimport%2Fwp-content%2Fuploads%2F2022%2F02%2F2147267006_5fc8ac9eb0239.jpg?auto=format%2Ccompress&fit=max&w=768&dpr=1.3",
    "https://clipart-library.com/img/1717261.jpg",
    "https://www.shutterstock.com/image-vector/police-station-department-building-vector-260nw-2146124569.jpg",
    "https://gumlet.assettype.com/psuwatch%2Fimport%2Fwp-content%2Fuploads%2F2022%2F02%2F2147267006_5fc8ac9eb0239.jpg?auto=format%2Ccompress&fit=max&w=768&dpr=1.3",
    "https://clipart-library.com/img/1717261.jpg",
    "https://www.shutterstock.com/image-vector/police-station-department-building-vector-260nw-2146124569.jpg",
    "https://gumlet.assettype.com/psuwatch%2Fimport%2Fwp-content%2Fuploads%2F2022%2F02%2F2147267006_5fc8ac9eb0239.jpg?auto=format%2Ccompress&fit=max&w=768&dpr=1.3",
    "https://clipart-library.com/img/1717261.jpg",
    "https://www.shutterstock.com/image-vector/police-station-department-building-vector-260nw-2146124569.jpg",
    "https://gumlet.assettype.com/psuwatch%2Fimport%2Fwp-content%2Fuploads%2F2022%2F02%2F2147267006_5fc8ac9eb0239.jpg?auto=format%2Ccompress&fit=max&w=768&dpr=1.3",
    "https://clipart-library.com/img/1717261.jpg",
    "https://www.shutterstock.com/image-vector/police-station-department-building-vector-260nw-2146124569.jpg",
    "https://gumlet.assettype.com/psuwatch%2Fimport%2Fwp-content%2Fuploads%2F2022%2F02%2F2147267006_5fc8ac9eb0239.jpg?auto=format%2Ccompress&fit=max&w=768&dpr=1.3",
    "https://clipart-library.com/img/1717261.jpg",
    "https://www.shutterstock.com/image-vector/police-station-department-building-vector-260nw-2146124569.jpg",
    "https://gumlet.assettype.com/psuwatch%2Fimport%2Fwp-content%2Fuploads%2F2022%2F02%2F2147267006_5fc8ac9eb0239.jpg?auto=format%2Ccompress&fit=max&w=768&dpr=1.3",
    "https://clipart-library.com/img/1717261.jpg",
    "https://www.shutterstock.com/image-vector/police-station-department-building-vector-260nw-2146124569.jpg",
    "https://gumlet.assettype.com/psuwatch%2Fimport%2Fwp-content%2Fuploads%2F2022%2F02%2F2147267006_5fc8ac9eb0239.jpg?auto=format%2Ccompress&fit=max&w=768&dpr=1.3",
    "https://clipart-library.com/img/1717261.jpg",
  ];
  function getDisctrictList() {
    fetch("http://192.168.59.200:5000/api/districts")
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
    console.log(1);
    getDisctrictList();
  }, []);

  const cardDesignCSS = {
    backgroundImage: `{'url({arr})'}`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundColor: "grey",
    backgroundBlendMode: "multiply",
  };

  return (
    <>
      <h1 className="text-black">District List</h1>
      <div className="grid grid-cols-4 gap-4 p-20">
        {data.map((item, index) => (
          <Link key={index} href={`/feedback/${item.name.toLowerCase()}`}>
            <div
              className="col-span-1 p-4 max-w-3/4 px-4 w-40 h-40 rounded-lg bg-black text-black"
              style={{
                backgroundImage: `url(${arr[index]})`, // Use the image URL from the 'arr' array
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
