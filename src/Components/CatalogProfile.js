import React from 'react';

const style = {
    width: "200px",
    display: "block"
}
const CatalogProfile = props => {

    return (
        <div className="container" style={{ marginBottom: 190 }}>

            <div class="content" style={{ marginTop: 30 }}>
                <div class="card flex-row">
                    <div class="card-header border-0">
                        <img src="https://cdn3.iconfinder.com/data/icons/business-and-finance-icons/512/Business_Man-512.png" alt="image" class="content-image"></img>
                    </div>
                    <div class="card-block px-4">
                        <br></br>
                        <h4 class="card-title">Username : <strong>{props.name}</strong></h4>
                        <hr></hr>

                        <br></br>
                        <p>
                            Email : {props.email}
                        </p>
                        <p>
                            Phone : {props.phone}
                        </p>
                        <p>
                            Address : {props.address}
                        </p>
                        <br></br>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default CatalogProfile