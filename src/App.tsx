import { Search } from "./components/Search";


export function App() {

  return (
    <>
      <div>
       <section className="h-screen bg-background bg-no-repeat bg-cover 
        min-h-[800px] flex flex-col">
        <header className="flex justify-between px-12 py-8">
          <div className="">
              <img src="./src/assets/logo.svg" alt=""/>
          </div>
          <nav className="flex gap-6 text-zinc-500 ">
            <ul>
              <a href="">
                <li>Home</li>
              </a>
            </ul>
            <ul>

              <a href="">
                <li>Stays</li>
              </a>
            </ul>

            <ul>
              <a href="">
                <li>Flights</li>
              </a>
            </ul>

            <ul>
              <a href="">
                <li>Packages</li>
              </a>
            </ul>

            <ul>
              <a href="">
                <li>Sign Up</li>
              </a>
            </ul>
          </nav>
        </header>

          <main className="min-w-[1100px] px-28 py-24">
            <h1 
               className="text-7xl text-white font-bold">
                The whole world <br />awaits.
            </h1>

            <div className="pt-24">
              <Search />
            </div>
          </main>

       </section>
      </div>
    </>
  )
}

