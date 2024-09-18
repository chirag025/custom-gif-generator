import Spinner from "./Spinner";
import useGif from "../hooks/useGif";
import { saveAs } from "file-saver";
import { MdDownload } from "react-icons/md";

const Random = () => {
  const { gif, loading, fetchData } = useGif();

  // const downloadGif = async () => {
  //   try {
  //     // Fetch the image as a blob
  //     const response = await fetch(gif);
  //     const blob = await response.blob();

  //     // Create a URL for the blob
  //     const blobUrl = window.URL.createObjectURL(blob);

  //     // Create a link element and trigger the download
  //     const a = document.createElement('a');
  //     a.href = blobUrl;
  //     a.download = 'random-gif.gif'; // Set the downloaded file name
  //     document.body.appendChild(a);
  //     a.click();

  //     // Clean up the URL and remove the link element
  //     document.body.removeChild(a);
  //     window.URL.revokeObjectURL(blobUrl);
  //   } catch (error) {
  //     console.error("Failed to download GIF:", error);
  //   }
  // };

  const downloadGif = () => {
    saveAs(gif, "random.gif");
  };

  return (
    <div className="bg-green-500 w-1/2 rounded-2xl flex flex-col items-center border-2 border-[#7D7D8F] gap-y-4 py-4">
      <h1 className="uppercase font-bold text-2xl underline">A Random Gif</h1>

      {loading ? (
        <Spinner />
      ) : (
        <img
          src={gif}
          width="450"
          height="300"
          alt="Random GIF"
        />
      )}

      <div className="flex w-9/12 justify-between items-center gap-x-4">
        <button
          onClick={() => fetchData()}
          className="uppercase bg-yellow-300 py-2 rounded-lg w-10/12 font-semibold">
          Generate
        </button>

        <div className="relative group w-2/12">
          <button
            onClick={downloadGif}
            className="uppercase bg-blue-500 py-3 rounded-lg w-full font-semibold grid place-content-center">
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

export default Random;
