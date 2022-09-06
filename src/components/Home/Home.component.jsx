import React from 'react'
import CategoryCardComponent from './CategoryCard.component'
import './home.css';
 
export default function Home({categories}) {
  return (
    <div className='home'>
        <div className='home-img'>
          
          <img className="d-block w-100"
                src="https://blogs.vmware.com/sase/files/2018/03/Image_o-GROCERY-STORE-facebook.jpg"
                alt="First slide"/>
        </div>
        {/* <h1 class="first-txt">
            Welcome to eKirana
        </h1> */}
        <CategoryCardComponent categories={categories}></CategoryCardComponent>
    </div>
  )
}
