import React from 'react';
import {Card, CardImg, CardText, BreadcrumbItem , Breadcrumb,
    CardTitle,
    CardBody
  } from 'reactstrap';
  import {Link} from 'react-router-dom'
  import {Loading} from './Loading'

    function RenderDish  ({dish})  {
        return(
            <div className="col-12 col-md-5 m-1">
            <Card>
            <CardImg object src={dish.image} alt={dish.name}/>
           <CardBody>
           <CardTitle heading>{dish.name}</CardTitle>
            <CardText>{dish.description}</CardText>
           </CardBody>
             </Card>
             </div>
             )
    }

    function RenderComments ({comments , addComment , dishId}){
        if (comments != null )
        return (
            <div className="col-12 col-md-5 m-1">
                <h4>Comments</h4>
                <ul className="list-unstyled">
                    {comments.map((comment) => {
                        return(
                        <li key={comment.id}>
                        <p>{comment.comment}</p>
                        <p>-- {comment.author}</p>
                        </li>
                        )
                    })}
                </ul>
                {/* <CommentForm dishId={dishId} addComment={addComment}/> */}
            </div>
        );
        else return(
            <div><h1>ye comment ka area ha</h1></div>
        )
    }
  
const DishDetail = (props) => {

    if(props.isLoading){
        return(
            <div className="container">
                <div className="row">
                    <Loading/>
                </div>
            </div>
        )
    }
    else if (props.errMess){
        return(
            <div className="container">
                <div className="row">
                    <h4>lo g error {props.errMess}</h4>
                </div>
            </div>
        )
    }
   else if(props.dish != null)
   return (
       <div className="conatiner">
               <div className="row m-2">
                <Breadcrumb>
                    <BreadcrumbItem><Link to="/home">Menu</Link></BreadcrumbItem>
                    <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                </Breadcrumb>
                <div className="col-12">
                    <h3>lo g dish name {props.dish.name}</h3>
                    <hr/>
                </div>
                </div>
        <div className="row">
        <RenderDish dish={props.dish}/>
        <RenderComments comments={props.comments}
        addComment = {props.addComment}
        dishId={props.dish.id}
        />
        </div>
       </div>
   );
   else 
   return(
       <div><h1>ye pic ka area ha</h1></div>
   );
}


export default DishDetail;