import React from 'react';
import { Helmet } from 'react-helmet';
import NotFound from '../NotFound';
import blog_data from './BlogData';
import { useParams } from 'react-router';
import { cityLD } from '../JSON-LD';
import './Blog.css'


const Blog = () => {
  
  return
 
  const jsonLdString = JSON.stringify(cityLD)
  let { blogName } = useParams();
  console.log(blogName)
  if (blog_data[blogName] === undefined) {
    return <NotFound />
  }
  const blogTitle = blog_data[blogName]['title'];
  const blogText = blog_data[blogName]['par1'];
  return <div className="city-page-container">

  <Helmet>
    <script type="application/ld+json">{jsonLdString}</script>
    <title>{blogTitle}</title>
    {/* <meta name="description" content={`Professional appliance repair services in ${name} for a wide range of major appliances, such as refrigerators, washing machines, dryers, dishwashers, and more.`} />
    <meta property="og:url" content={`https://majorappliancerepair.info/service-area/${cityName}/`}></meta>
    <link rel="canonical" href={`https://majorappliancerepair.info/service-area/${cityName}/`}></link>
    <link rel="preload" href={`/places/${cityName}.webp`} as="image" />
    <link rel="preload" href="/static/media/Appliance-repair-work-van-cropped.webp" as="image" />
    <link rel="preload" href="/static/media/Appliance-repair-work-van-cropped-2.webp" as="image" /> */}
  </Helmet>
<div className="city-photo-container">
  <div className="overlay"><h1 className="city-header">{blogTitle}</h1></div>
</div>
<div className="city-text">
  <div dangerouslySetInnerHTML={{ __html: blogText }} />
    </div>
</div>
};

export default Blog;
