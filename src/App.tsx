import "./App.css";

function App() {
  return (
    <div className="bg-[#141414] min-h-screen min-w-screen flex justify-center items-center content-center" >
      <div className={"text-white bg-[#1F1F1F] lg:w-[30%] rounded-xl justify-center p-8 flex flex-col gap-4"} >
          <div className={"w-full flex flex-col gap-2 justify-center items-center"}>
              <img src="https://randomuser.me/api/portraits/men/71.jpg" className="w-1/3 rounded-full"/>
              <h1 className={"text-3xl"}>Nabin Katwal</h1>
              <p className={"font-bold text-[#BFDB6F]"} >Kathmandu, Nepal</p>
              <blockquote>"Frontend developer and avid reader."</blockquote>
          </div>
          <div className={"w-full flex flex-col gap-2"}>
              <a href="#" className="w-full bg-[#333333] p-2 rounded-xl text-center hover:bg-[#BFDB6F]">Github</a>
              <a href="#" className="w-full bg-[#333333] p-2 rounded-xl text-center hover:bg-[#BFDB6F]">Frontend Mentor</a>
              <a href="#" className="w-full bg-[#333333] p-2 rounded-xl text-center hover:bg-[#BFDB6F]">LinkedIn</a>
              <a href="#" className="w-full bg-[#333333] p-2 rounded-xl text-center hover:bg-[#BFDB6F]">Twitter</a>
              <a href="#" className="w-full bg-[#333333] p-2 rounded-xl text-center hover:bg-[#BFDB6F]">Instagram</a>
          </div>
      </div>
    </div>
  );
}

export default App;
