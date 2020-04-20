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
import {addComment , fetchDishes} from '../redux/ActionCreator'
import {action} from 'react-redux-form'


const mapStateToProps = state => {
  return{
    dishes : state.dishes,
    comments : state.comments,
    promotions : state.promotions,
    leaders : state.leaders
  } 

}

const mapDispatchToProps = (dispatch) => ({
  addComment : (dishId , rating, author, comment) => dispatch(addComment(dishId , rating , author , comment)),
  fetchDishes : () => {dispatch(fetchDishes())},
  resetFeedbackForm : () => {dispatch(action.reset('feedback'))}
})


class Main extends Component {

constructor(props){
  super(props)
}

componentDidMount(){
  this.props.fetchDishes();
}
  render() {

    const HomePage = () => {
      return (

        // Yaha pr ye line ani thi is ma dish fetch ho rai han pr ye chal ni rai
        // <Home dish={this.props.dishes.dishes.filter((dish) => dish.featured )[0]}


        <Home dish={this.props.dishes.dishes}
        dishesLoading={this.props.dishes.isLoading}
        dishesErrMess={this.props.dishes.errMess}
        promotions={this.props.promotions.filter((promo) => promo.featured )[0]}
        leaders={this.props.leaders.filter((leader) => leader.featured )[0]}
        />
      )
    }

    const DishWithId = ({match}) => {
     return(
      
      <DishDetail dish={this.props.dishes.dishes.filter((dish) => dish.id === parseInt(match.params.dishId , 10)) [0]}
      isLoading={this.props.dishes.isLoading}
      errMess={this.props.dishes.errMess }
      comments={this.props.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId , 10))}
      addComment={this.props.addComment}
      />
     )
      
    }
    return (
      <div>
      <Header/>
       <Switch>
      <Route path="/home" component={HomePage}/>
      <Route exact path="/menu" component={() =>  <Menu dishes={this.props.dishes}/>}/>
      <Route path="/menu/:dishId" component={DishWithId}/>
      <Route exact path="/contactus" component={() => <Contact resetFeedbackForm={this.props.resetFeedbackForm}/>}/>
      <Route exact path="/aboutus" component={() => <About leaders={this.props.leaders}/>}/>
      <Redirect to="/home"/>
       </Switch>


          {/* yee dishdetail ka area ha is sy render to ho rha lein dish render ni ho rhi
       <DishDetail dish={this.props.dishes} comments={this.props.comments}/> */}

       
        <Footer/>
        
        
      </div>
    );
  }
}


export default withRouter(connect(mapStateToProps , mapDispatchToProps)(Main));
