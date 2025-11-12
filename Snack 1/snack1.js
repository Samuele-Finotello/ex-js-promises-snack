function getPostTitle(id) {
  return new Promise((resolve, reject) => {
    fetch(`https://dummyjson.com/posts/${id}`)
      .then(res => res.json())
      .then(data => resolve(data))
      .catch(error => reject(error))
  })
}

getPostTitle(5)
  .then(post => console.log(`Il titolo del post n.${post.id} e': '${post.title}'`))
  .catch(error => console.log(error))

function getPost(id) {
  return new Promise((resolve, reject) => {
    fetch(`https://dummyjson.com/posts/${id}`)
      .then(res => res.json())
      .then(post => {
        fetch(`https://dummyjson.com/users/${post.userId}`)
          .then(res => res.json())
          .then(user => resolve({ ...post, user }))
          .catch(error => reject(error))
      })
      .catch(error => reject(error))
  })
}

getPost(13)
  .then(fullPost => console.log(fullPost))
  .catch(error => console.error(error))