import React,{useState} from 'react'
import { CopyToClipboard } from 'react-copy-to-clipboard'

const Card = (props) => {

    const [value, setValue] = useState("");
    const [modal, setModal] = useState(false);

    const toggleModal = () => {
        setModal(!modal)
    }
    
  return (
    <>
        
       <div className="box btn_shadow">
           <div className="img">
               <img src={props.image} alt="" onClick={toggleModal}/>
           </div>
           <div className="category d_flex">
               <span onClick={toggleModal}>{props.category}</span>
               <label>
                   <i className='fas fa-arrows-up'> ₹ </i> 
                   {props.price}
               </label>
           </div>
           <div className="title">
               <h2 onClick={toggleModal}>{props.title} </h2>
               <a href="#popup" className='arrow' onClick={toggleModal}><i className="fas fa-arrow-right"></i></a> 
           </div>
           <br />
           <div className="desc" value={props.desc} onChange={e=> setValue(e.target.value)}>
           <CopyToClipboard className="tooltip" text={props.desc}>
                <h3>{props.desc} <span className='tooltiptext'>Click to Copy</span></h3>
            </CopyToClipboard>
               
           </div>
           <br />
           <div className="d-inline-block">
                <div className="title" value={props.variant1} onChange={e=> setValue(e.target.value)}>
                    <CopyToClipboard className="tooltip" text={props.variant1}>
                            <h4>{props.variant1} <span className='tooltiptext'>Click to Copy</span></h4>
                    </CopyToClipboard>
                </div>
                <div className="title" value={props.variant2} onChange={e=> setValue(e.target.value)}>
                    <CopyToClipboard className="tooltip" text={props.variant2}>
                            <h4>{props.variant2} <span className='tooltiptext'>Click to Copy</span></h4>
                    </CopyToClipboard>
                </div>
                <div className="title" value={props.variant3} onChange={e=> setValue(e.target.value)}>
                    <CopyToClipboard className="tooltip" text={props.variant3}>
                            <h4>{props.variant3} <span className='tooltiptext'>Click to Copy</span></h4>
                    </CopyToClipboard>
                </div>
                <div className="title" value={props.variant4} onChange={e=> setValue(e.target.value)}>
                    <CopyToClipboard className="tooltip" text={props.variant4}>
                            <h4>{props.variant4} <span className='tooltiptext'>Click to Copy</span></h4>
                    </CopyToClipboard>
                </div>
                <div className="title" value={props.variant5} onChange={e=> setValue(e.target.value)}>
                    <CopyToClipboard className="tooltip" text={props.variant5}>
                            <h4>{props.variant5} <span className='tooltiptext'>Click to Copy</span></h4>
                    </CopyToClipboard>
                </div>
               
           </div>
       </div>

       {/* {popup modal} */}
       {modal &&(
           <div className="modal">
               <div onClick={toggleModal} className="overlay"></div>
               <div className="modal-content d_flex">
                   <div className="modal-img left">
                       <img src={props.image} alt="" />
                   </div>
                   <div className="modal-text right">
                       <span>Featured - Design</span>
                       <h1>{props.title}</h1>
                       <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut ea porro dolorem harum distinctio, voluptate quaerat alias, esse consectetur rem ipsam cumque eveniet, totam voluptatibus odio nesciunt! Quos, beatae reprehenderit?</p>
                       <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis possimus voluptate rerum fugit repellendus cupiditate eligendi soluta itaque voluptatem non. Quibusdam tenetur, nisi libero iusto sint est. Pariatur, aliquid praesentium!</p>
                    <div className="button f_flex mtop">
                        <button className='btn_shadow'>
                            LIKE THIS  <i className="far fa-thumbs-up"></i>
                        </button>
                        <button className='btn_shadow'>
                            VIEW PROJECT  <i className="far fa-chevron-right"></i>
                        </button>
                    </div>
                    <button className='close-modal btn_shadow' onClick={toggleModal}><i className="fas fa-times"></i></button>
                   </div>
               </div>
           </div>
       )

       }
    </>
  )
}

export default Card