import React from 'react';
import Emoji from 'react-emoji-render';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import PersonIcon from '@material-ui/icons/Person';
import ListItemIcon from '@material-ui/core/ListItemIcon';


export class MessageList extends React.Component {
  constructor(props)  {
    super(props)
  }

  render() {
    return(
      <List>
      <ListItem alignItems="flex-start">
      <ListItemIcon>
          <PersonIcon />
      </ListItemIcon>
        <ListItemText
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                color="textPrimary"
              >
                <Emoji text={this.props.message.content}/>
              </Typography>
              {"  "}<br/>
              {this.props.message.username}
            </React.Fragment>
          }
        />
      </ListItem>
      </List>
      
    )
  }
}

export default MessageList;
