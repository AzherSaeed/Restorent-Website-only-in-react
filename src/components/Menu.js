import React from 'react';
import {Card, CardImg,
    CardTitle, CardImgOverlay , Breadcrumb , BreadcrumbItem
  } from 'reactstrap';
import {Link} from 'react-router-dom'
import { Loading } from './Loading'


function RenderMenuItem ({dish})  {
    return(
    <Card>
    <Link to={`/menu/ ${dish.id}`}>
    <CardImg width="100%" object src={dish.image} alt={dish.name}/>
   <CardImgOverlay>
    <CardTitle heading>{dish.name}</CardTitle>
   </CardImgOverlay>
   </Link>
    </Card>
    )
}

   const Menu = (props) => {
       
    const menu = props.dishes.dishes.map((dish) => {
        return(
            <div key={dish.id} className="col-12 col-md-5 m-1">
              <RenderMenuItem dish={dish}/>
            </div>
        )
    });

    if (props.dishes.isLoading){
            return(
                <div className="container">
                    <div className="row">
                        <Loading/>
                    </div>
                </div>
            );
        }
        else if (props.dishes.errMess){
            return(
                <div className="container">
                    <div className="row">
                        <h4>lo g error {props.dishes.errMess}</h4>
                    </div>
                </div>
            )
        }
    else
        return (
            <div className="container">
                <div className="row m-1">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                        <BreadcrumbItem active>Menu</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>Menu</h3>
                        <hr/>
                    </div>
                </div>
                <div className="row">
                    {menu}
                </div>
            
            </div>
        )

   }

  
    

export default Menu;