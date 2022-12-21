import "./index.css"

import {profile,highline, cards, message, request  } from "./data/db.json"
// import { profile,highline, cards, message, request } from "@/js/database"

import { navbar,navbar_container,navbar_container_create,navbar_container_logo,navbar_container_searchBar,navbar_container_create_img,
left_profile_img,
left_profile_name,
left_profile_at,
middle_highline_description,
middle_highline_description_img,
middle_highline_description_p,
middle_form_img,
middle_form_input_text,
create_news,
create_profile_structure,
create_picture_structure,
create_control_structure,
create_comment_strcture,
  create_friend_list,
  create_request_list,
 } from "@/js/common"



 //nav
navbar_container_logo.textContent="TopSocial"
navbar_container_create_img.src=profile.img_src

// left
left_profile_img.src=profile.img_src
left_profile_name.textContent=profile.name
left_profile_at.textContent=profile.at


//MIDDLE

// form
middle_form_input_text.placeholder = `What is on your mind, ${profile.name} ?`
middle_form_img.src = profile.img_src

//highline
middle_highline_description_p.forEach((element,index)=>{
  element.textContent = highline.description[index]
})
middle_highline_description_img.forEach((element,index)=>{
  element.src = `/images/profile/profile_${index + 7}.png`
})
middle_highline_description.forEach((element,index)=>{
  element.style.backgroundImage = `url("/images/highline/highline_${index + 2}.jpeg")`
})

// CARD
const cardDom = document.querySelector('.card')
cards.forEach(element =>{
  const doms = create_news()
  cardDom.appendChild(doms.info)
  create_profile_structure(doms.info_profile,element.profile)
create_picture_structure(doms.info_picture,element.picture)
create_control_structure(doms.info_control,element.control)
create_comment_strcture(doms.info_comment,element.comment)
});

//message
const messageDom = document.querySelector(".friend-list");
create_friend_list(messageDom,message)

//request

const requestDom = document.querySelector(".request-list");
create_request_list(requestDom, request);

