export default function DistrictList() {
  return (
    <>
      <h1>District List</h1>
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
          style={{
            backgroundImage:
              'url("data:image/jpeg;base64,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")',
          }}
        >
          Box 2
        </div>
        <div
          className="col-span-1 p-4 max-w-3/4 px-4 w-40 h-40 rounded-lg bg-black text-white"
          style={{ backgroundImage: 'url("your-image-url-3.jpg")' }}
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
