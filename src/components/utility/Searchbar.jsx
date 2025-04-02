import React, { useState } from 'react';

function SearchBar() {
  
  const [query, setQuery] = useState('');
  const [filteredItems, setFilteredItems] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);

  // Example list of items (could be objects if needed)
  const items = [
    'Apple',
    'Banana',
    'Orange',
    'Mango',
    'Pineapple',
    'Strawberry',
    'Blueberry',
    'Watermelon',
  ];

  
  const handleSearch = (event) => {
    const query = event.target.value;
    setQuery(query);


    if (query.length > 0) {
      const matches = items
        .filter(item => item.toLowerCase().includes(query.toLowerCase()))
        .slice(0, 3); // Limit to top 3 matches
      setFilteredItems(matches);
    } else {
      setFilteredItems([]);
    }
  };

  const handleSelectItem = (item) => {
    setSelectedItem(item);
    setQuery(item); // Set the query to the selected item (optional)
    setFilteredItems([]); // Hide the dropdown after selection
  };

  return (
      <div>
        <div className="grid-container">
          <div className="grid-item">
            <div className="header">
                <b>Search component </b>
                <br/><br/>
            </div>
            <input
              type="text"
              placeholder="Search..."
              value={query}
              onChange={handleSearch}
            />
            {filteredItems.length > 0 && (
              <ul >
                {filteredItems.map((item, index) => (
                  <li
                    key={index}
                    onClick={() => handleSelectItem(item)}
                    style={{ padding: '5px', cursor: 'pointer' }}
                  >
                    {item}
                  </li>
                ))}
              </ul>
            )}
              {/* Step 6: Display the selected item */}
              {selectedItem && <div><strong>Selected: </strong>{selectedItem}</div>}
          </div>
        </div>
      </div>
  );
}

export default SearchBar;