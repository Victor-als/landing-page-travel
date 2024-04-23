export function OfferCards () {
  return (
    <section className="pl-28 pt-20">

    <h2 className="font-bold text-3xl pb-10">Offers</h2>

  <div className="flex gap-10">
        <div className=" flex gap-4 rounded-[1rem] h-[14rem] w-[42rem] shadow-2xl p-4">
          <img 
            className="rounded-lg h-42 w-75"
            src="https://source.unsplash.com/random/landscape/?landscape" 
            alt="" />

          <div>
            <p 
              className="text-gray-400 text-sm mb-1">
                Dosmestic Flights
            </p>

            <p 
              className="font-bold text-2xl">
                Huge savings on flight with trxvl
            </p>


            <p className="text-gray-400 text-md mt-3">
              Book domestic flights starting @ just $1459
            </p>

            <button className="bg-blue-600 w-[8rem] text-white p-2 rounded-[2rem] mt-6">
              Book Now
            </button>

          </div>
          
        </div>

        <div className=" flex gap-4 rounded-[1rem] h-[14rem] w-[42rem] shadow-2xl p-4">
          <img 
            className="rounded-lg h-42 w-75"
            src="https://source.unsplash.com/random/landscape/?landscape" 
            alt="" />

          <div>
            <p 
              className="text-gray-400 text-sm mb-1">
                Dosmestic Flights
            </p>

            <p 
              className="font-bold text-2xl">
                Huge savings on flight with trxvl
            </p>


            <p className="text-gray-400 text-md mt-3">
              Book domestic flights starting @ just $1459
            </p>

            <button className="bg-blue-600 w-[8rem] text-white p-2 rounded-[2rem] mt-6">
              Book Now
            </button>

          </div>
        </div>
  </div>

</section> 
  )
}