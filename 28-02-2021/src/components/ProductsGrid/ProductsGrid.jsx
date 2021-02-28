import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Container, makeStyles } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  root: {
    height: 200,
    objectFit: "contain",
  },
}));

const ProductsGrid = ({ products }) => {
  const styles = useStyles();

  const items = products.map(({ _id, name, price, thumbnail, description }) => (
    <Grid item xs={12} lg={3} key={_id}>
      <Card>
        <CardActionArea>
          <CardMedia
            image={thumbnail}
            src={thumbnail}
            className={styles.root}
            title={name.ukr}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {name.ukr}
            </Typography>
            <Typography gutterBottom variant="h3" component="h3">
              {price}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {description.ukr}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            Купити
          </Button>
        </CardActions>
      </Card>
    </Grid>
  ));

  return (
    <Container maxWidth="lg">
      <Grid container spacing={2}>
        {items}
      </Grid>
    </Container>
  );
};

export default ProductsGrid;
