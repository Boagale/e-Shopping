import Header from "@/components/header";

export default function Home() {
  return (
    <div className="bg-[url('./../public/assets/e-comersbg-image.png')] bg-cover bg-center h-screen flex items-center justify-center">
      <Header displayAuthNav={true} />
      <main>
        <div className="hero min-h-screen">
          <div className="hero-content text-center">
            <div className="max-w-md">
              <h1 className="text-4xl font-bold text-purple-800 opacity-80">To Bogi e-Shoping</h1>
              <p className="py-6 text-md text-slate-500 leading-6 text-justify">
                Welcome to Bogi e-Shoping, your one-stop solution for seamless online shopping! Designed with speed, convenience, and user experience in mind, our web application offers everything you need to explore, compare, and purchase products effortlessly.
              </p>
              <button className="btn btn-primary">Get Started</button>
            </div>
          </div>
        </div> 
      </main>
      <footer className="footer absolute bottom-0 left-0 w-full footer-center bg-base-300 text-base-content p-4">
      <aside>
        <p className="text-md text-slate-500 leading-6 text-justify">Copyright © {new Date().getFullYear()} - All right reserved by bogi e-Shopping</p>
      </aside>
    </footer>
    </div>
  );
}
