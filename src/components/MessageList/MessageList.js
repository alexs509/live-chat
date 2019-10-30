import React from 'react';
import './MessageList.css';
import MessageItem from '../MessageItem/MessageItem';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { createStore } from 'redux'
import  todoApp  from '../../redux/reducers'
import { connect } from 'react-redux'


const store = createStore(todoApp)
console.log(store.getState())

export class MessageList extends React.Component {
   /* constructor(props) {
    super(props);
    this.state = {
      msg : [
        {content:"Ahah Bonjour", username:"alex"},
        {content:"Oui c'est mi", username:"Roger"},
        {content:"Oh Djaaa je suis la", username:"Antonio"},
        {content:"Pourquoi moi", username:"Mahmoud"}
      ]
    };
  } */

  render()  {
    const { classes } = this.props;
    /* if(this.props.value){
      console.log(this.props.value);
      this.state.msg = [...this.state.msg,{content:this.props.value, username:"Alex"}]
  }
   */
    return (  
        
       <Card className={classes.card}>
      <CardContent>
        <Typography color="textSecondary" gutterBottom>
          Live Chat 💬
        </Typography>
        <Typography variant="h5" component="h2">
        {this.props.messages.map(chat => <MessageItem message={chat} />)}
        </Typography>
      </CardContent>
      {/* <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions> */}
    </Card> 
    );
    
  }
    
  } 

  const mapStateToProps = state => {
    return{
      messages : state
    }
  }


 // export default connect(mapStateToProps)(MessageList);
 
export default withStyles(theme => ({
  card: {
    width: 600,
  },
  
}))(connect(mapStateToProps)(MessageList)); 
