import React from "react";
import { Box, Grid } from "@mui/material";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";

const NewsListCard = ({ item, index }) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      {item.content.thumbnail && (
        <CardMedia
          component="img"
          alt="thumbnail image"
          height="140px"
          image={item.content.thumbnail.resolutions[3].url}
        />
      )}
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
        {item.content.clickThroughUrl && (
          <Button
            size="small"
            href={item.content.clickThroughUrl.url}
            target="_blank"
          >
            Learn More
          </Button>
        )}
      </CardActions>
    </Card>
  );
};

export default NewsListCard;
