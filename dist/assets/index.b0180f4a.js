(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const n of o)if(n.type==="childList")for(const s of n.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function t(o){const n={};return o.integrity&&(n.integrity=o.integrity),o.referrerpolicy&&(n.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?n.credentials="include":o.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function r(o){if(o.ep)return;o.ep=!0;const n=t(o);fetch(o.href,n)}})();const p={name:"Elden Lord",at:"@EldenRing",img_src:"./images/profile/profile_6.png"},h={description:["Your Stories","Your View","Your Emotion","Your Opinion","Your Feeling","Your Love"]},y=[{id:1,profile:{src:"/images/profile/profile_1.png",name:"Novak Djokovic",position:"Brisbane",time:"15 MINUTES AGO"},picture:{img_src:"/images/post/post_5.jpeg"},comment:{img_src_list:["/images/profile/profile_5.png","/images/profile/profile_6.png","/images/profile/profile_7.png"],first_people_name:"Ernest Achiever",like_peoples_number:2323,comment_info:"Lana Rose Lorem ipsum dolor sit quisquam eius. #lifestyle",view_number:3473}},{id:2,profile:{src:"/images/profile/profile_3.png",name:"Roger Federer",position:"Sydeny",time:"15 MINUTES AGO"},picture:{img_src:"/images/post/post_9.jpeg"},comment:{img_src_list:["/images/profile/profile_5.png","/images/profile/profile_6.png","/images/profile/profile_7.png"],first_people_name:"Ernest Achiever",like_peoples_number:2323,comment_info:"Lana Rose Lorem ipsum dolor sit quisquam eius. #lifestyle",view_number:3473}},{id:3,profile:{src:"/images/profile/profile_8.png",name:"Rafa Nadal",position:"Melbourne",time:"15 MINUTES AGO"},picture:{img_src:"/images/post/post_7.jpeg"},comment:{img_src_list:["/images/profile/profile_5.png","/images/profile/profile_6.png","/images/profile/profile_7.png"],first_people_name:"Ernest Achiever",like_peoples_number:2323,comment_info:"Lana Rose Lorem ipsum dolor sit quisquam eius. #lifestyle",view_number:3473}},{id:4,profile:{src:"/images/profile/profile_5.png",name:"Andy Murray",position:"Perth",time:"15 MINUTES AGO"},picture:{img_src:"/images/post/post_10.jpeg"},comment:{img_src_list:["/images/profile/profile_2.png","/images/profile/profile_7.png","/images/profile/profile_9.png"],first_people_name:"Ernest Achiever",like_peoples_number:2323,comment_info:"Lana Rose Lorem ipsum dolor sit quisquam eius. #lifestyle",view_number:3473}},{id:5,profile:{src:"/images/profile/profile_11.png",name:"Serena Williams",position:"New York",time:"15 MINUTES AGO"},picture:{img_src:"/images/post/post_11.jpeg"},comment:{img_src_list:["/images/profile/profile_2.png","/images/profile/profile_7.png","/images/profile/profile_9.png"],first_people_name:"Ernest Achiever",like_peoples_number:2323,comment_info:"Lana Rose Lorem ipsum dolor sit quisquam eius. #lifestyle",view_number:3473}}],q=[{id:1,src:"/images/profile/profile_2.png",name:"Tomas Li",msg:"Hi, Long time no see!"},{id:2,src:"/images/profile/profile_3.png",name:"Lana Rose",msg:"Birthday Tomorrow!"},{id:3,src:"/images/profile/profile_4.png",name:"No One",msg:"lol u right."},{id:4,src:"/images/profile/profile_5.png",name:"Emily",msg:"emm, sounds good."},{id:5,src:"/images/profile/profile_6.png",name:"Alex",msg:"hang on, give me a sec."}],S=[{id:1,src:"/images/profile/profile_7.png",name:"Hajia Bintu",mutualFriendNum:8},{id:2,src:"/images/profile/profile_8.png",name:"Jackline Mensah",mutualFriendNum:19}],d=document.querySelector("nav");d.querySelector(".container");const v=d.querySelector(".logo");d.querySelector(".search-bar");const L=d.querySelector(".create"),C=L.querySelector("img"),b=document.querySelector("main"),E=b.querySelector(".container"),N=E.querySelector(".main-left"),f=N.querySelector(".profile"),k=f.querySelector("img"),A=f.querySelector("h2"),x=f.querySelector("p"),_=document.querySelector(".main-middle"),u=_.querySelector(".highline"),w=u.querySelectorAll(".description"),M=u.querySelectorAll(".description img"),T=u.querySelectorAll(".description p"),g=_.querySelector("form"),O=g.querySelector("img"),I=g.querySelector("#create-post"),l=()=>document.createElement("div"),R=()=>{const e={info:l(),info_profile:l(),info_picture:l(),info_control:l(),info_comment:l()};return e.info.classList.add("info"),e.info_profile.classList.add("info-profile"),e.info_picture.classList.add("info-picture"),e.info_control.classList.add("info-control"),e.info_comment.classList.add("info-comment"),e.info.appendChild(e.info_profile),e.info.appendChild(e.info_picture),e.info.appendChild(e.info_control),e.info.appendChild(e.info_comment),e},$=(e,i)=>{const t=l();t.classList.add("profile"),t.innerHTML=` 
    <div class="profile-photo">
    <img alt="profile-photo" />
    </div>
    <div class="profile-description">
    <h2></h2>
    <p></p>
    </div>
  `;const r=document.createElement("i");r.className="uil uil-ellipsis-h",e.appendChild(t),e.appendChild(r),t.querySelector("img").src=i.src,t.querySelector("h2").textContent=i.name,t.querySelector("p").textContent=`${i.position}, ${i.time}`},j=(e,i)=>{const t=document.createElement("img");t.setAttribute("width","100%"),t.src=i.img_src,e.appendChild(t)},a=()=>document.createElement("i"),Y=e=>{const i=l();i.classList.add("main-control");const t=a();t.className="uil uil-heart-sign control-heart";const r=a();r.className="uil uil-comment-alt-dots";const o=a();o.className="uil uil-share-alt",i.appendChild(t),i.appendChild(r),i.appendChild(o);const n=a();n.className="uil uil-bookmark",e.appendChild(i),e.appendChild(n)},m=e=>document.createElement(e),D=(e,i)=>{const t=l();t.classList.add("profile-photo-list"),i.img_src_list.forEach(s=>{console.log("comment:",s);const c=m("img");c.src=s,c.classList.add("profile-photo"),t.appendChild(c)});const r=m("span");r.classList.add("like-info"),r.innerHTML=`liked by <strong>${i.first_people_name}</strong> and  <strong>${i.like_peoples_number}</strong> others`,t.appendChild(r);const o=m("span");o.classList.add("comment-info"),o.textContent=i.comment_info;const n=m("span");n.classList.add("view-btn"),n.textContent=`View all ${i.view_number} comments`,e.appendChild(t),e.appendChild(o),e.appendChild(n)},F=(e,i)=>{i.forEach(t=>{const r=document.createElement("div");r.classList.add("profile"),r.innerHTML=`
    <div class="profile-photo">
    <img alt="profile-photo" />
  </div>
  <div class="profile-description">
    <h2></h2>
    <p></p>
    `,r.querySelector("img").src=t.src,r.querySelector("h2").textContent=t.name,r.querySelector("p").textContent=t.msg,e.appendChild(r)})},G=(e,i)=>{i.forEach(t=>{const r=document.createElement("div");r.classList.add("request");const o=document.createElement("div");o.classList.add("profile"),o.innerHTML=`
    <div class="profile-photo">
    <img alt="profile-photo" />
  </div>
  <div class="profile-description">
    <h2></h2>
    <p></p>
    `,o.querySelector("img").src=t.src,o.querySelector("h2").textContent=t.name,o.querySelector("p").textContent=`${t.mutualFriendNum} Mutual friends`,r.appendChild(o);const n=document.createElement("div");n.classList.add("request-btn-group");const s=document.createElement("span");s.className="btn btn-primary",s.textContent="Accept";const c=document.createElement("span");c.className="btn btn-cancel",c.textContent="Decline",n.appendChild(s),n.appendChild(c),r.appendChild(n),e.appendChild(r)})};v.textContent="TopSocial";C.src=p.img_src;k.src=p.img_src;A.textContent=p.name;x.textContent=p.at;I.placeholder=`What is on your mind, ${p.name} ?`;O.src=p.img_src;T.forEach((e,i)=>{e.textContent=h.description[i]});M.forEach((e,i)=>{e.src=`/images/profile/profile_${i+7}.png`});w.forEach((e,i)=>{e.style.backgroundImage=`url("/images/highline/highline_${i+2}.jpeg")`});const H=document.querySelector(".card");y.forEach(e=>{const i=R();H.appendChild(i.info),$(i.info_profile,e.profile),j(i.info_picture,e.picture),Y(i.info_control,e.control),D(i.info_comment,e.comment)});const P=document.querySelector(".friend-list");F(P,q);const U=document.querySelector(".request-list");G(U,S);
