import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { CardMedia } from "@mui/material";
import { useEffect } from "react";
import { clearNews, getNews } from "../features/newsSlice";
import { useDispatch, useSelector } from "react-redux";

const News = () => {
  const dispatch = useDispatch()
  const { news, error } = useSelector((state) => state.api)

 useEffect(() => {
   dispatch(getNews())
 
   return () => {
    dispatch(clearNews())

   }
 }, [])
 

  
  return (
    <>
      <h1>NEWS</h1>

      {error && (
        <Typography variant="h3" color={"error"}>
          News can not be fetched
        </Typography>
      )}
      <Box
        xs={{ d: "flex" }}
        display="flex"
        alignItems="center"
        justifyContent="space-evenly"
        flexWrap="wrap"
      >
        {news?.map((item, index) => (
          <Card sx={{ maxWidth: 345, m: 5, maxHeight: 600 }} key={index}>
            <CardMedia
              component="img"
              height="250"
              image={item?.urlToImage}
              alt="img"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {item?.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {item?.content}
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Share</Button>
              <Button size="small" href={item?.url} target="_blank">
                Detail
              </Button>
            </CardActions>
          </Card>
        ))}
      </Box>
    </>
  );
};

export default News;
