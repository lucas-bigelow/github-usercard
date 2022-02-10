import axios from 'axios';

/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/

axios("https://api.github.com/users/lucas-bigelow")
  .then(resp => resp.data)
  .then(resp => {
    document.querySelector(".cards").appendChild(createCard(resp));
  })
  .catch(err => console.error(err));

/*
  STEP 2: Inspect and study the data coming back, this is YOUR
    github info! You will need to understand the structure of this
    data in order to use it to build your component function

    Skip to STEP 3 (line 34).
*/

// okay, I understood the data coming back (for the most part)

/*
  STEP 4: Pass the data received from Github into your function,
    and append the returned markup to the DOM as a child of .cards
*/

// I threw it up top because of the weird async stuff!!

/*
  STEP 5: Now that you have your own card getting added to the DOM, either
    follow this link in your browser https://api.github.com/users/<Your github name>/followers,
    manually find some other users' github handles, or use the list found at the
    bottom of the page. Get at least 5 different Github usernames and add them as
    Individual strings to the friendsArray below.

    Using that array, iterate over it, requesting data for each user, creating a new card for each
    user, and adding that card to the DOM.
*/

const followersArray = [    
  "tetondan",
  "dustinmyers",
  "justsml",
  "luishrd",
  "bigknell"
];

followersArray.forEach(follower => {
  axios(`https://api.github.com/users/${follower}`)
  .then(resp => resp.data)
  .then(resp => {
    document.querySelector(".cards").appendChild(createCard(resp));
  })
  .catch(err => console.error(err));
});

/*
  STEP 3: Create a function that accepts a single object as its only argument.
    Using DOM methods and properties, create and return the following markup:

    <div class="card">
      <img src={image url of user} />
      <div class="card-info">
        <h3 class="name">{users name}</h3>
        <p class="username">{users user name}</p>
        <p>Location: {users location}</p>
        <p>Profile:
          <a href={address to users github page}>{address to users github page}</a>
        </p>
        <p>Followers: {users followers count}</p>
        <p>Following: {users following count}</p>
        <p>Bio: {users bio}</p>
      </div>
    </div>
*/

function createCard(user) {
  // create necessary node elements
  const card = document.createElement("div");

  const img = document.createElement("img");
  const info = document.createElement("div");

  const name = document.createElement("h3");
  const userName = document.createElement("p");
  const location = document.createElement("p");
  const profile = document.createElement("p");
  const profileLink = document.createElement("a");
  const followers = document.createElement("p");
  const following = document.createElement("p");
  const bio = document.createElement("p");

  // update info that will be applied to all cards
  card.classList.add("card");
  info.classList.add("card-info");
  
  name.classList.add("name");
  userName.classList.add("username");
  profile.textContent = "Profile: ";

  // update info that will be specific to user argument
  img.src = user.avatar_url;
  name.textContent = user.name;
  userName.textContent = user.login;
  location.textContent = `Location: ${user.location}`;
  profileLink.href = `${user.html_url}`;
  profileLink.textContent = `${user.html_url}`
  followers.textContent = `Followers: ${user.followers}`;
  following.textContent = `Following: ${user.following}`;
  bio.textContent = `Bio: ${user.bio}`;

  // stitch all the elements together and return
  profile.appendChild(profileLink);

  info.appendChild(name);
  info.appendChild(userName);
  info.appendChild(location);
  info.appendChild(profile);
  info.appendChild(followers);
  info.appendChild(following);
  info.appendChild(bio);

  card.appendChild(img);
  card.appendChild(info);

  return card;
}

/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/
