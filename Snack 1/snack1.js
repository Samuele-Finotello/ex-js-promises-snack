function getPostTitle(id) {
  return new Promise((resolve, reject) => {
    fetch(`https://dummyjson.com/posts/${id}`)
      .then(response => response.json())
      .then(data => console.log(`Il titolo del post n.${id} e': '${data.title}'`))
  })
}

getPostTitle(6)