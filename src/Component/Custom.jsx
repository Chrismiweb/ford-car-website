import React from 'react'
import './Custom.css'

function Custom() {
    const steps = [
        {
            number: "1",
            heading: "Build & Price Your Vehicle",
            content: "Choose model, trim & options to create your custom order.",
            learnMore: "Learn More >",
        },
        {
            number: "2",
            heading: "Share With Your Dealer",
            content: "When you’re finished building, submit your vehicle to your local dealer.",
            learnMore: "Learn More >"
        },
        {
            number: "3",
            heading: "Place Your Order",
            content: "Your dealer will contact you. Answer the questions before placing your order.",
            learnMore: "Learn More >"
        }

    ]
    const price= [
        {
            starting: "Starting At",
            price: "$27,205",
        },
        {
            starting: "EPA-Est. MPG City/Hwy",
            price: "21/30",
        },
        {
            starting: "Seating For",
            price: "4",
        }
    ]
  return (
    <div className='custom'>
        <div className='custom-header'>
            <div className='header-title'>
                <h1>Custom Order Your Mustang</h1>
            </div>
            <p>Get the vehicle you want with an online custom order.</p>
        </div>
        <div className='All-steps'>
            {steps.map((step)=>(
                <div className='step-border'>
                    <h3>{step.number}</h3>
                    <h4>{step.heading}</h4>
                    <h5>{step.content}</h5>
                    <a href="#"><h6>{step.learnMore}</h6></a>
                </div>
            ))}
         </div>
         <div className='Create-custom'>
            <button>Create Your Custom Order</button>
            <a href="#"><p>Custom Order Explained</p></a>
         </div>
         <div className='priceTag'>
            {price.map((prc)=>(
                <div className='priceTag-border'>
                    <p>{prc.starting}</p>
                    <h3>{prc.price}</h3>
                </div>
            ))}
         </div>
    </div>
  )
}

export default Custom