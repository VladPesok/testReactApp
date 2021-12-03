export const getDummyCategories = (length = 5) => {
    let result = [];
    for(i = 0; i < length; i+=1){
        result.push({
            id: i+1,
            name: `Category ${i+1}`,
            description: `Some category №${i+1} description`,
        })
    }
    return result;
}

export const getDummyMeals = (category, categoryId, length = 5, beginIndex) => {
    let result = [];
    for(i = 0; i < length; i+=1){
        result.push({
            id: beginIndex+i+1,
            categoryId,
            imgUrl: "https://media.istockphoto.com/photos/thanksgiving-table-with-turkey-and-sides-picture-id1036967058?k=20&m=1036967058&s=612x612&w=0&h=_Y6H0hLoQ4DrlIsNReNJYtxlimvQY9c_icWW3EiI-ds=",
            name: `Meal ${i+1} for ${category}`,
            description: `Some meal №${i+1} description`,
            text: `Some meal №${i+1} loong list of ingredients!`
        })
    }
    return result;
}