import React from "react";
import moment from "moment";

import "../App.css";

const NewsListItem = ({ item, index }) => {
  return (
    <div className="news__item__container">
      <div className="news-image">
        {item.content.thumbnail && (
          <img
            height={140}
            width={140}
            src={item.content.thumbnail.resolutions[3].url}
            alt="thumbnail"
          />
        )}
      </div>
      <div>
        <h3>{item.content.title}</h3>
        <p>{moment(item.content.pubDate).utc().format("YYYY-MM-DD HH:mm")}</p>
      </div>
    </div>
  );
};

export default NewsListItem;
