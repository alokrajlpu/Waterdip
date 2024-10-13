// src/App.tsx
import React from "react";
import "./App.css";
import ApexChart from "./Chart";

const App: React.FC = () => {
  return (
    <div className="container">
      <header>
        <h1>APEXCHARTS</h1>
        <nav>
          <ul>
            <li>Line Charts</li>
            <li>Area Charts</li>
            <li>Column Charts</li>
            <li>Bar Charts</li>
            <li>Mixed / Combo Charts</li>
            <li>Range Area Charts</li>
            <li>Timeline Charts</li>
            <li>Funnel Charts</li>
            <li>Candlestick Charts</li>
            <li>Box & Whisker Charts</li>
            <li>Pie / Donuts</li>
            <li>Radar Charts</li>
            <li>Polar Area Charts</li>
          </ul>
        </nav>
      </header>
      <main>
        <h2>Chart Demos &gt; Mixed Charts &gt; Line & Area</h2>
        <ApexChart />
      </main>
    </div>
  );
};

export default App;
