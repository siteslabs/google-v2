import Pagination from "./Pagination"

const SearchResults = ({ data }) => {
  return (
    <div className="mx-auto w-full px-3 sm:pl-[5%] md:pl-[14%] lg:pl-52">
      <p className="text-gray-600 text-md mt-3 mb-5">
        About {data.searchInformation?.formattedTotalResults} results (
        {data.searchInformation?.searchTime} seconds)
      </p>

      {data.items ? (
        data?.items.map((item) => (
          <div key={item.link} className="max-w-xl mb-8">
            <div className="group">
              <a href={item.link} className="text-sm block">
                {item.formattedUrl}
              </a>
              <a
                className="truncate text-xl text-blue-800 block group-hover:underline font-medium "
                href={item.link}
              >
                {item.title}
              </a>
            </div>
            <p className="line-clamp-2">{item.snippet}</p>
          </div>
        ))
      ) : (
        <div>
          <p>Error: 429 </p>
          <p>
            Quota exceeded for quota metric 'Queries' and limit 'Queries per
            day'
          </p>
        </div>
      )}

      <Pagination />
    </div>
  )
}

export default SearchResults
