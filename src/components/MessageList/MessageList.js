import React from 'react';
import './MessageList.css';
import MessageItem from '../MessageItem/MessageItem';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { createStore } from 'redux'
import todoApp from '../../redux/reducers'
import { connect } from 'react-redux'
import { functiongetMessages } from '../../redux/action'


export class MessageList extends React.Component {

  componentDidMount() {
    this.props.dispatch(functiongetMessages())
  }
  
  render() {
    console.log(this.props)
    
    const { classes } = this.props;

    return (
      <Card className={classes.card}>
        <CardContent>
          <Typography color="textSecondary" gutterBottom>
           <p>Live Chat 💬</p><br/>
        </Typography>
          <Typography variant="h5" component="h2">
            {this.props.messages.map(chat => <MessageItem message={chat} />)}
          </Typography>
        </CardContent>
      </Card>
    );
  }
}

const mapStateToProps = state => {
  console.log(state)
  return {
    messages: state
  }
}

export default withStyles(theme => ({
  card: {
    width: 600,
  },

}))(connect(mapStateToProps)(MessageList)); 
