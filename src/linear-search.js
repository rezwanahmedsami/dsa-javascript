/**
 * 
 * @param {here you have to pass array of data} DataArray 
 * @param {You have to pass which data you want to search from data array you passed} searchElement 
 * @returns index number of element
 */
const linearSearch = (DataArray, searchElement) => {
    for (let i = 0; i < DataArray.length; i++) {
        if (searchElement == DataArray[i]) {
            return i;
        }
    }
    return -1;
}

const dataArray = ["Apple","Orange", "Mango", "Pineapple"];
const searchValue = "Pineapple";
const search = linearSearch(dataArray, searchValue);

if (search != -1) {
    console.log(`'${searchValue}' in index number:`, search);
}else{
    console.log(`'${searchValue}' not found, we got return ${search} linear search.`);
}