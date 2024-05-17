import './App.css'
import {Routes, Route} from "react-router-dom";
import MainPage from "./pages/MainPage.jsx";
import AboutPage from "./pages/AboutPage.jsx";
import PostPage from "./pages/PostPage.jsx";
import Layout from "./components/Layout.jsx";
import PostPush from "./pages/PostPush.jsx";

function App() {

  return (
      <>
          <Routes>
              <Route path="/" element={<Layout />}>
                  <Route index element={<MainPage />} />
                  <Route path="about" element={<AboutPage />} />
                  <Route path="posts" element={<PostPage />} />
                  <Route path="postPush" element={<PostPush />} />

                  <Route path="*" element={<h4>Страница не найдена</h4>} />
              </Route>
          </Routes>
      </>
  )
}

export default App