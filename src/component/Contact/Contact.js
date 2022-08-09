import React, {useState} from 'react'
import "./Contact.css"

const Contact = () => {

    const [data, setData] = useState({ 
        fullname: "",
        phone: "",
        email: "",
        subject: "",
        message: "",
     })
    const InputEvent = (event) => {
        const {name, value} = event.target

        setData((preVal) => {
            return{
                ...preVal,
                [name]:value,

            }
        })
    }

    const formSubmit = (event) => {
        event.preventDefault()
        alert(`My name is ${data.fullname}.
        My mobile number is ${data.phone}.
        My email is ${data.email}.
        My subject is ${data.subject}.
        Here is my message I want to say : ${data.message}`)
    }

  return (
    <>
        <section className="Contact" id="contact">
            <div className="container top">
                <div className="heading align-left">
                    <h4>CONTACT</h4>
                    <h1>Let's Discuss</h1>
                </div>

                <div className="content d_flex">
                    <div className="left">
                        <div className="box box_shadow">
                            <div className="img">
                                <img src="" alt="" />
                            </div>
                            <div className="details">
                                {/* <h1>Harish Dandavati</h1> */}
                                <br />
                                <p>I'm available to discuss on topics/share ideas which can be implemented. <br /> Schedule a e-meet</p>
                                <br />

                                <p>Phone: +91-9148217111</p>
                                <p>Email: harry.vd.16@gmail.com</p>
                                <br />
                                <span>Let's Connect on social media</span>
                                <div className="button f_flex">
                                    <button className='btn_shadow'>
                                    <a href="https://www.facebook.com/harish.dandavati.3/" target="_blank"><i className="fab fa-facebook-f"></i></a>
                                    </button>
                                    <button className='btn_shadow'>
                                        <a href="https://www.instagram.com/harris__d/?hl=en" target="_blank"><i className="fab fa-instagram"></i></a>
                                    </button>
                                    <button className='btn_shadow'>
                                    <a href="https://www.linkedin.com/in/harish-dandavati-63b206200/" target="_blank"><i className="fab fa-linkedin-in"></i></a>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* <div className="right box_shadow">
                        <form onSubmit={formSubmit}>
                            <div className="f_flex">
                                <div className="input row">
                                    <span>YOUR NAME</span>
                                    <input type="text" name="fullname" value={data.fullname} onChange={InputEvent} />
                                </div>
                                <div className="input row">
                                    <span>YOUR NUMBER</span>
                                    <input type="phone" name="phone" value={data.phone} onChange={InputEvent} />
                                </div>
                                <div className="input">
                                    <span>EMAIL</span>
                                    <input type="email" name="email" value={data.email} onChange={InputEvent} />
                                </div>
                                <div className="input">
                                    <span>SUBJECT</span>
                                    <input type="text" name="subject" value={data.subject} onChange={InputEvent} />
                                </div>
                                <div className="input">
                                    <span>YOUR MESSAGE</span>
                                    <textarea cols='30' rows='10' name="message" value={data.message} onChange={InputEvent} />
                                </div>
                                <button className='btn_shadow'>
                                    SEND MESSAGE <i className='fa fa-long-arrow-down'></i>
                                </button>
                            </div>
                        </form>
                    </div> */}
                </div>
            </div>
        </section>
    </>
  )
}

export default Contact