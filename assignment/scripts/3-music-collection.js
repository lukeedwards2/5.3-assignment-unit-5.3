console.log('***** Music Collection *****')
// Safe Zone -- Write code below this line
let myCollection = [];
let album1 = {
  title: 'Sucker',
  artist: 'Jonas Brothers',
  yearPublished: '2019'
}
let album2 = {
  title: 'Homecoming',
  artist: "Kanye West",
  yearPublished: '2007'
}
let album3 = {
  title: 'Dirt On My Boots',
  artist: 'Jon Pardi',
  yearPublished: '2017'
}
let album4 = {
  title: 'Feel It Still',
  artist: 'Portugal',
  yearPublished: '2017'
}
let album5 = {
  title: 'Dynamite',
  artist: 'Taio Cruz',
  yearPublished: '2010'
}
let album6 = {
  title: 'Donald Trump',
  artist: 'Mac Miller',
  yearPublished: '2010'
}

function addToCollection(collection, title, artist, yearPublished) {
  myCollection.push(album1)
  myCollection.push(album2)
  myCollection.push(album3)
  myCollection.push(album4)
  myCollection.push(album5)
  myCollection.push(album6)
  return myCollection
  

  
}
console.log(addToCollection())










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
