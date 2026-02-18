import Hero from "../components/Layout/Hero"
import FeaturedCollection from "../components/Products/FeaturedCollection"
import FeaturedSection from "../components/Products/FeaturedSection"
import GenderCollectionSection from "../components/Products/GenderCollectionSection"
import NewArrivals from "../components/Products/NewArrivals"
import ProductDetails from "../components/Products/ProductDetails"
import ProductGrid from "../components/Products/ProductGrid"

// placeholderProducts for top wear for women
const placeholderProducts = [
    {
        _id: 1,
        name: "Product 1",
        price: 100,
        images: [{url: "https://picsum.photos/500/500?random=6"}],
    },

    {
        _id: 2,
        name: "Product 2",
        price: 100,
        images: [{url: "https://picsum.photos/500/500?random=9"}],
    },

    {
        _id: 3,
        name: "Product 3",
        price: 100,
        images: [{url: "https://picsum.photos/500/500?random=1"}],
    },

    {
        _id: 4,
        name: "Product 4",
        price: 100,
        images: [{url: "https://picsum.photos/500/500?random=7"}],
    },

    {
        _id: 5,
        name: "Product 5",
        price: 100,
        images: [{url: "https://picsum.photos/500/500?random=55"}],
    },

    {
        _id: 6,
        name: "Product 6",
        price: 100,
        images: [{url: "https://picsum.photos/500/500?random=65"}],
    },

    {
        _id: 7,
        name: "Product 7",
        price: 100,
        images: [{url: "https://picsum.photos/500/500?random=98"}],
    },

    {
        _id: 8,
        name: "Product 8",
        price: 100,
        images: [{url: "https://picsum.photos/500/500?random=12"}],
    },
]

const Home = () => {
  return (
    <div className="px-4 sm:px-8 lg:px-16">
        <Hero />

        <GenderCollectionSection />

        <NewArrivals />

        {/* Best Seller  */}
        <h2 className="text-3xl text-center font-bold mb-4">Best Seller</h2>
        <ProductDetails />

        {/* Top Wear for Women */}
        <div className="container mx-auto">
          <h2 className="text-3xl text-center font-bold mb-4">
            Top Wear for Women
          </h2>
          <ProductGrid products={placeholderProducts} />
        </div>

        <FeaturedCollection />
        
        <FeaturedSection />

    </div>
  )
}

export default Home