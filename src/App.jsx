import { useSelector } from "react-redux";

  function Product() {
  const products = useSelector((state) => state.counter.value)

  return (
    <div>
      <div className="flex">
        abc
        {products.map(product => (
          <div className="productdiv" key={product.id}>
            <div className='product-item'>
                <img onClick={() => UserPageOpen(product)} src={product.url} className='image' alt={product.name} />
              <p className="name">{product.name} | {product.category}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Product;
















// import React from 'react'
// import { useDispatch, useSelector } from 'react-redux'
// import { decrement, increment } from './redux/counter/counterSlice'

// const App = () => {

//   const count = useSelector((state) => state.counter.value)
//   const dispatch = useDispatch()

//   return (
//     <div className='flex gap-20'>
//       <button onClick={() => dispatch(decrement())}>Decrement</button>
//       Currenty count is {count}
//       <button onClick={() => dispatch(increment())}>Increment</button>
//     </div>
//   )
// }

// export default App
