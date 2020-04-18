import React , {Component} from 'react';
import Menu from './Menu'
import Home from './Home'
import Contact from './Contact'
import About from './aboutus'
import Header from './Header'
import Footer from './Footer'
import {connect} from 'react-redux'
import { Switch, Route, Redirect , withRouter } from 'react-router-dom';
import DishDetail from './dishDetail';


const mapStateToProps = state => {
  return{
    dishes : state.dishes,
    comments : state.comments,
    promotions : state.promotions,
    leaders : state.leaders
  } 

}
class Main extends Component {

constructor(props){
  super(props)
}

  render() {

    const HomePage = () => {
      return (
        <Home dish={this.props.dishes.filter((dish) => dish.featured )[0]}
        promotions={this.props.promotions.filter((promo) => promo.featured )[0]}
        leaders={this.props.leaders.filter((leader) => leader.featured )[0]}
        />
      )
    }

    const DishWithId = ({match}) => {
     return(
      <DishDetail dish={this.props.dishes.filter((dish) => dish.id === parseInt(match.param.dishId , 10)) [0]}
      comments={this.props.comments.filter((comment) => comment.dishId === parseInt(match.param.dishId , 10))}
      />
     )
      
    }
    return (
      <div>
      <Header/>
       <Switch>
      <Route path="/home" component={HomePage}/>
      <Route exact path="/menu" component={() =>  <Menu dishes={this.props.dishes}/>}/>
      <Route path=".menu/:dishId" component={DishWithId}/>
      <Route exact path="/contactus" component={Contact}/>
      <Route exact path="/aboutus" component={() => <About leaders={this.props.leaders}/>}/>
      <Redirect to="/home"/>
       </Switch>
        <Footer/>
      </div>
    );
  }
}


export default withRouter(connect(mapStateToProps)(Main));
