import { BrowserRouter, Routes, Route, useParams } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<ContactContainer />}>
          <Route path=":contactId*" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

function Home() { return <div>Home</div>};
function About() { return <div>About</div>};

function ContactContainer() {
  return (
    <div>
      {/*Contact Container*/}
      <Outlet/>
    </div>
  );
}

function Contact() {
  let params = useParams();
  return (
    <div>
      Contact {params.contactId || ''}
    </div>
  );
}
