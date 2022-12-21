// navbar

export const navbar = document.querySelector("nav");
export const navbar_container = navbar.querySelector(".container");
export const navbar_container_logo = navbar.querySelector(".logo");
export const navbar_container_searchBar = navbar.querySelector(".search-bar");
export const navbar_container_create = navbar.querySelector(".create");
export const navbar_container_create_img =
  navbar_container_create.querySelector("img");

// main

export const main = document.querySelector("main");
export const main_container = main.querySelector(".container");

//main left
export const left = main_container.querySelector(".main-left");
export const left_profile = left.querySelector(".profile");
export const left_profile_img = left_profile.querySelector("img");
export const left_profile_name = left_profile.querySelector("h2");
export const left_profile_at = left_profile.querySelector("p");

//main middle
export const middle = document.querySelector(".main-middle");
export const middle_highline = middle.querySelector(".highline");
export const middle_highline_description =
  middle_highline.querySelectorAll(".description");
export const middle_highline_description_img =
  middle_highline.querySelectorAll(".description img");
export const middle_highline_description_p =
  middle_highline.querySelectorAll(".description p");

export const middle_form = middle.querySelector("form");
export const middle_form_img = middle_form.querySelector("img");
export const middle_form_input_text = middle_form.querySelector("#create-post");

export const create_div = () => {
  return document.createElement("div");
};
//create news

export const create_news = () => {
  const doms = {
    info: create_div(),
    info_profile: create_div(),
    info_picture: create_div(),
    info_control: create_div(),
    info_comment: create_div(),
  };
  doms.info.classList.add("info");
  doms.info_profile.classList.add("info-profile");
  doms.info_picture.classList.add("info-picture");
  doms.info_control.classList.add("info-control");
  doms.info_comment.classList.add("info-comment");

  doms.info.appendChild(doms.info_profile);
  doms.info.appendChild(doms.info_picture);
  doms.info.appendChild(doms.info_control);
  doms.info.appendChild(doms.info_comment);

  return doms;
};

// create profile

export const create_profile_structure = (profile_dom, info) => {
  const profile = create_div();
  profile.classList.add("profile");
  profile.innerHTML = ` 
    <div class="profile-photo">
    <img alt="profile-photo" />
    </div>
    <div class="profile-description">
    <h2></h2>
    <p></p>
    </div>
  `;
  const setting = document.createElement("i");
  setting.className = "uil uil-ellipsis-h";
  profile_dom.appendChild(profile);
  profile_dom.appendChild(setting);
  profile.querySelector("img").src = info.src;
  profile.querySelector("h2").textContent = info.name;
  profile.querySelector("p").textContent = `${info.position}, ${info.time}`;
};

// create picture

export const create_picture_structure = (picture_dom, info) => {
  const picture = document.createElement("img");
  picture.setAttribute("width", "100%");
  picture.src = info.img_src;
  picture_dom.appendChild(picture);
};

//create control

export const create_i = () => {
  return document.createElement("i");
};

export const create_control_structure = (control_dom) => {
  const mainControl = create_div();
  mainControl.classList.add("main-control");
  const like = create_i();
  like.className = "uil uil-heart-sign control-heart";
  const comment = create_i();
  comment.className = "uil uil-comment-alt-dots";
  const share = create_i();
  share.className = "uil uil-share-alt";
  mainControl.appendChild(like);
  mainControl.appendChild(comment);
  mainControl.appendChild(share);
  const mark = create_i();
  mark.className = "uil uil-bookmark";
  control_dom.appendChild(mainControl);
  control_dom.appendChild(mark);
};

//create comment
export const createDom = (name) => {
  return document.createElement(name);
};

export const create_comment_strcture = (comment_dom, info) => {
  const likePanel = create_div();
  likePanel.classList.add("profile-photo-list");
  info.img_src_list.forEach((element) => {
    console.log("comment:", element);
    const likePeople = createDom("img");
    likePeople.src = element;
    likePeople.classList.add("profile-photo");
    likePanel.appendChild(likePeople);
  });
  const likeInfo = createDom("span");
  likeInfo.classList.add("like-info");
  likeInfo.innerHTML = `liked by <strong>${info.first_people_name}</strong> and  <strong>${info.like_peoples_number}</strong> others`;
  likePanel.appendChild(likeInfo);

  const commentInfo = createDom("span");
  commentInfo.classList.add("comment-info");
  commentInfo.textContent = info.comment_info;
  const viewBtn = createDom("span");
  viewBtn.classList.add("view-btn");
  viewBtn.textContent = `View all ${info.view_number} comments`;

  comment_dom.appendChild(likePanel);
  comment_dom.appendChild(commentInfo);
  comment_dom.appendChild(viewBtn);
};

// main right
export const create_friend_list = (friend_list_dom, info) => {
  info.forEach((friend) => {
    const profile = document.createElement("div");
    profile.classList.add("profile");
    profile.innerHTML = `
    <div class="profile-photo">
    <img alt="profile-photo" />
  </div>
  <div class="profile-description">
    <h2></h2>
    <p></p>
    `
    profile.querySelector("img").src=friend.src
    profile.querySelector("h2").textContent=friend.name
    profile.querySelector("p").textContent = friend.msg
    friend_list_dom.appendChild(profile)
  });
};
export const create_request_list = (request_list_dom, info) => {
  info.forEach((element) => {
    const request = document.createElement("div")
    request.classList.add("request")

     //add profile
    const profile = document.createElement("div");
    profile.classList.add("profile");
    profile.innerHTML = `
    <div class="profile-photo">
    <img alt="profile-photo" />
  </div>
  <div class="profile-description">
    <h2></h2>
    <p></p>
    `
    profile.querySelector("img").src=element.src
    profile.querySelector("h2").textContent=element.name
    profile.querySelector("p").textContent = `${element.mutualFriendNum} Mutual friends`
    request.appendChild(profile)

    //add button group
    const btnGroup = document.createElement("div")
    btnGroup.classList.add("request-btn-group")
    const accept = document.createElement('span')
    accept.className = "btn btn-primary"
    accept.textContent ="Accept"
    const decline = document.createElement('span')
    decline.className = "btn btn-cancel"
    decline.textContent = "Decline"
    

    btnGroup.appendChild(accept)
    btnGroup.appendChild(decline)
    request.appendChild(btnGroup)



    request_list_dom.appendChild(request)
  })
};
