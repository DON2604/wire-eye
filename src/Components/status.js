import React from "react";
import "../Styles/status.css";

const status = () => {
  return (
    <>
    <div className="home-container"> <br/>   
    <h1 className="sthead">Status Report</h1>
    <div class="frame">
  <div class="center">
    
		<div class="profile">
			<div class="image">
				<div class="circle-1"></div>
				<div class="circle-2"></div>
				<img src="https://100dayscss.com/codepen/jessica-potter.jpg" width="70" height="70" alt="Jessica Potter"/>
			</div>
			
			<div class="name">Jessica Potter</div>
			<div class="job">Visual Artist</div>
			
			<div class="actions">
				<button class="btn">Follow</button>
				<button class="btn">Message</button>
			</div>
		</div>
		
		<div class="stats">
			<div class="box">
				<span class="value">523</span>
				<span class="parameter">Posts</span>
			</div>
			<div class="box">
				<span class="value">1387</span>
				<span class="parameter">Likes</span>
			</div>
			<div class="box">
				<span class="value">146</span>
				<span class="parameter">Follower</span>
			</div>
		</div>
  </div>
</div>
    </div>
    </>
  )
}

export default status;
