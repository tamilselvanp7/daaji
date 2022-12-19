/* eslint-disable array-callback-return */
import React from "react"

let dayActivity = "";
let imgContent = "";
let videoContent = "";
let bodyTagOpen = "";
let bodyTagClose = "";

const DayActivities = ({activities}) => 

	// console.log(activities)
	(

		activities.map((activity) => {
			if(activity.activity_Content !== '') {
                // console.log(activity.activity_Content)
				dayActivity = `${'<div class="daily-activity" key={key}>'}${activity.activity_Content}${'</div>'}`;
			
            
            }
			else{
				dayActivity = "";
			}

			// console.log(activity.Activity_Image.length)

			imgContent = "";

			if(activity.activity_Image.data) {
				activity.activity_Image.data.map((activityImg) => {
					if(activity.activity_Image.data.length > 2) {
						bodyTagOpen = "<div class='glimpse-single-activity-img post-grid-img' key={mkey}>";
						imgContent += `${'<div class="inner"><img class="activity_image" src='}${activityImg.attributes.url}${' /> </div>'}`;

					}
					else {
						bodyTagOpen = "<div class='glimpse-single-activity-img' key={mkey}>";
						imgContent = `${'<div class="inner"><img class="activity_image" src='}${activityImg.attributes.url}${' /> </div>'}`;

					}

					bodyTagClose = "</div>";
				})
			}
			else {
				bodyTagOpen = '<div class="glimpse-single-activity-img">';
				bodyTagClose = '</div>';
			}

			if(activity.Activity_Iframe){
				videoContent = `${'<div class="inner-video mx-auto">'}${activity.Activity_Iframe}${'</div>'}`;
			}
			else {
				videoContent = "";
			}

			return <span key={activity.id} dangerouslySetInnerHTML = {{__html: dayActivity+bodyTagOpen+imgContent+videoContent+bodyTagClose }} />;
		})
	)


export default DayActivities;