import Random from "./components/Random";
import Tag from "./components/Tag";

export default function App() {
  return (
    <div className="background w-full min-h-screen p-10">
      <h1 className="bg-white rounded-2xl text-center p-4 text-3xl font-bold border-2 border-gray-400">RANDOM GIFS</h1>

      <div className="flex flex-col items-center gap-y-10 mt-10">
        <Tag />
        <Random />
      </div>
    </div>
  );
}
