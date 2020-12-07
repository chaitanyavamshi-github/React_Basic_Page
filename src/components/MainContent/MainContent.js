import React from "react";
import "./MainContent.css";

function MainContent() {
  return (
    <>
      <div className="tableContainer">
        <div className="tableContainer--row">
          <div className="tableContainer__name">
            <h3>Nutrition fact</h3>
          </div>
          <div className="tableContainer__weigh"></div>
        </div>
        <div className="tableContainer--row">
          <div className="tableContainer__name fwb">Serving size</div>
          <div className="tableContainer__weigh fwb">100 g</div>
        </div>
        <div className="tableContainer__vr"></div>
        <div className="tableContainer--row">
          <div className="tableContainer__name fwb">Amount per serving</div>
          <div className="tableContainer__weigh"></div>
        </div>
        <div className="tableContainer--row">
          <div className="tableContainer__name">
            <h1>Calories</h1>
          </div>
          <div className="tableContainer__weigh">
            <h1>89</h1>
          </div>
        </div>
        <div className="tableContainer__vr"></div>
        <div className="tableContainer--row">
          <div className="tableContainer__name"></div>
          <div className="tableContainer__weigh fwb">% Daily value*</div>
        </div>
        <div className="tableContainer--row">
          <div className="tableContainer__name">
            <span className="fwb">Total fat</span> 0.3g
          </div>
          <div className="tableContainer__weigh fwb">0 %</div>
        </div>
        <div className="tableContainer--row">
          <div className="tableContainer__name pl10">Saturated fat 0.1g</div>
          <div className="tableContainer__weigh fwb">0 %</div>
        </div>
        <div className="tableContainer--row">
          <div className="tableContainer__name">
            <span className="fwb">Sodium</span> 1mg
          </div>
          <div className="tableContainer__weigh fwb">0 %</div>
        </div>
        <div className="tableContainer--row">
          <div className="tableContainer__name">
            <span className="fwb">Total carbohydrate</span> 23g
          </div>
          <div className="tableContainer__weigh fwb">8 %</div>
        </div>
        <div className="tableContainer--row">
          <div className="tableContainer__name pl10">Dietary fiber 2.6g</div>
          <div className="tableContainer__weigh fwb">9 %</div>
        </div>
        <div className="tableContainer--row">
          <div className="tableContainer__name pl10">Sugar 12g</div>
          <div className="tableContainer__weigh"></div>
        </div>
        <div className="tableContainer--row">
          <div className="tableContainer__name">
            <span className="fwb">Protein</span> 1.1g
          </div>
          <div className="tableContainer__weigh fwb">2 %</div>
        </div>
        <div className="tableContainer__vr"></div>
        <div className="tableContainer--row">
          <div className="tableContainer__name">Vitamin D 0.00mg</div>
          <div className="tableContainer__weigh">0 %</div>
        </div>
        <div className="tableContainer--row">
          <div className="tableContainer__name">Calcium 5.00mg</div>
          <div className="tableContainer__weigh">0 %</div>
        </div>
        <div className="tableContainer--row">
          <div className="tableContainer__name">Iron 0.26mg</div>
          <div className="tableContainer__weigh">1 %</div>
        </div>
        <div className="tableContainer--row">
          <div className="tableContainer__name">Potassium 358mg</div>
          <div className="tableContainer__weigh">8 %</div>
        </div>
        <div className="tableContainer__vr"></div>
        <div className="tableContainer--bottomLine">
          We are an agile company. We provide elegant, field-proven software.
          Lateral praxis
        </div>
        <div className="tableContainer--toTop">
          <i class="fa fa-chevron-up" aria-hidden="true"></i>
        </div>
      </div>
      <div className="tagline">
        &bull;&nbsp;&nbsp; Delivering with love and care for you to relish
      </div>
      <div className="aboutSection">
        <div className="aboutSection__vr"></div>
        <div className="fwb">About Demo Group</div>
        <div>
          <p>
            We are an agile company. We provide elegant, field-proven software.
            We have a suite of products for “last mile”, agriculture, legal
            compliance, audit tracking, risk management.
          </p>
        </div>
        <div>
          <p>We are happy to serve fresh & delicious fruits</p>
        </div>
        <div className="aboutSection__vr"></div>
      </div>
    </>
  );
}

export default MainContent;
