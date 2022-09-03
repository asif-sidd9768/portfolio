import Navigation from "./components/navigation/navigation.component";
import MainContent from "./components/main-content/main-content.component";
import Footer from "./components/footer/footer.component";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Marks from "./components/marks/marks.component";
import Blogs from "./components/blogs/blogs.component";
import MarkDetail from "./components/mark-detail/mark-detail.component";
import ParticlesBg from "particles-bg";
import BlogDetail from "./components/blog-detail/blog-detail.component";

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Navigation />
        <Routes>
          <Route exact path='/' element={<MainContent />}></Route>
          <Route exact path='/marks' element={< Marks />}></Route>
          <Route exact path='/marks/:id' element={< MarkDetail />}></Route>
          <Route exact path='/blogs' element={< Blogs />}></Route>
          <Route exact path='/blogs/:id' element={<BlogDetail />}></Route>
        </Routes>
        <Footer />
      </div>
      <ParticlesBg type="cobweb" bg={true} />
    </BrowserRouter>
  )
}

export default App;