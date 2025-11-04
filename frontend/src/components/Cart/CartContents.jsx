import { RiDeleteBin3Line } from "react-icons/ri";

const CartContents = () => {

    // Sample data 
    const cartProducts = [
        {
            productId : 1,
            name : "T-shirt",
            size : "M",
            color : "Red",
            quantitiy : 1,
            price : 15,
            image : "https://picsum.photos/200?random=1",
        },
        {
            productId : 2,
            name : "Jeans",
            size : "L",
            color : "Blue",
            quantitiy : 1,
            price : 25,
            image : "https://picsum.photos/200?random=1",
        },
    ];


  return (
    <div>
        {
            cartProducts.map((product, index) => (

                <div key={index} className="flex items-start justify-between py-4 border-b">

                    <div className="flex items-center">

                        {/* product image  */}
                        <img src={product.image} alt={product.name} className="w-20 h-24 object-cover mr-4 rounded"/>

                        <div>
                            {/* Cart product  */}
                            <h3>{product.name}</h3>

                            {/* Product description  */}
                            <p className="text-sm text-gray-500">
                                Size : {product.size} | Color : {product.color}
                            </p>

                            {/* Quantity button  */}
                            <div className="flex items-center mt-2">
                                <button className="border rounded px-2 py-1 text-xl font-medium">-</button>
                                <span className="mx-4 ">{product.quantitiy}</span>
                                <button className="border rounded px-2 py-1 text-xl font-medium">+</button>
                            </div>
                        </div>

                    </div>

                    <div>

                        {/* product price  */}
                        <p>$ {product.price.toLocaleString()}</p>

                        {/* delete button  */}
                        <button>
                            <RiDeleteBin3Line className="h-6 w-6 mt-2 text-red-600"/>
                        </button>

                    </div>

                </div>
            ))
        }
    </div>
  )
}

export default CartContents