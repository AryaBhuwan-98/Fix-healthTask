import React from "react";
import "./Story.css";
import GroupIcon from "@mui/icons-material/Group";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import EmojiEmotionsOutlinedIcon from "@mui/icons-material/EmojiEmotionsOutlined";
import Slider from "react-slick";


export const Story = () => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: true,
        fade: false,
      };
    
  return (
    <div className="storyContainer">
      <h1>Patient Recovery Stories</h1>
      <h5>Don't just take our word for it</h5>

      <div className="storyBox">
        <div className="storyBox1">
          <div className="group">
            <GroupIcon />
          </div>
          <p>20000+</p>
          <p>Patients</p>
        </div>
        <div className="storyBox1">
          <div className="group">
            <CalendarTodayIcon />
          </div>
          <p>1 lakh+</p>
          <p>Sessions</p>
        </div>
        <div className="storyBox1">
          <div className="group">
            <EmojiEmotionsOutlinedIcon />
          </div>
          <p>9.6/10</p>
          <p>Avg. Rating</p>
        </div>
      </div>
      <div className="storyCard">
        <Slider {...settings} className="storySlider">
        <div className="item">
            <div className="storyCard">
              <h3>Fixed back pain from home</h3>
              <div className="image">
                <img src="https://www.fixhealth.com/_next/image?url=https%3A%2F%2Fik.imagekit.io%2Ftcfp7i31d%2FRashmi_KEXRN9maT.png%3FupdatedAt%3D1686564335393&w=1920&q=75" />
              </div>
              <h5>
                Quality, pocket friendly & consistent care is with Fix Health
                stands for
              </h5>
              <h6>Rashmi</h6>
              <div className="owner">
                <h6>43, HR Professional</h6>
              </div>
            </div>
          </div>
          <div className="item">
            <div className="storyCard">
              <h3>sitting job back pain eased</h3>
              <div className="image">
                <img src="https://www.fixhealth.com/_next/image?url=https%3A%2F%2Fik.imagekit.io%2Ftcfp7i31d%2FDeep_P-vGzCQ88.png%3FupdatedAt%3D1686564335311&w=1920&q=75" />
              </div>
              <h5>
                They worked around time zone variations to accommodate my
                schedule
              </h5>
              <h6>Pranjal Deep</h6>
              <div className="owner">
                <h6>29, Experience Design...</h6>
              </div>
            </div>
          </div>
          <div className="item">
            <div className="storyCard">
              <h3>Injury of 12 Years is fixed</h3>
              <div className="image">
                <img src="https://www.fixhealth.com/_next/image?url=https%3A%2F%2Fik.imagekit.io%2Ftcfp7i31d%2FNasir_kCpBt8epvL.png%3FupdatedAt%3D1686564335336&w=1920&q=75" />
              </div>
              <h5>
                6 month with Fix Health was less than 1 month of my insurance
                co-pay
              </h5>
              <h6>Dr. Nasir Kamal</h6>
              <div className="owner">
                <h6>64, General Physician</h6>
              </div>
            </div>
          </div>
          <div className="item">
            <div className="storyCard">
              <h3>Effective post surgery Rehab</h3>
              <div className="image">
                <img src="https://www.fixhealth.com/_next/image?url=https%3A%2F%2Fik.imagekit.io%2Ftcfp7i31d%2FRajesh_SUeQmKzaY.png%3FupdatedAt%3D1686564335353&w=1920&q=75" />
              </div>
              <h5>
                Loved the personal touch of the Physio's, Doctors and care
                manager.
              </h5>
              <h6>Rajesh Chainani</h6>
              <div className="owner">
                <h6>54, Senior Director,...</h6>
              </div>
            </div>
          </div>
          <div className="item">
            <div className="storyCard">
              <h3>Surgery-free neck pain relief</h3>
              <div className="image">
                <img src="https://www.fixhealth.com/_next/image?url=https%3A%2F%2Fik.imagekit.io%2Ftcfp7i31d%2FNeil_glNgiERto.png%3FupdatedAt%3D1686564335273&w=1920&q=75" />
              </div>
              <h5>
                I realized treatment could be done remotely, eliminating need
                for in-person visits.
              </h5>
              <h6>Neil Pinherio</h6>
              <div className="owner">
                <h6>42, Consultant</h6>
              </div>
            </div>
          </div>
          <div className="item">
            <div className="storyCard">
              <h3>Knee Pain of 2 Years gone</h3>
              <div className="image imageCard">
                <img src="https://www.fixhealth.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fa0u75w265gnx%2F6ehbvb2tOj2sBlfqT6mKR2%2F2b45744f8b075140c934404cf60f519e%2FWhatsApp_Image_2023-07-14_at_18.59.55.jpg&w=1920&q=75" />
              </div>
              <h5>
                Best self referral physiotherapy near me - skipped NHS queue.
                Got appointment same day.
              </h5>
              <h6>Aniket Dhawad</h6>
              <div className="owner">
                <h6>29, Data Scientist</h6>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
};