// With promises

console.log("Start");

const usersDB = {
  "user1@hw.js": [{ title: "video1" }, { title: "video2" }],
  "user2@hw.js": [{ genre: "genre1" }, { genre: "genre1" }],
  "user3@hw.js": [],
};
function displayError(errorMessage) {
  console.error(new Error(errorMessage));
}

const loginUser = (email, password) =>
  new Promise((resolve, reject) => {
    if (Object.keys(usersDB).includes(email)) {
      setTimeout(() => {
        console.log("Now we have the data of user:", email);
        resolve({
          userEmail: email,
        });
      }, 3000);
    } else {
      setTimeout(() => {
        reject("User Not Found");
      }, 3000);
    }
  });

const getUserVideos = (email) =>
  new Promise((resolve, reject) => {
    if (usersDB[email].length) {
      setTimeout(() => {
        resolve(usersDB[email]);
      }, 2000);
    } else {
      setTimeout(() => {
        reject("Videos Not Found");
      }, 2000);
    }
  });

const videoDetails = (video) =>
  new Promise((resolve, reject) => {
    if (video.title) {
      setTimeout(() => {
        resolve(video.title);
      }, 2000);
    } else {
      setTimeout(() => {
        reject("Video Title Not Found");
      }, 2000);
    }
  });

const getPassedUsersFirstVideoTitle = (user) => {
  loginUser(user, 1234)
  .then((user) => {
    console.log("user: ", user);
    return getUserVideos(user.userEmail)
})
   .then((videos) => videoDetails(videos[0]))
   .then((title) => console.log(title))
   .catch((error) => displayError(error));
};
 

// getPassedUsersFirstVideoTitle("user4@hw.js");
getPassedUsersFirstVideoTitle("user3@hw.js");
// getPassedUsersFirstVideoTitle("user2@hw.js");
// getPassedUsersFirstVideoTitle("user1@hw.js");

console.log("Finish");
