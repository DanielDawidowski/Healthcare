import React, { useState } from "react";
import { motion } from "framer-motion";

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
                <motion.input
                    initial={{ width: 0 }}
                    animate={{ width: "100%", transition: { duration: 0.5 } }}
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
