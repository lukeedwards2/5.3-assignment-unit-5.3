console.log('***** Music Collection *****')
// Safe Zone -- Write code below this line
let myCollection = [];

function addToCollection(collection, title, artist, yearPublished) {
  let newAlbum = {
    title: title,
    artist: artist,
    yearPublished: yearPublished
  }
  collection.push(newAlbum)
  return newAlbum

  
}
console.log(addToCollection(myCollection, 'Sucker', 'Jonas Brothers', '2019'))
console.log(addToCollection(myCollection, 'Homecoming', 'Kanye West', '2007'))
console.log(addToCollection(myCollection, 'Dirt On My Boots', 'Jon Pardi', '2017'))
console.log(addToCollection(myCollection, 'Feel It Still', 'Portugal', '2017'))
console.log(addToCollection(myCollection, 'Dynamite', 'Taio Cruz', '2010'))
console.log(addToCollection(myCollection, 'Donald Trump', 'Mac Miller', '2010'))

function showCollection(collection) {
  collection.forEach(album => {
    console.log(`${album.title} by ${album.artist}, published in ${album.yearPublished}`)
  })
}
console.log(showCollection(myCollection))

function findByArtist(collection, artist) {
  let matches = []

  for (let alb of collection){
    if (alb.artist === artist){
      matches.push(alb)
    }
  }
  return matches

}









// PLEASE DO NOT MODIFY THIS. Just leave it down here at the bottom. Think of it
// as a lil' chunk of friendly code that you don't need to understand right now.
// (It's used for automated testing.)
try {
  module.exports = {
    myCollection: typeof myCollection !== 'undefined' ? myCollection : undefined,
    addToCollection: typeof addToCollection !== 'undefined' ? addToCollection : undefined,
    showCollection: typeof showCollection !== 'undefined' ? showCollection : undefined,
    findByArtist: typeof findByArtist !== 'undefined' ? findByArtist : undefined,
    search: typeof search !== 'undefined' ? search : undefined,
  }
} catch (e) {
  // Do nothing
}
