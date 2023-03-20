import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import LinkIcon from '@mui/icons-material/Link';
import AvatarLabel from './AvatarLabel';
import './RecipeResults.css';

const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
  })(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  }));

  export default function RecipeReviewCard(props) {
    const { label, mealType, cuisineType, image, ingredients, recipeUrl } = props;
    const [expanded, setExpanded] = React.useState(false);
  
    const handleExpandClick = () => {
      setExpanded(!expanded);
      
    };

    return (
        <Card sx={{ maxWidth: 345 }} className="card-item">
          <CardHeader
            avatar={
              <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
               <AvatarLabel label={label}/>
              </Avatar>
            }
            
            title={label}
            // subheader={mealType}
          
          />
          <CardMedia
            component="img"
            height="194"
            image={image}
            alt={image}
          />
          <CardContent>
            <Typography variant="body2" color="text.secondary">
             Suitable for {mealType}
            </Typography>
            <Typography variant="body2" color="text.secondary">
             Cuisine type is {cuisineType}
            </Typography>
          </CardContent>
          <CardActions disableSpacing>
          <a href={recipeUrl}>
            <IconButton aria-label="link to recipe">
              <LinkIcon />
            </IconButton>
            </a>
            <ExpandMore
              expand={expanded}
              onClick={handleExpandClick}
              aria-expanded={expanded}
              aria-label="show more"
            >
              <ExpandMoreIcon />
            </ExpandMore>
          </CardActions>
          <Collapse in={expanded} timeout="auto" unmountOnExit>
            <CardContent>
              <Typography paragraph>Ingredients:</Typography>
              {ingredients.map((ingredient) => (
                <Typography paragraph>{ingredient.text}</Typography>
              ))}
            </CardContent>
          </Collapse>
        </Card>
      );
    }

  