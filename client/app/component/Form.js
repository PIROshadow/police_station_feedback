import RatingStar from "./Ratingstar"

export default function Form () {
    
    return (
        <div className="max-w-7xl w-full md:w-9/12 bg-blue mx-5 py-5  ">
            
            <div className="bg-white p-2 text-black justify-center font-bold py-5 ">
                <h1 className="text-4xl font-bold">Sola police station</h1>
                <p className="mt-2 text-sm">123 Main Street, City, Country</p>
                <RatingStar/>
            </div>
            
      
        </div>
        
    )
}

//<div className="inline-flex justify-end"><ImageSlider/></div>