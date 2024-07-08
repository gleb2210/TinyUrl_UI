import InputComponent from "./components/InputComponent";
import CacheComponent from "./components/CacheComponent";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getCacheItems } from "./reduxNew/cacheSlice";
import "./App.css";

function App() {
  //const { cacheItems, isLoading } = useSelector((state) => state.cache);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCacheItems("random"));
  }, []);

  return (
    <>
      <InputComponent />
      <CacheComponent />
    </>
  );
}

export default App;
