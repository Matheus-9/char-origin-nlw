
const linksSocialMedia = {
  github: 'Matheus-9',
  instagram: 'matheus.9',
  facebook: 'rocketseat'
} 




function changeSocialMediaLinks() {
  for (let li of socialLinks.children){
    const social = li.getAttribute('class')
    li.children[0].href = `https://${social}.com/${linksSocialMedia[social]}`
   
  }
  
           
}

function getGithubProfileInfo(){
  const url = `https://api.github.com/users/${linksSocialMedia.github}`

  fetch(url)
  .then(response => response.json())
  .then(data =>{
    userName.textContent = data.name
    userBio.textContent = data.bio
    userLink.href= data.html_url
    userPhoto.src = data.avatar_url
  })  
}


changeSocialMediaLinks()
getGithubProfileInfo()

