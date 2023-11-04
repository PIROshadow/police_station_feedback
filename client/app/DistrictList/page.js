export default function DistrictList() {
  const cardDesignCSS = {
    backgroundImage:
      'url("https://images.thequint.com/thequint/2019-07/5f4f948f-10e3-4791-8aca-fbe60d1719c9/dhoraji_police_station.jpg?auto=format,compress&fmt=webp&format=webp&w=1200&h=900&dpr=1.0")',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundColor: 'grey',
    backgroundBlendMode: 'multiply'
  }
  return (
    <>
      <h1 className="text-black">District List</h1>
      <div className="grid grid-cols-4 gap-4 p-20">
        {/* Upper Row */}
        <div
          className="col-span-1 p-4 max-w-3/4 px-4 w-40 h-40 rounded-lg bg-black text-white"
          style={{ backgroundImage: 'url("your-image-url-1.jpg")' }}
        >
          Box 1
        </div>
        <div
          className="col-span-1 p-4 max-w-3/4 px-4 w-40 h-40 rounded-lg bg-black text-white"
          style={{ ...cardDesignCSS }}
        >
          Box 2
        </div>
        <div
          className="col-span-1 p-4 max-w-3/4 px-4 w-40 h-40 rounded-lg bg-black text-white"
          style={{ backgroundImage: 'url("your-image-url-4.jpg")' }}
        >
          Box 3
        </div>
        <div
          className="col-span-1 p-4 max-w-3/4 px-4 w-40 h-40 rounded-lg bg-black text-white"
          style={{ backgroundImage: 'url("your-image-url-4.jpg")' }}
        >
          Box 4
        </div>

        {/* Lower Row */}
        <div
          className="col-span-1 p-4 max-w-3/4 px-4 w-40 h-40 rounded-lg bg-black text-white"
          style={{ backgroundImage: 'url("your-image-url-5.jpg")' }}
        >
          Box 5
        </div>
        <div
          className="col-span-1 p-4 max-w-3/4 px-4 w-40 h-40 rounded-lg bg-black text-white"
          style={{ backgroundImage: 'url("your-image-url-6.jpg")' }}
        >
          Box 6
        </div>
        <div
          className="col-span-1 p-4 max-w-3/4 px-4 w-40 h-40 rounded-lg bg-black text-white"
          style={{ backgroundImage: 'url("your-image-url-7.jpg")' }}
        >
          Box 7
        </div>
        <div
          className="col-span-1 p-4 max-w-3/4 px-4 w-40 h-40 rounded-lg bg-black text-white"
          style={{ backgroundImage: 'url("your-image-url-8.jpg")' }}
        >
          Box 8
        </div>
      </div>
    </>
  );
}
