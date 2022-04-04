exports.Category={
    products:({id},args,{db})=>{
       return db.products.filter((product)=>product.categoryId === id)
    }
}