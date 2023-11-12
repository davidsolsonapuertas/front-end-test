import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../app/store";
import { WEBSOCKET_CONNECT, WEBSOCKET_DISCONNECT } from "../app/types";

const getNumberColour = (
  number: number | undefined,
  prevNumber: number | undefined
) => {
  if (number && prevNumber && number > prevNumber) {
    return "text-green-500";
  } else if (number && prevNumber && number < prevNumber) {
    return "text-red-500";
  }
  return "text-black";
};

const Home = () => {
  const dispatch = useDispatch();
  const { number, prevNumber, loading, error } = useSelector(
    (state: RootState) => state.app
  );

  useEffect(() => {
    dispatch({ type: WEBSOCKET_CONNECT });

    return () => {
      dispatch({ type: WEBSOCKET_DISCONNECT });
    };
  }, [dispatch]);

  return (
    <div className="flex justify-center items-center flex-col bg-black min-h-screen">
      <h1 className="text-white pb-10 text-xl font-semibold">QUADRA TEST</h1>
      <div className="flex bg-zinc-200 p-4 rounded-md w-40 justify-center text-center hover:scale-150 transition-all">
        <p
          className={`${getNumberColour(
            number,
            prevNumber
          )} text-xl font-semibold`}
        >
          {loading
            ? "Loading..."
            : error
            ? "Sorry, there was an error"
            : number}
        </p>
      </div>
    </div>
  );
};

export default Home;
