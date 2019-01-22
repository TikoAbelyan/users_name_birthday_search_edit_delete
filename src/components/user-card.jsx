import React, { PureComponent } from 'react';

import './users.scss';

import { withStyles } from '@material-ui/core/styles';

import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import CardActionArea from '@material-ui/core/CardActionArea';
import Input from '@material-ui/core/Input';

const styles = {
  card: {
    maxWidth: 345,
  },
  media: {
    height: 250,
    backgroundSize: 'cover' ,
  },
  cardContent: {
    height: '5rem'
  },
  cardHeader: {
    minHeight: '5rem' ,
  }
};

class UserCard extends PureComponent {
  state = {
    editable: false
  }
  edit = (e) => {
    this.setState({
      editable: !this.state.editable
    })
  }
  onInputChange = (e) => {
    this.props.editUser(this.props.index,e)
  }
  render() {
  const { classes } = this.props;
    return ( 
      <Card className={classes.card}>
        <CardHeader
          className={classes.cardHeader}
          title={
            this.state.editable 
            ? <Input 
                placeholder="edit name" 
                autoFocus={true}
                onChange={(e)=> this.onInputChange(e)}
              />
            : `${this.props.user.name.first.toUpperCase()} 
            ${this.props.user.name.last.toUpperCase()}`
          }
          subheader={`Date ${this.props.user.dob.date}`}
        />
        <CardActionArea>
          <CardMedia 
            className={classes.media}
            image={this.props.user.picture.large}
            title="User Avatar"
          />
        </CardActionArea>
        <CardContent className={classes.cardContent}>
          <Typography variant="h5">
            {this.props.user.location.state}
          </Typography>
          <Typography component="p">
            {this.props.user.location.city}
          </Typography>
          <Typography component="p">
            {this.props.user.location.street}
          </Typography>
        </CardContent>
        <CardActions>
          <Button 
            color="primary" 
            className={classes.btns}
            onClick={this.edit}
          >
            { !this.state.editable ? 'Edit' : 'Save' }
          </Button>
          <Button 
            color="primary"
            onClick={()=> this.props.deleteUser(this.props.index)}
            className={classes.btns}
          >
            Delete
          </Button>
        </CardActions>
      </Card>
    );
  }
}

export default withStyles(styles)(UserCard);