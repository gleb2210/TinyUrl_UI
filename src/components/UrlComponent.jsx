import { useDispatch } from "react-redux";
import { deleteCacheItem } from "../reduxNew/cacheSlice";

const UrlComponent = ({ url, shortUrl, token, clicked }) => {
  const dispatch = useDispatch();

  const handleDelete = (shortUrl) => {
    dispatch(deleteCacheItem(shortUrl));
  };

  return (
    <section>
      <div className="row mb-2">
        <div className="col-md-2 text-truncate">{url}</div>
        <div className="col-md-2 text-truncate">
          <a href={shortUrl} target="_blank">
            {shortUrl}
          </a>
        </div>
        <div className="col-md-2 text-truncate">{token}</div>
        <div className="col-md-2 text-center">{clicked}</div>
        <div className="col-md-2">
          <button
            className="btn btn-warning"
            onClick={() => handleDelete(shortUrl)}
          >
            Delete
          </button>
        </div>
      </div>
    </section>
  );
};

export default UrlComponent;
