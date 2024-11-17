import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Main from './components/Main'
import './App.css'

function App() {
  
  const [memeData, setMemeData] = useState({
    topText: "",
    bottomText: "",
    randomImg: "http://i.imgflip.com/1bij.jpg"
  })
  
  const [memeImgs, setMemeImgs] = useState(["http://i.imgflip.com/1bij.jpg"])
  
  useEffect(() => {
    fetch('https://api.imgflip.com/get_memes')
    .then(res => res.json())
    .then(data => {
      // console.log(data.data.memes)
      const memeImgsData = []
      const apiData = data.data.memes
        apiData.map(meme => {
          return (
            memeImgsData.push(meme.url)
          )
        })
        setMemeImgs(memeImgsData)
      })
  },[])

  // console.log(memeImgs)

  function enterText(event){
    setMemeData(prevFormData => {
      return {
        ...prevFormData,
        [event.target.name]: event.target.value
      }
    })
  }

  function getMemeImgs(){
    const randomImgIndex = Math.floor(Math.random() * 100)
    setMemeData(prevFormData => {
      return{
        ...prevFormData,
        randomImg: memeImgs[randomImgIndex]
      }
    })
  }

  // console.log(memeData)

  function resetForm(){
    setMemeData({
      topText: "",
      bottomText: "",
      randomImg: "http://i.imgflip.com/1bij.jpg"
    })
  }

  return (
    <>
      <Navbar />
      <Main 
        handleChange={enterText}
        memeData = {memeData}
        handleClick = {getMemeImgs}
        reset = {resetForm}
      />
    </>
  )
}

export default App
