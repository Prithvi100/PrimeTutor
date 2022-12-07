import React, { Component } from "react";

import "./VideoLayout.css";
const data = [
  {
    thumbnail:
      "https://isha.sadhguru.org/yoga/wp-content/uploads/2020/05/how-to-start-yoga.jpg",

    title: "Guru Sharma Bikram Yoga Session 1",
    details: "",
  },
  {
    thumbnail: "",

    title: "Guru Sharma Bikram Yoga Session 2",
    details: "",
  },
];
export default class VideoGrid extends Component {
  componentDidMount = () => {
   console.log("test");
  };

  renderVideo = (video) => {
    const { isSmall } = this.props;

    return (
      <div class="video" onClick={this.props.onVideoClick}>
        <img class="thumbnail" src={video.thumbnail} alt="" />
        {!isSmall && (
          <>
            <img
              class="avatar"
              src={video.avatar}
              width="224"
              height="224"
              alt="Man free icon"
              title="Man free icon"
            />
            <p class="title">{video.title}</p>
            <p class="channel">{video.channel}</p>
            <p class="details">{video.details}</p>
          </>
        )}
        {!!isSmall && (
          <div>
            <p class="title">{video.title}</p>
            <p class="channel">{video.channel}</p>
            <p class="details">{video.details}</p>
          </div>
        )}
      </div>
    );
  };
  render() {
    const { headerTitle, isSmall } = this.props;

    return (
      <section class={`videos ${isSmall ? "small-mode" : ""}`}>
        {headerTitle && <h2>{headerTitle}</h2>}
        {data.map(this.renderVideo)}
      </section>
    );
  }
}
