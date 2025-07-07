import React from 'react';
import { Helmet } from 'react-helmet';
import NotFound from '../NotFound';
import brand_data from './BrandData';
import { useParams } from 'react-router';
import { cityLD } from '../JSON-LD';
import car from "../../Images/Appliance-repair-work-van-cropped.webp"
import car2 from "../../Images/Appliance-repair-work-van-cropped-2.webp"
import kitchen from "../../Images/sub-zero-kitchen.webp"
import './Brand.css'


const Brand = () => {
  const jsonLdString = JSON.stringify(cityLD)
  let { brand } = useParams();
  if (brand_data[brand] === undefined) {
    return <NotFound />
  }
  const brandName = brand_data[brand]['name'];
  const brandType = brand_data[brand]['type'];
  return <div className="city-page-container">
  <Helmet>
    <script type="application/ld+json">{jsonLdString}</script>
    <title>{brandName} Repair: Expert Solutions for Appliances</title>
    <meta name="description" content={`Quickly resolve your appliance troubles with our ${brandName} repair services. We guarantee expert solutions for refrigerator and range problems.`} />
    <meta property="og:url" content={`https://majorappliancerepair.info/${brand_data[brand]}/`}></meta>
    <link rel="canonical" href={`https://majorappliancerepair.info/${brand}/`}></link>
    <link rel="preload" href={`${kitchen}`} as="image" />
    <link rel="preload" href="/static/media/Appliance-repair-work-van-cropped.f1a6788ffc549148fbac.webp" as="image" />
    <link rel="preload" href="/static/media/Appliance-repair-work-van-cropped-2.7c48baf0a421f37a1ee8.webp" as="image" />
  </Helmet>
<div className="brand-photo-container">
  <img loading="lazy" className="brand-photo" src={kitchen} alt="Kitchen"/>
  <div className="overlay"><h1 className="brand-header">{brandName} Repair</h1></div>
</div>
<div className="brand-text">
  <div>
      <div className="why-choose-us">
          <h2>Why Choose Our {brandName} Appliance Repair Services?</h2>
          {brandType === 'low' ? (
          <p>When it comes to {brandName} appliances, you need specialists who understand the unique features and complexities of these high-tech machines. Our certified technicians have extensive experience repairing {brandName} refrigerators, washers, dryers, ovens, and more. Trust us to deliver fast, reliable, and affordable repair solutions tailored to your needs.</p>
        ) : (
          <p>{brandName} appliances offer superior performance, stunning design, and advanced features that set them apart from standard models. Whether you own a luxury refrigerator or a high-tech range, our certified technicians have the expertise and experience needed to handle even the most complex {brandName} repairs with precision and care.</p>
        )}
          </div>
      
      {brandType === 'low' && (
        <div className='types'>
          <h2>Our {brandName} Appliance Repair Services Include:</h2>
              <h3>{brandName} Refrigerator Repair</h3>
              <p>We address cooling issues, faulty water dispensers, ice maker malfunctions, and more.</p>
              <h3>{brandName} Washer Repair</h3>
              <p>Our team resolves drainage problems, spinning malfunctions, water temperature issues, and more.</p>
              <h3>{brandName} Dryer Repair</h3>
              <p>Get help with heating issues, drum problems, faulty sensors, and other common dryer troubles.</p>
              <h3>{brandName} Dishwasher Repair</h3>
              <p>We repair poor cleaning performance, water leaks, drainage problems, and more.</p>
              <h3>{brandName} Oven & Range Repair</h3>
              <p>We handle uneven cooking, ignition issues, and various other oven and range concerns.</p>
          </div>  
          )}
        {brandType === 'subzero' && (
        <div className='types'>
              <h3>Expert {brandName} Repair</h3>
              <p>Sub-Zero refrigerators are renowned for their state-of-the-art cooling technology, built-in design, and superior food preservation capabilities. Our experienced technicians are trained to handle all aspects of Sub-Zero refrigerator repair, including:</p>
              <p><strong>Temperature and Cooling Issues:</strong> If your Sub-Zero refrigerator isn’t maintaining consistent temperatures, we offer precise diagnostics and repairs to protect your food’s freshness.</p>
              <p><strong>Compressor and Sealed System Repairs:</strong> Our team is equipped to handle complex compressor repairs and sealed system maintenance, restoring your refrigerator’s cooling efficiency.</p>
              <p><strong>Water Leaks and Condensation Problems:</strong> We identify and resolve water leaks, ice maker malfunctions, and excess moisture issues, ensuring your unit functions at peak performance.</p>
              <p>With genuine replacement parts and expert service, we guarantee effective and lasting results for your Sub-Zero refrigerator repair needs.</p>
              <p>Wolf appliances, known for their precision cooking capabilities, bring professional-grade performance to your home kitchen. Whether it’s a Wolf range, oven, or cooktop, our repair experts offer specialized services to keep them in top condition:</p>
              <p><strong>Burner Ignition and Heat Issues:</strong> If your Wolf range burners are slow to ignite or fail to heat evenly, we provide fast and efficient repairs to restore consistent cooking power.</p>
              <p><strong>Temperature Calibration:</strong> Our team ensures your Wolf oven maintains precise temperatures, perfect for baking, roasting, and broiling with professional results.</p>
              <p><strong>Control Panel and Electrical Repairs:</strong> We diagnose and repair unresponsive control panels, electrical issues, and other malfunctions affecting the performance of your Wolf appliance.</p>
        <p>Trust our skilled technicians to handle even the most complex Wolf appliance repairs, restoring your cooking appliance’s functionality and performance.</p>
           </div>
            )}
        {brandType === 'high' && (
        <div className='types'>
          <div>
              <h2>{brandName} Refrigerator Repair</h2>
              <p>{brandName} refrigerators are designed to provide optimal food preservation and a luxurious kitchen aesthetic. If you’re experiencing issues, our team can expertly diagnose and repair:</p>
              <p><strong>Cooling Problems:</strong> If your {brandName} refrigerator is not cooling correctly, we can quickly resolve issues with temperature control or cooling efficiency, ensuring your food stays fresh.</p>
              <p><strong>Ice Maker and Water Dispenser Malfunctions:</strong> We provide fast, reliable repairs for ice maker failures and water dispenser issues, restoring convenience and functionality.</p>
              <p><strong>Sealed System and Compressor Repair:</strong> With specialized tools and expertise, we repair the sealed system and compressors, crucial for your {brandName} refrigerator’s performance and longevity.</p>
              <p>Trust our team to deliver precision repair services using genuine {brandName} parts, ensuring your refrigerator continues to perform at its best.</p>
          </div>

          <div>
              <h2>{brandName} Range and Oven Repair</h2>
              <p>{brandName} ranges and ovens are built for those who appreciate professional-grade cooking performance at home. Whether you need help with your {brandName} range, oven, or cooktop, our experts offer comprehensive repair services:</p>
              <p><strong>Temperature Inconsistencies:</strong> If your {brandName} oven is not heating properly or your range has inconsistent burner performance, our technicians provide efficient repairs to restore precise temperature control.</p>
              <p><strong>Ignition and Burner Problems:</strong> We diagnose and fix issues with slow or faulty ignition, burners that don’t light, or malfunctioning stovetop controls.</p>
              <p><strong>Electrical Issues:</strong> {brandName} ranges are equipped with sophisticated digital controls, which may experience electrical faults. We expertly repair control panels, wiring, and any electrical malfunctions to keep your cooking experience flawless.</p>
              <p>With our specialized {brandName} appliance repair services, your kitchen will be ready to deliver high-end cooking results every time.</p>
          </div>

          <div>
              <h2>Why Choose Major Appliance Repair Services?</h2>
              <p>Our repair services are tailored specifically to meet the demands of {brandName}’s luxury appliances. Here’s why you can trust us to care for your high-end kitchen equipment:</p>
              <p><strong>Factory-Certified Technicians:</strong> Our technicians are specially trained to handle {brandName}’s advanced technology, ensuring expert-level repairs for every model.</p>
              <p><strong>Genuine {brandName} Parts:</strong> We only use original, high-quality {brandName} parts to guarantee long-lasting repairs and maintain your appliance's premium performance.</p>
              <p><strong>Reliable and Timely Service:</strong> We understand the value of your time and your {brandName} appliances. That’s why we provide prompt, efficient service to minimize downtime and keep your kitchen running smoothly.</p>
              <p><strong>Customer Satisfaction:</strong> We take pride in offering personalized service, and our team is committed to ensuring you are fully satisfied with the repairs. We stand behind our work with a satisfaction guarantee.</p>
          </div>
        </div>
        )}
      
      <div className="van-photos-brands">
        <img loading="lazy" src={car} alt={`${brandName} repair in Seattle`} ></img>
        <img loading="lazy" src={car2} alt={`${brandName} repair in Bellevue`}></img>
      </div>
      <div id="common-issues">
          <h2>Common {brandName} Appliance Issues We Repair:</h2>
          <p><strong>Not Cooling or Heating:</strong> We provide fast fixes for refrigerators that fail to cool or ovens that refuse to heat.</p>
          <p><strong>Water Leaks:</strong> Our team specializes in stopping water leaks from washing machines, dishwashers, or refrigerators, ensuring no mess or water damage.</p>
          <p><strong>No Power or Unresponsiveness:</strong> For appliances that won’t turn on or respond, we offer accurate diagnostics and effective repairs.</p>
          <p><strong>Noise and Vibrations:</strong> Strange sounds from your {brandName} appliance? We eliminate rattling, banging, or excessive vibrations.</p>
      </div>
      <div id="trust-certified">
          <h2>Certified {brandName} Technicians You Can Trust</h2>
          <p>Our repair specialists are fully licensed, bonded, and insured. With ongoing training in {brandName} latest technology, we ensure a top-notch repair experience every time.</p>
          <p>With years of experience and a commitment to excellence, we are your trusted source for {brandName} appliance repair. Reach out to us and let our experts restore the convenience and performance of your appliances.</p>
      </div>
      </div>
  </div>
</div>
};

export default Brand;
