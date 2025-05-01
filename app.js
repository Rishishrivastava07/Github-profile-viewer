function fetchProfile() {
  const username = document.getElementById("username").value;
  if (!username) {
    alert("Please enter a username");
    return;
  }
  const url = fetch(`https://api.github.com/users/${username}`)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((data) => {
      displayProfile(data);
    })
    .catch((error) => {
      console.error("There was a problem with the fetch operation:", error);
      alert("User not found");
    });

  function displayProfile(data) {
    const profileElemet = document.getElementById("profile");
    profileElemet.innerHTML = `
      <h2>${data.name}</h2>
      <img src="${data.avatar_url}" style="width:100px; height:100px; border-radius:50%" alt="${data.name}" />
      <p>Followers: ${data.followers}</p>
      <p>Following: ${data.following}</p>
      <p>Public Repos: ${data.public_repos}</p>
      <p><a href="${data.html_url}" target="_blank">View Profile</a></p>
    `;
  }
}
