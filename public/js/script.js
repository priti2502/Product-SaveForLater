let products = [];
let saveForLater = [];

// Fetch products 
const getProducts = () => {
    return fetch("http://localhost:3000/products")
        .then(result => {
            if(result.status==200)
                {
                    return Promise.resolve(result.json());
                }
                else 
                {
                    return Promise.reject("error");
                }
        })
        .then(response => {
            products = response;
            createProductList();
        })
        .catch(error => {
            alert(error);
        });
};

// Create product list and display it
const createProductList = () => {
    let productsList = "";
    products.forEach(product => {
        productsList += `
            <div class="card" style="width:400px">
                <img class="card-img-top" src="${product.images}" alt="Card image">
                <hr>
                <div class="card-body">
                     <p class="card-title">Title:-${product.title}</p>
                    <p class="card-text">Price:-${product.price}</p>
                    <p class="card-text">Discount:-${product.discountPercentage}%</p>
                    <p class="card-text">Rating:-${product.rating}</p>
                    <p class="card-text">Brand:-${product.brand}</p>
                    <p class="card-text">Stock:-${product.stock}</p>
                    <p class="card-text">Category:-${product.category}</p>
                    <p class="card-text">Description:-${product.description}</p>
                    <button type="button" onClick="addSaveToLater(${product.id})" class="btn btn-danger">Save For Later</button>
                </div>
            </div>
        `;
    });
    document.getElementById("ProductsList").innerHTML = productsList;
};

// Fetch save for later items 
const getSaveForLater = () => {
    return fetch("http://localhost:3000/saveforLater")
        .then(result => {
            if(result.status==200)
                {
                    return Promise.resolve(result.json());
                }
                else 
                {
                    return Promise.reject("error");
                }
        })
        .then(response => {
           
            saveForLater =  response ;
            createSaveForLaterList();
        })
        .catch(error => {
            alert(error);
        });
};

// Create save for later list and display it
const createSaveForLaterList = () => {
    let saveList = "";
    saveForLater.forEach(save => {
        saveList += `
            <div class="card" style="width:400px">
                <img class="card-img-top" src="${save.images}" alt="Card image">
                <hr>
                <div class="card-body">
                    <p class="card-title">Title:-${save.title}</p>
                    <p class="card-text">Price:-${save.price}</p>
                    <p class="card-text">Discount:-${save.discountPercentage}%</p>
                    <p class="card-text">Rating:-${save.rating}</p>
                    <p class="card-text">Brand:-${save.brand}</p>
                    <p class="card-text">Stock:-${save.stock}</p>
                    <p class="card-text">Category:-${save.category}</p>
                    <p class="card-text">Description:-${save.description}</p>
                    <button type="button" onClick="deleteFromSave(${save.id})" class="btn btn-danger">Delete from Save For Later</button>
                </div>
            </div>
        `;
    });
    document.getElementById("saveForLaterList").innerHTML = saveList;
};

// Add product to save for later
const addSaveToLater = (id) => {
    if (!isAlreadyInSaveSection(id)) {
        alert("product added successfully")
        let productObject = getProductById(id);
        saveForLater.push(productObject);
        return fetch("http://localhost:3000/saveforLater", {
            method: 'POST',
            body: JSON.stringify(productObject),
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        }).then(result => {
            if(result.status == 200 || result.status==201)
                {
                     return Promise.resolve(saveForLater);
    
                } else
                { 
                   return Promise.reject("product is already there in save section")
                }
        }).then(saveForLaterProduct => {
            createSaveForLaterList();
            return saveForLaterProduct;
        }).catch(error => {
            throw new Error(error);
        });
    } else {
        alert("Product already in save for later section");
    }
};

// Check if product is already in save for later
const isAlreadyInSaveSection = (id) => {
    for(let save in saveForLater)
        {
            if(id==saveForLater[save].id)
            {
                // alert("true");
                return true;
            }
        // alert("false");
       }
        return false;

}

// Get product by ID
const getProductById = (id) => {
    for(let product in products)
        { 
          if(id==products[product].id)
          {
             
              return products[product];
          }
        }
}
//delete product from save
const deleteFromSave=(id)=>{
    return fetch("http://localhost:3000/saveforLater/"+id,
        {
            method:'delete'
        }
    ).then((result)=>{
        if(result.status==200)
            {
                return Promise.resolve(result.json());
            }
            else 
            {
                return Promise.reject("error");
            }
    }).then(response=>{
        alert("product deleted");
        saveForLater=response;
        createProductList();
    }).catch(error=>{
        alert("error");
    })
}


