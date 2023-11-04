export default function PoliceStationInfo({ params }) {
  console.log(params.district, params.taluka, params.policestation);
  return (
    <h1 className="text-black">Police Station Info</h1>
  );
}
