exports.Query={
        products:(parent,{filter},{db})=>{
                let filteredProducts =db.products
                 if(filter){
                         const {onSale,avgRating} = filter
                         if(onSale){
                                 filteredProducts = filteredProducts.filter((product)=>{
                                         return product.onSale
                                 })
                         }
                 if([1,2,3,4,5].includes(avgRating)){
                        filteredProducts = filteredProducts.filter((product)=>{
                                let sumRating = 0;
                                let numberOfReviews = 0;
                                db.reviews.forEach(review =>{
                                        if (review.productId === product.id) {
                                                sumRating +=review.rating;
                                                numberOfReviews++;
                                               }
                                })
                                const avgProductRating = sumRating/numberOfReviews
                              return avgProductRating >= avgRating
                        })
                }
        }
                         
               
                return filteredProducts
        },
        product:(parent,{id},{db})=>{
                return db.products.find((product)=>product.id === id)
        },
        category:(parent,{id},{db})=>{
                return db.categories.find((category)=>category.id === id)
        },
        categories:(parent,args,{db})=>{
                return db.categories
        }
}