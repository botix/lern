import React from "react";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader"
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { Avatar, IconButton, CardMedia } from "@material-ui/core";
import ShareIcon from "@material-ui/icons/Share";


const useStyles = makeStyles( () => ({
  cardMedia:{
    height: "150px"
  }
}));

const cardItem = (props) => {
  const classes = useStyles();
  const { avatarUrl, title, subtitle, description, imageUrl } = props;

  return (
    <Card>

      <CardHeader
        avatar={
          <Avatar src={avatarUrl} />
        }
        action={
          <IconButton aria-label="settings">
            <ShareIcon />
          </IconButton>
        }
        title={title}
        subheader={subtitle}
      />

      <CardMedia className={classes.cardMedia} image={imageUrl} />

      <CardContent>
        <Typography variant="body2" component="p">
          {description}
        </Typography>
      </CardContent>
      
      <CardActions>
        <Button size="small">BUY NOW</Button>
        <Button size="small">OFFER</Button>
      </CardActions>
    
    </Card>
  )
};

export default cardItem;