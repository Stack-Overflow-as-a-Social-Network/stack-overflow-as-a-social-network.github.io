---
layout: default
---

For most people doing coding today, Stack Overflow should not be an unfamiliar site. It is being used by thousands and potentially millions of people from all over the world each day to find solutions to problems. Since Stack Overflow is such a large and widely used site for help in programming, it is also interesting in a wider perspective since the results could reflect something about how the programming community works as a whole.  

## Goal
The main idea of our project is that we want to see what are the users of Stack Overflow really like and when do they use it? How are they distributed around the world, which country contributes the most to the site, and in which ways? The information could be very interesting to Stack Overflow itself, since it would allow them to understand the users potential areas for growth.

## Dataset
We used the following datasets.
- **Stack Overflow Annual Developper Survey**: short description
- **Stack Overflow Data from Google BigQuery**: short description
- **World Bank Open Data /UN Data/ Kaggle World Bank**: short description

## Interesting Findings
Here are the insights we found out. We categorized them into three sections, <span class="user">user</span>, <span class="time">time</span> and <span class="country">country</span> related.

{: .finding-legend }
  - {: .user } Visit frequency is correlated to job satisfaction.
  - {: .user } We are carried by super active stackoverflow users.
  - {: .user } Experience influence user activity.

  - {: .time } % of question answered per year.
  - {: .time } Weekday vs. Weedend.
  - {: .time } Work hour vs. Free time.

  - {: .country } Active user analysis (asian countries have higher active rate).
  - {: .country } Chinese stackoverflow user mysterious inactiveness.
  - {: .country } Flow of information.

{% include middle.html
  text="User"
  description="What are the users really like?"
  video_url="assets/video/user.mp4"
%}

something...

{% include middle.html
  text="Time"
  description="When do they use it?"
  video_url="assets/video/time.mp4"
%}

something...

{% include middle.html
  text="Country"
  description="How are they distributed around the world?"
  video_url="assets/video/country.mp4"
%}

something...

<!-- ## Example of a image

![Size of company distribution of StackOverflow users](assets/img/company.png)

## Example of plotly Figure

<iframe src="assets/export/fig.html"></iframe>

## Example of plotly World Choropleth Map

<iframe src="assets/export/map.html"></iframe> -->
