import React from 'react'
import Carousel from 'react-bootstrap/Carousel'

export default function AchievmentView() {
    return (
        <div style={{ padding: "5px" }}>
          <h2 style={{ textAlign: "center", color:"#00284d" }}>Achievements</h2>

          <hr />

          <div className="mr-auto ml-auto">
            <ol  >
              <li>
                Successfully conducted social audit exercise for CDF funds in
                Pokot and Trans-Nzoia Counties
              </li>
              <li>
                Lobbied for the introduction of mobile courts in ASAL areas
              </li>
              <li>Facilitated mitigation cases of Gender Based Violence</li>
              <li>Established child Human Rights clubs in schools</li>
              <li>Resolved Civil cases through ADR mechanisms</li>
            </ol>
          </div>
        </div>

    )
}
