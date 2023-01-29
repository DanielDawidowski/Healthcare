import React, { useState } from "react";

function SearchBar({ placeholder, data, setShowInput, showInput }) {
    const [filteredData, setFilteredData] = useState([]);
    const [wordEntered, setWordEntered] = useState("");

    const handleFilter = (event) => {
        const searchWord = event.target.value;
        setWordEntered(searchWord);
        const newFilter = data.filter((value) => {
            return value.title.toLowerCase().includes(searchWord.toLowerCase());
        });

        if (searchWord === "") {
            setFilteredData([]);
        } else {
            setFilteredData(newFilter);
        }
    };

    return (
        <div className="search">
            <div className="searchInputs">
                <input
                    type="text"
                    placeholder={placeholder}
                    value={wordEntered}
                    onChange={handleFilter}
                />
            </div>
            {filteredData.length !== 0 && (
                <div className="dataResult">
                    {filteredData.slice(0, 15).map((value, i) => {
                        return (
                            <a
                                className="dataItem"
                                href={value.link}
                                key={i}
                                // target="_blank"
                            >
                                <>
                                    <h5>{value.title}</h5>
                                </>
                            </a>
                        );
                    })}
                </div>
            )}
        </div>
    );
}

export default SearchBar;
