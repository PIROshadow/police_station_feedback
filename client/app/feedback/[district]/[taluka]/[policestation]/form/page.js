export default function PoliceStationForm({ params }) {
    console.log("Policestation:", params.district, params.taluka, params.policestation, params.policestationId);
    return (
      <h1 className="text-black">Police Station feedback</h1>
    );
  }
  