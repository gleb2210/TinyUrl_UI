import { useSelector } from "react-redux";
import UrlComponent from "./UrlComponent";

const CacheComponent = () => {
  const { isLoading, isError, cacheItems } = useSelector(
    (state) => state.cache
  );

  if (isLoading) {
    return <h2>Loading...</h2>;
  }
  if (isError) {
    return <h2>There was an error...</h2>;
  }

  return cacheItems.length != 0 ? (
    <section>
      <div className="card border-secondary">
        <div className="card-header text-secondary fw-bold">Cached Urls</div>

        <div className="card-body">
          <div className="row">
            <div className="col-md-2 fw-bold">Long URL</div>
            <div className="col-md-2 fw-bold text-center">Short URL</div>
            <div className="col-md-2 fw-bold text-center">Token</div>
            <div className="col-md-2 fw-bold text-center">Clicked</div>
          </div>

          {cacheItems.map((item) => {
            return <UrlComponent key={item.id} {...item} />;
          })}
        </div>
      </div>
    </section>
  ) : (
    <section></section>
  );
};

export default CacheComponent;
