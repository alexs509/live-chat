import React from 'react';
import Emoji from 'react-emoji-render';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import DoneAllIcon from '@material-ui/icons/DoneAll';


export class MessageList extends React.Component {
  constructor(props) {
    super(props)
  }


  render() {
    console.log(this.props)
    return (
      <div>
        <Grid container justify="center" spacing={10}>
          <Grid item xs>
            <Typography
              component="span"
              variant="body2"
              color="textPrimary"
            >
              {this.props.message.username}
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography
              component="span"
              variant="body1"
              color="textPrimary"
            >
              <Emoji text={this.props.message.content} />
            </Typography>

          </Grid>
          <Grid item xs>
            <DoneAllIcon fontSize="small" />
          </Grid>
        </Grid>
      </div>
    )
  }
}

export default MessageList;
