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


const store = createStore(todoApp)
console.log(store.getState())

export class MessageList extends React.Component {

  render() {
    const { classes } = this.props;

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
      </Card>
    );
  }
}

const mapStateToProps = state => {
  return {
    messages: state
  }
}

export default withStyles(theme => ({
  card: {
    width: 600,
  },

}))(connect(mapStateToProps)(MessageList)); 
