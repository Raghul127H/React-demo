import React, { useEffect, useState } from 'react'
import CardComp from '../Common/CardComp';

function ApiCallComp() {

    const [resdata, setresdata] = useState([])

    useEffect(() => {

        handleapi()


    }, [])

    const handleapi = async () => {

        const response = await fetch("https://fakestoreapi.com/products");
        const data = await response.json();

        setresdata(data)

        console.log(data);
    };

    return (
        <div>
            
<div className="container">
    <div className="row">
           
            {resdata.map((todo, i) => (
                <div key={i}>

                    <div className="col-4 mt-4">


                <CardComp data ={todo}/>
                </div>


                   
                </div>
                








            )



            )
            }

            <button onClick={handleapi}>Api call</button>



        </div>
        </div>

        </div>



    )










}


export default ApiCallComp