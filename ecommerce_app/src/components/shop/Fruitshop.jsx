import React, { useState } from "react";
import Fruititems from "./Fruititems";
import Bannerf from "../../img/shopimage.jpg";
import { useGetCategoryQuery } from "../../redux/Api/admin/AdminCategory";
import { useGetProductQuery } from "../../redux/Api/admin/AdminProduct";

function Fruitshop() {
  const [search, setSearch] = useState("");
  const [selectCategory, setSelectCategory] = useState("");
  const [sortOption, setSortOption] = useState("");
  const { data: Category } = useGetCategoryQuery();
  const { data: Product } = useGetProductQuery();

  let filterData = Product?.data.filter((item) => {
    const matchesSearch =
      search === "" || item.title.toLowerCase().includes(search.toLowerCase());
    const matchesCategory =
      selectCategory === "" || item.category.title.includes(selectCategory);

    return matchesSearch && matchesCategory;
  });

  if (sortOption === "A-Z") {
    filterData = filterData.sort((a, b) => a?.title.localeCompare(b?.title));
  } else if (sortOption === "Z-A") {
    filterData = filterData.sort((a, b) => b?.title.localeCompare(a?.title));
  } else if (sortOption === "Low-to-High") {
    filterData = filterData?.sort(
      (a, b) => a?.priceafterdiscount - b?.priceafterdiscount
    );
  } else if (sortOption === "High-to-Low") {
    filterData = filterData?.sort(
      (a, b) => b?.priceafterdiscount - a?.priceafterdiscount
    );
  }

  // paginated
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;
  const totalPages = Math.ceil(filterData?.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const displayedProducts = filterData?.slice(startIndex, endIndex);

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const handlePrevious = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  return (
    <div className="container-fluid fruite ">
      <div className="container py-5">
        <div className="row g-4">
          <div className="col-lg-12">
            <div className="row g-4">
              <div className="d-md-none d-flex align-items-center gap-2">
                <div className="input-group   mx-auto d-flex">
                  <input
                    onChange={(e) => setSearch(e.target.value)}
                    type="search"
                    className="form-control px-3 py-2"
                    placeholder="Search here..."
                    aria-describedby="search-icon-1"
                    value={search}
                  />
                </div>
                <div className="col-xl-3 d-md-none">
                  <div className="border mt-4 ps-3 py-2 rounded d-flex justify-content-between align-items-center mb-4">
                    <label className="subtitlehero">Sort:</label>
                    <select
                      id="sort"
                      name="sortlist"
                      className="border-0 form-select-sm me-3 border-"
                      value={sortOption}
                      onChange={(e) => setSortOption(e.target.value)}
                    >
                      <option value="">Default</option>
                      <option value="A-Z">A-Z</option>
                      <option value="Z-A">Z-A</option>
                      <option value="Low-to-High">Low-to-High</option>
                      <option value="High-to-Low">High-to-Low</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="d-none d-md-inline col-xl-3">
                <div className="input-group  w-100 mx-auto d-flex">
                  <input
                    onChange={(e) => setSearch(e.target.value)}
                    type="search"
                    className="form-control px-3 py-2"
                    placeholder="Search here..."
                    aria-describedby="search-icon-1"
                    value={search}
                  />
                </div>
              </div>

              <div className="col-6"></div>

              <div className="col-xl-3 d-none d-md-inline">
                <div className="border  ps-3 py-1 rounded d-flex justify-content-between align-items-center mb-4">
                  <label className="subtitlehero">Sort By:</label>
                  <select
                    id="sort"
                    name="sortlist"
                    className="border-0 form-select-sm me-3 border-"
                    value={sortOption}
                    onChange={(e) => setSortOption(e.target.value)}
                  >
                    <option value="">Default</option>
                    <option value="A-Z">A-Z</option>
                    <option value="Z-A">Z-A</option>
                    <option value="Low-to-High">Low-to-High</option>
                    <option value="High-to-Low">High-to-Low</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="row g-4">
              <div className="col-lg-3">
                <div className="row g-4">
                  <div className="col-lg-12">
                    <div className="mb-3">
                      <h5 className="categorytitle">Category</h5>

                      <ul className="list-unstyled fruite-categorie">
                        {Category?.data.map((item, index) => (
                          <li
                            key={index}
                            onClick={() => {
                              setSearch("");
                              setSelectCategory(item.title);
                            }}
                          >
                            <div className="d-flex justify-content-between fruite-name">
                              <button
                                className={`bg-transparent border-0 ${
                                  selectCategory === item.title &&
                                  "text-secondary fw-bold fs-6 bg-secondary"
                                }`}
                              >
                                {item.title}
                              </button>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="col-lg-12">
                    <div className="position-relative">
                      <img
                        src={Bannerf}
                        className="d-none d-md-inline img-fluid w-100 bannerimage rounded"
                        alt=""
                      />
                      <div className="position-absolute freshfruitbanner">
                        <p className="text-black believeintechnology fw-bold">
                          {/* Believe <br /> In <br /> Technology */}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-9">
                <Fruititems
                  product={displayedProducts}
                  currentPage={currentPage}
                  totalPages={totalPages}
                  nextPage={handleNext}
                  prePage={handlePrevious}
                  setCurrentPage={setCurrentPage}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Fruitshop;
