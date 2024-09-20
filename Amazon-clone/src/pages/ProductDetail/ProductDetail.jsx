import React ,{useEffect,useState}from 'react'
import Layout from '../../component/Layout/Layout'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import productUrl from '../../Api/productUrl'
import ProductCard from '../../component/product/ProductCard'
import Loader from '../../component/loader/Loader'
function ProductDetail() {
  const {productId}=useParams()
  const [IsLoading,setIsLoading] = useState(false)
  const [product,setproduct]=useState({})
  useEffect(()=>{
    setIsLoading(true)
    axios.get(`${productUrl}/products/${productId}`)
    .then((res)=>{
setproduct(res.data);
setIsLoading(false)
    })
    .catch((error)=>{
      setIsLoading(false)
console.log(`error:${error}`)
    }) 
  },[])
  return (
    <Layout>
      {IsLoading ? <Loader /> : <ProductCard product={product}
      flex = {true} 
      renderDesc={true}
      renderAdd={true}/>}
    </Layout>
  );
}

export default ProductDetail
