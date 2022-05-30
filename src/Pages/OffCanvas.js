import './OffCanvas.css'
import React,{useState} from 'react'
const OffCanvas=(props)=>{
  
        const [Title,SetTitle]=useState('')
        const [Description,SetDescription]=useState()
        const [Image,SetImage]=useState()
       
    
    
        const TitleHandler=(event)=>{
            SetTitle(event.target.value)
    
        }
        const DescriptionHandler=(event)=>{
            SetDescription(event.target.value)
    
        }
        const ImageHandler= (event)=>{
          
    
            SetImage(event.target.value)
        }
        const SubmitHandler= (event)=>{
            event.preventDefault()
    
            const FormInformation={

                CardTitle:Title,
                CardDescription:Description,
                CardImage:Image,
            }
            console.log(FormInformation)
            props.Dat(FormInformation)
        }

        
    return(
    <div>
       {/* <!-- Offcanvas Sidebar --> */} 


       
       <button class="btn btn-danger btn-lg " id='offcent'  type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasBottom" aria-controls="offcanvasBottom">Sell Your Car</button>

        <div class="offcanvas offcanvas-bottom  h-auto" tabindex="-1" id="offcanvasBottom"          aria-labelledby="offcanvasBottomLabel">
          <div class="offcanvas-header">
            <h5 class="offcanvas-title" id="offcanvasBottomLabel">Sell Your Car</h5>
            <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
          </div>
          <div class="offcanvas-body small" id='bodino'>
          <div>
            <form onSubmit={SubmitHandler}>
                 <div class="mb-3">
                 <label for="exampleFormControlInput1" class="form-label"><h3>Title</h3></label>
                 <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Write Your Car Name" onChange={TitleHandler} value={Title}/>
                 </div>

                 <div class="mb-3">
                 <label for="exampleFormControlTextarea1" class="form-label"><h2>Description</h2></label>
                 <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Write details of your car" onChange={DescriptionHandler} value={Description}></textarea>
                 </div>

                <div>
                  <label for="formFileLg" class="form-label"><h3>Image</h3></label>
                  <input class="form-control form-control-lg" id="formFileLg" type="file" onChange={ImageHandler} value={Image}/>
                </div>
                <button class="btn btn-danger btn-lg" type="submit" id="buttono">Sell Your Car</button>
            </form>
        </div>
          </div>
        </div>
 </div>
)}
export default OffCanvas