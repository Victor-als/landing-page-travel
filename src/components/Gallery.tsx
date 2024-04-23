import ScrollContainer from "react-indiana-drag-scroll";

export function Gallery () {
  return (
    <>
    <section className="pl-28 pt-12">
          <h1 className="text-3xl text-black font-bold pb-10">
            Top Vacation Destinations
          </h1>

      <ScrollContainer className="flex gap-6">
          <div className="relative min-w-[300px] min-h-300px">
            <img 
              className="rounded-lg h-48 w-80"
              src="https://source.unsplash.com/random/landscape/?landscape,adventure" 
              alt="" />
              <p 
               className="absolute font-bold text-xl mx-auto bottom-6 pl-5 text-white">
                lorem Ipsun
              </p>
          </div>

          <div className="relative min-w-[300px] min-h-300px">
            <img 
              className="rounded-lg h-48 w-80"
              src="https://source.unsplash.com/random/landscape/?landscape,brazil" 
              alt="" />
              <p 
               className="absolute font-bold text-xl mx-auto bottom-6 pl-5 text-white">
                lorem Ipsun
              </p>
          </div>

          <div className="relative min-w-[300px] min-h-300px">
            <img 
              className="rounded-lg h-48 w-80"
              src="https://source.unsplash.com/random/landscape/?landscape,italia" 
              alt="" />
              <p 
               className="absolute font-bold text-xl mx-auto bottom-6 pl-5 text-white">
                lorem Ipsun
              </p>
          </div>

          <div className="relative min-w-[300px] min-h-300px">
            <img 
              className="rounded-lg h-48 w-80"
              src="https://source.unsplash.com/random/landscape/?landscape,bali" 
              alt="" />
              <p 
               className="absolute font-bold text-xl mx-auto bottom-6 pl-5 text-white">
                lorem Ipsun
              </p>
          </div>

          <div className="relative min-w-[300px] min-h-300px">
            <img 
              className="rounded-lg h-48 w-80"
              src="https://source.unsplash.com/random/landscape/?landscape,france" 
              alt="" />
              <p 
               className="absolute font-bold text-xl mx-auto bottom-6 pl-5 text-white">
                lorem Ipsun
              </p>
          </div>

          <div className="relative min-w-[300px] min-h-300px">
            <img 
              className="rounded-lg h-48 w-80"
              src="https://source.unsplash.com/random/landscape/?landscape,swiss" 
              alt="" />
              <p 
               className="absolute font-bold text-xl mx-auto bottom-6 pl-5 text-white">
                lorem Ipsun
              </p>
          </div>

          <div className="relative min-w-[300px] min-h-300px">
            <img 
              className="rounded-lg h-48 w-80"
              src="https://source.unsplash.com/random/landscape/?landscape,australia" 
              alt="" />
              <p 
               className="absolute font-bold text-xl mx-auto bottom-6 pl-5 text-white">
                lorem Ipsun
              </p>
          </div>
       </ScrollContainer>
    </section>
    </>
  )
}