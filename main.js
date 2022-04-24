alert("-CRACHÁ NLW ORIGIN 2021-")
const linksSocialMedia = {
  github: 'Matheus-9',
  instagram: 'matheus.9',
  facebook: 'rocketseat'
} 

// function userName(){
//   document.getElementById("userName")
//   .textContent = 'Matheus Soares'
// }


function changeSocialMediaLinks() {
  for (let li of socialLinks.children){
    const social = li.getAttribute('class')
    li.children[0].href = `https://${social}.com/${linksSocialMedia[social]}`
    // alert(li.children[0].href)
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

// function socialLinks(){
//   for (let li of socialLinks.children){
//     alert(li)
//   }
// }
// userName()
changeSocialMediaLinks()
getGithubProfileInfo()
// socialLinks()
