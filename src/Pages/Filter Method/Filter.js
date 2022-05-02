import React, {useState} from 'react'

const Filter = () => {

    const list = [
        "Banana",
        "Apple",
        "Orange",
        "Mango",
        "Pineapple",
        "Watermelon"
      ];
    
      const [filterList, setFilterList] = useState(list);
    
      const handleSearch = (event) => {
    
        if (event.target.value === "") {
          setFilterList(list);
          return;
        }
        const filteredValues = list.filter(
          (item) =>
            item.toLowerCase().indexOf(event.target.value.toLowerCase()) !== -1
        );
        setFilterList(filteredValues);
      };
  return (
    <div className=' container bg-info w-50 ml-0 mt-4 mx-auto text-center '>
     <h1> Filter Method </h1>
   

      <div className="active-purple-3 active-purple-4 mb-4">
        Search: <input name="query" className='class="form-control' type="text" placeholder="Search" aria-label="Search" onChange={handleSearch} />
      </div>
      {filterList &&
        filterList.map((item) => (
          <div>{item}</div> //Display each item
        ))}
    </div>
  )
}

export default Filter

