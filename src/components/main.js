import React , {Component} from 'react';
import Menu from './Menu'
import {DISHES} from '../shared/dishes'
import Home from './Home'
import Contact from './Contact'
import About from './aboutus'
import Header from './Header'
import Footer from './Footer'
import { COMMENTS } from '../shared/Comments'
import { PROMOTIONS } from '../shared/Promotion'
import { LEADERS } from '../shared/leaders'
import { Switch, Route, Redirect } from 'react-router-dom';
import DishDetail from './dishDetail';
class Main extends Component {

constructor(props){
  super(props)

  this.state = {
    dishes : DISHES,
    comment : COMMENTS,
    promotions: PROMOTIONS,
    leaders : LEADERS
   
    
    
  }
}

  render() {

    const HomePage = () => {
      return (
        <Home dish={this.state.dishes.filter((dish) => dish.featured )[0]}
        promotions={this.state.promotions.filter((promo) => promo.featured )[0]}
        leaders={this.state.leaders.filter((leader) => leader.featured )[0]}
        />
      )
    }

    const DishWithId = ({match}) => {
     return(
      <DishDetail dish={this.state.dishes.filter((dish) => dish.id === parseInt(match.param.dishId , 10)) [0]}
      comments={this.state.comments.filter((comment) => comment.dishId === parseInt(match.param.dishId , 10))}
      />
     )
      
    }
    return (
      <div>
      <Header/>
       <Switch>
      <Route path="/home" component={HomePage}/>
      <Route exact path="/menu" component={() =>  <Menu dishes={this.state.dishes}/>}/>
      <Route path=".menu/:dishId" component={DishWithId}/>
      <Route exact path="/contactus" component={Contact}/>
      <Route exact path="/aboutus" component={About}/>
      <Redirect to="/home"/>
       </Switch>
        <Footer/>
      </div>
    );
  }
}


export default Main;
