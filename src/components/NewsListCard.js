import React from "react";
import { Box, Grid } from "@mui/material";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";

const NewsListCard = ({ item }) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="thumbnail image"
        height="140px"
        image="https://s.yimg.com/uu/api/res/1.2/uRJMBmQLR595V9G2DmQvCA--~B/aD00MDA7dz03Mjg7YXBwaWQ9eXRhY2h5b24-/https://s.yimg.com/uu/api/res/1.2/Ub6RlHpCUdcWK8kNK_3Yug--~B/aD00MDA7dz03Mjg7YXBwaWQ9eXRhY2h5b24-/https://media.zenfs.com/en/moneywise_327/0a20af45cfeb2e318582af573d814479"
      />

      {/* <Typography gutterBottom variant="h5" component="div">
  {item.content.thumbnail.resolutions[0].url}
</Typography> */}
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {item.content.provider.displayName}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {item.content.pubDate}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {item.content.title}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
};

export default NewsListCard;
