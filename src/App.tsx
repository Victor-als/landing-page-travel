import { Categories } from "./components/Categories";
import { Search } from "./components/Search";
import { Header } from "./components/Header";

export function App() {

  return (
    <>
      <div>
       <section className="bg-background bg-no-repeat bg-cover
        min-h-[840px] flex flex-col">
        
        
          <Header />
          <main className="min-w-[1100px] px-28 py-24">
            <h1 
               className="text-7xl text-white font-bold">
                The whole world <br />awaits.
            </h1>

            <div className="pt-24">
              <Search />
            </div>

            <div className="pt-12">
              <Categories />
            </div>
          </main>
       </section>
      </div>
    </>
  )
}

