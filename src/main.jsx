import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import App from './App.jsx'
import Dashboard from './pages/dashboard/Dashboard.jsx';
import Team from './pages/team/Team.jsx';
import Pie from './pages/pie/Pie.jsx';
import Bar from './pages/bar/Bar.jsx';
import Line from './pages/line/Line.jsx';
import InvoicesChart from './pages/invoicesChart/InvoicesChart.jsx';
import Contact from './pages/contacts/Contact.jsx';
import Invoices from './pages/invoices/Invoices.jsx';
import Form from './pages/form/Form.jsx';
import Calender from './pages/calender/Calender.jsx';
import FAQ from './pages/faq/FAQ.jsx';


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />} >
      <Route index element={<Dashboard />} />
      <Route path="Team" element={<Team />} />
      <Route path="Contact" element={<Contact />} />
      <Route path="Invoices" element={<Invoices />} />
      <Route path="Form" element={<Form />} />
      <Route path="Calender" element={<Calender />} />
      <Route path="FAQ" element={<FAQ />} />
      <Route path="Bar" element={<Bar />} />
      <Route path="Pie" element={<Pie />} />
      <Route path="Line" element={<Line />} />
      <Route path="InvoicesChart" element={<InvoicesChart />} />
    </Route>
  )
);
const rootElement = document.getElementById("root");

if (rootElement) {
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );
}