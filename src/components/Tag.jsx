import { useState } from "react";
import useGif from "../hooks/useGif";
import Spinner from "./Spinner";
import { saveAs } from "file-saver";
import { MdDownload } from "react-icons/md";

const Tag = () => {
  //   const [gif, setGif] = useState("");
  //   const [loading, setLoading] = useState(false);

  const [tag, setTag] = useState("Alladin");

  //   async function fetchData() {
  //     setLoading(true);
  //     const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`;
  //     const { data } = await axios.get(url);
  //     const imgSource = data.data.images.downsized_large.url;

  //     setGif(imgSource);
  //     setLoading(false);
  //   }

  //   useEffect(() => {
  //     fetchData();
  //   }, []);

  const { gif, loading, fetchData } = useGif(tag);

  const downloadGif = () => {
    saveAs(gif, `${tag}.gif`);
  };

  return (
    <div className="bg-blue-400 w-1/2 rounded-2xl flex flex-col items-center border-2 border-[#7D7D8F] gap-y-4 py-4">
      <h1 className="uppercase font-bold text-2xl underline">
        Custom {tag} Gif
      </h1>

      {loading ? (
        <Spinner />
      ) : (
        <img
          src={gif}
          width="450"
          height="300"
        />
      )}

      <input
        type="text"
        className="py-2 rounded-lg w-9/12 text-center mt-2 text-lg"
        onChange={(event) => setTag(event.target.value)}
        placeholder="Search for a gif..."
        value={tag}
      />

      <div className="flex w-9/12 justify-between items-center gap-x-4">
        <button
          onClick={() => fetchData(tag)}
          className="uppercase bg-yellow-300 py-2 rounded-lg w-10/12 font-semibold">
          Generate
        </button>

        <div className="relative group w-2/12">
          <button
            onClick={downloadGif}
            className="uppercase bg-green-600 py-3 rounded-lg w-full font-semibold grid place-content-center">
            <MdDownload />
          </button>

          <div className="absolute bottom-full mb-2 w-max bg-gray-800 text-white text-xs rounded py-1 px-2 opacity-0 group-hover:opacity-100 transition-opacity">
            Download GIF
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tag;
