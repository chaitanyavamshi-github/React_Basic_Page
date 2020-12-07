import React from "react";
import Banner from "./Banner/Banner";
import bannerData from "./BannerData";

function BannerWrapper() {
  const bannerMarkup = bannerData.map(banner => [
    <Banner
      title={banner.title}
      titleColor={banner.titleColor}
      align={banner.align}
      desc={banner.desc}
      descColor={banner.descColor}
      img={banner.img}
    />
  ]);
  return <>{bannerMarkup}</>;
}

export default BannerWrapper;
