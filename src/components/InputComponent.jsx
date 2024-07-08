import { useState } from "react";
import { useDispatch } from "react-redux";
import { addCacheItem } from "../reduxNew/cacheSlice";

const InputComponent = () => {
  const [text, setText] = useState("");
  const dispatch = useDispatch();

  const handleCreate = async () => {
    dispatch(addCacheItem(text));
  };

  return (
    <section>
      <div className="card">
        <div className="card border-secondary">
          <form className="form">
            <div className="form-row">
              <div className="col-lg-12">
                <label htmlFor="name" className="form-label">
                  Enter long URL
                </label>
                <input
                  id="name"
                  type="input"
                  className="form-input"
                  value={text}
                  onChange={(e) => setText(e.target.value)}
                />
              </div>
            </div>
          </form>
          <button
            onClick={() => handleCreate(text)}
            className="btn btn-success"
          >
            Create Tiny URL
          </button>
        </div>
      </div>
    </section>
  );
};

export default InputComponent;
