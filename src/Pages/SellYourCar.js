import { FOCUSABLE_SELECTOR } from "@testing-library/user-event/dist/utils"
import React,{useState} from "react"
import'./SellYourCar.css'


const SellYourCar=(props)=>{
    // function previewFile() {
    //     var preview = document.querySelector('img');
    //     var file    = document.querySelector('input[type=file]').files[0];
    //     var reader  = new FileReader();
      
    //     reader.onloadend = function () {
    //       preview.src = reader.result;
    //     }
      
    //     if (file) {
    //       reader.readAsDataURL(file);
    //     } else {
    //       preview.src = "";
    //     }
    //   }
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
            FormTitle:Title,
            FormDescription:Description,
            FormImage:Image,
        }
        console.log(FormInformation)
        props.Dataa(FormInformation)
        
        
    }
    



    return(
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
                  {/* <label for="formFileLg" class="form-label"><h3>Image</h3></label>
                  <input class="form-control form-control-lg" id="formFileLg" type="image" onChange={ImageHandler} value={Image}/> */}
                  {/* <input type="file" onchange="previewFile()"/><br/>
                 <img src="" height="200" alt="Image preview..." value={Image}/> */}

                </div>
                <button class="btn btn-danger btn-lg" type="submit" id="buttono">Sell Your Car</button>
            </form>
        </div>
    )

}
export default SellYourCar
