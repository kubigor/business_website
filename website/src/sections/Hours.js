// This is Contact component, it will contain contact form.
import React from 'react'
import "./Hours.css"

const Hours = () => {
  return <div id="hours-container">
    <div className="hours-box">
      <h2 className="hours-table-header">Office Hours</h2>
      <table className="hours-table">
        <tr>
          <td>Monday</td>
          <td>9am - 5pm</td>
        </tr>
        <tr>
          <td>Tuesday</td>
          <td>9am - 5pm</td>
        </tr>
        <tr>
          <td>Wednesday</td>
          <td>9am - 5pm</td>
        </tr>
        <tr>
          <td>Thursday</td>
          <td>9am - 5pm</td>
        </tr>
        <tr>
          <td>Friday</td>
          <td>9am - 5pm</td>
        </tr>
        <tr>
          <td>Saturday</td>
          <td>Closed</td>
        </tr>
        <tr>
          <td>Sunday</td>
          <td>Closed</td>
        </tr>
      </table>
    </div>
    <div className="hours-box">
      <h2 className="hours-table-header">Technicians' hours</h2>
      <table className="hours-table">
        <tr>
          <td>Monday</td>
          <td>9am - 5pm</td>
        </tr>
        <tr>
          <td>Tuesday</td>
          <td>9am - 5pm</td>
        </tr>
        <tr>
          <td>Wednesday</td>
          <td>9am - 5pm</td>
        </tr>
        <tr>
          <td>Thursday</td>
          <td>9am - 5pm</td>
        </tr>
        <tr>
          <td>Friday</td>
          <td>9am - 5pm</td>
        </tr>
        <tr>
          <td>Saturday</td>
          <td>9am - 5pm</td>
        </tr>
        <tr>
          <td>Sunday</td>
          <td>9am - 5pm</td>
        </tr>
      </table>
    </div>
  </div>
};

export default Hours;
