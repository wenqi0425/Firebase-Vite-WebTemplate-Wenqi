import { db } from "./app-config"
import {
  doc,
  getDoc,
  collection,
  getDocs,
  query,
  where,
  onSnapshot,
} from "firebase/firestore"

async function getBook() {
  const docRef = doc(db, "books", "0F4OsPoyfgjmWRsgPu2D")
  const docSnap = await getDoc(docRef)

  console.log(docSnap)

  if (docSnap.exists()) {
    console.log("Book data:", docSnap.data())
  } else {
    // doc.data() will be undefined in this case
    console.log("No such book!")
  }
}

async function getAllBooks() {
  const querySnapshot = await getDocs(collection(db, "books"))

  console.log(querySnapshot)

  querySnapshot.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshots
    console.log(doc.id, " => ", doc.data())
  })
}

function getUpdates() {
  const unsub = onSnapshot(doc(db, "books", "0F4OsPoyfgjmWRsgPu2D"), (doc) => {
    console.log("Book updated data: ", doc.data())
  })
}

function getAllUpdates() {
  const q = query(collection(db, "books"))
  const unsubscribe = onSnapshot(q, (querySnapshot) => {
    const books = []
    querySnapshot.forEach((doc) => {
      books.push(doc.data().title)
    })
    console.log("Current books in store: ", books.join(", "))
  })
}

export { getBook, getAllBooks, getUpdates, getAllUpdates }
