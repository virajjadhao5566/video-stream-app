import React, { useState } from 'react'
import * as AWS from 'aws-sdk';
const Db = () => {
    const [arr,setArray] = useState([])
    AWS.config.update({
        region: 'us-east-1',
        endpoint: 'dynamodb.us-east-1.amazonaws.com',
        accessKeyId: 'AKIARIXAMWDH6BIM25UD',
        secretAccessKey: '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'
    });

    const onRead = () => {
        let dynamodb = new AWS.DynamoDB();
        let docClient = new AWS.DynamoDB.DocumentClient();
        let that = this;
        let params = {
            TableName: "VideoDB"
        };

        docClient.scan(params, function (err, data) {
            if (err) {
                console.log(err);
            } else {
                // that.setState({
                //     gridData: data
                // var temp = data
                // temp.map((item)=>{
                //   console.log(item)
                // })
                setArray((arr)=>data.Items)
                // })
            }
        });
    };
    const renderEmbeddedLinks = () => {
        return arr.map((temp) => {
          return <iframe style={{padding:'20px',width:"25%",height:"300px"}} src={temp.link} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen></iframe>;
        });
    };
    return (
        <div>
            <button style={{color:'white',backgroundColor:'black',marginLeft:'600px',marginTop:"40px",width:'100px',height:'3rem',fontWeight:'bolder',fontSize:'1.5rem'}} onClick={onRead}>Fetch</button>
            <h1>{arr.length}</h1>
            {renderEmbeddedLinks()}
            
        </div>
        
    )
}

export default Db
