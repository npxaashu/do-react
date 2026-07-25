import { Search, X } from "lucide-react";

const SearchFilter = ({
  search,
  setSearch,
  category,
  setCategory,
  sort,
  setSort,
  categories,
}) => {
  const showClear = search || category !== "all" || sort !== "featured";

  const clearFilters = () => {
    setSearch("");
    setCategory("all");
    setSort("featured");
  };

  return (
    <section className="mb-8 rounded-2xl border border-zinc-800 bg-zinc-900 p-5">
      {/* Search + Clear */}
      <div className="flex flex-col gap-4 lg:flex-row">
        {/* Search */}
        <div className="relative flex-1">
          <Search
            size={18}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500"
          />

          <input
            type="text"
            placeholder="Search products..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full rounded-xl border border-zinc-700 bg-zinc-950 py-3 pl-11 pr-4 text-white outline-none transition focus:border-emerald-500"
          />
        </div>

        {showClear && (
          <button
            onClick={clearFilters}
            className="rounded-xl border border-red-500/30 bg-red-500/10 px-5 py-3 font-medium text-red-400 transition hover:bg-red-500 hover:text-white"
          >
            Clear Filters
          </button>
        )}
      </div>

      {/* Dropdowns */}
      <div className="mt-5 grid gap-4 md:grid-cols-2">
        {/* Category */}

        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="rounded-xl border border-zinc-700 bg-zinc-950 px-4 py-3 text-white outline-none focus:border-emerald-500"
        >
          <option value="all">All Categories</option>

          {categories.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>

        {/* Sort */}

        <select
          value={sort}
          onChange={(e) => setSort(e.target.value)}
          className="rounded-xl border border-zinc-700 bg-zinc-950 px-4 py-3 text-white outline-none focus:border-emerald-500"
        >
          <option value="featured">Featured</option>
          <option value="low-high">Price: Low → High</option>
          <option value="high-low">Price: High → Low</option>
          <option value="top-rated">Top Rated</option>
          <option value="lowest-rated">Lowest Rated</option>
        </select>
      </div>

      {/* Applied Filters */}

      {showClear && (
        <div className="mt-5 flex flex-wrap gap-3">
          {search && (
            <FilterChip label={search} onRemove={() => setSearch("")} />
          )}

          {category !== "all" && (
            <FilterChip label={category} onRemove={() => setCategory("all")} />
          )}

          {sort !== "featured" && (
            <FilterChip label={sort} onRemove={() => setSort("featured")} />
          )}
        </div>
      )}
    </section>
  );
};

function FilterChip({ label, onRemove }) {
  return (
    <div className="flex items-center gap-2 rounded-full bg-emerald-500/15 px-4 py-2 text-sm text-emerald-400">
      <span>{label}</span>

      <button onClick={onRemove}>
        <X size={15} />
      </button>
    </div>
  );
}

export default SearchFilter;
