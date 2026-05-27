import React from 'react'

const ProductCard = ({name, price, isSoldOut}) => {
  return (
    <div>
        <h3>{name} <span>{price}원</span></h3>

        {isSoldOut ? (<p>품절</p>) : (<button>구매하기</button>)}
    </div>
  )
}

export default ProductCard