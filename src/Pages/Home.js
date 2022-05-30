import './Home.css'
// import nnn from './Images/nnn.svg'
import { Link } from "react-router-dom"

import CCard from '../Components/Card'
// import a from '../Images/a.jpg'
// import b from '../Images/b.jpg'
import SellYourCar from './SellYourCar'
import OffCanvas from './OffCanvas'
import React,{useState} from 'react'



let   CardInformation=[
  {
    CardId:'e1',
    CardTitle:"Honda",
    CardDescription:"In best Condition",
    CardImage:'./Images/d.jpg'
  },
  {
    CardId:'e1',
    CardTitle:"Honda",
    CardDescription:"In best Condition",
    CardImage:'./Images/b.jpg'
  },
  {
    CardId:'e2',
    CardTitle:"Civic",
    CardDescription:"In best Condition",
    CardImage:'./Images/b.jpg'
  },
   
]



const Home=(props)=>{
  const [CardInfo,SetCardInfo]=useState(CardInformation)
  
  
  const Dataaa=(Hamza)=>{
    const UpdatedCard=[Hamza,...CardInformation]
    SetCardInfo(UpdatedCard)
    console.log(Hamza)

  }
  
  
  const ClickHandler=()=>{
    <Link  to='/SellYourCar'> Sell Your Car</Link>
  
}

    return(
     
    
      <div>
       
                                    {/* Buttons + Image */}
        
        <div class="containera">
           <img src='./Images/nnn.svg' class="img-fluid" alt="Responsive image"/>
           <div class="d-grid gap-2 d-md-flex justify-content-md-end">
                <button type="button" id='btn1' class="btn btn-danger btn-lg">Buy Now
                </button>
                <button type="button" id='btn2' class="btn btn-dark btn-lg">More Info
                </button>
           </div>
        </div>
        <div className='container-fluid bg-dark'>
          <div className='row'>
            <div className='col-12 align-self-center'>
            <div class="d-grid gap-2 ">
                                   {/* sell Your Car Button */}     
{/* 
            <Link to="/SellYourCar">
                <button class="btn btn-danger btn-lg" type="button" >Sell Your Car</button>
            </Link>   */}
                        <OffCanvas Dat={Dataaa}/>
                        const All=()



              </div>
              

            </div>
          </div>
          
        </div>
        <div>
          {
            CardInfo.map(
              loopino=>(
              <CCard Title={loopino.CardTitle}
         Description={loopino.CardDescription}
         Image={loopino.CardImage}
        />)

            )
          }
        {/* <CCard Title={CardInformation[0].CardTitle}
         Description={CardInformation[0].CardDescription}
         Image={CardInformation[0].CardImage}
        />
        <CCard Title={CardInformation[1].CardTitle}
         Description={CardInformation[1].CardDescription}
         Image={CardInformation[1].CardImage}
        />
        <CCard Title={CardInformation[2].CardTitle}
         Description={CardInformation[2].CardDescription}
         Image={CardInformation[2].CardImage}
        />
        <CCard Title={CardInformation[3].CardTitle}
         Description={CardInformation[3].CardDescription}
         Image={CardInformation[3].CardImage}
        /> */}
        </div>



        



       
     </div>
     
     
   
   
    )
}
export default Home