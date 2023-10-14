import { getOffest } from "../utils/getOffset";

export const Pagination = ({ next, prev, setOffset }) => {
  return (
    <div className="pagination">
      <div className="pagination_list">
        <button
          type="button"
          disabled={prev == null}
          onClick={() => setOffset(getOffest(prev))}>
          Prev
        </button>
        <button
          type="button"
          disabled={next == null}
          onClick={() => setOffset(getOffest(next))}>
          Next
        </button>
      </div>
    </div>
  );
};
