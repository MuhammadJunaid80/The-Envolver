// import a from '../Images/a.jpg'
// import b from '../Images/b.jpg'
import Card from 'react-bootstrap/Card'
import CardGroup from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button';
import "./Card.css"


const CCard=(props)=>{

  const FormData=(hamz1)=>{
    console.log(hamz1)

  }
  

 

    return(
        <div >
           <CardGroup >
             <Card className='bg-dark text-white'>
               <Card.Img variant="top" src={props.Image} id='Card'/>
               <Card.Body>
                 <Card.Title>{props.Title}</Card.Title>
                 <Card.Text>
                   {props.Description}
                 </Card.Text>
               </Card.Body>
             </Card>
           </CardGroup>
          



                                        {/* CAAAAAAAAAARD */}
      {/* <div className="row row-cols-1 row-cols-md-2 g-4">
        <div className="col">
          <div className="card">
            {props.Image}
            <div className="card-body">
              <h5 className="card-title">{props.Card}</h5>
              <p className="card-text">{props.Description}</p>
            </div>
          </div>
        </div>
        </div>
         */}
        
      







      




      






             
    </div>)
}
export default CCard