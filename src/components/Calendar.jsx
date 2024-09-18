import React from "react";
import Event from "./Event";

const calendar = () => {
  return (
    <div className="Calendar">
    <table>
        <thead>
            <tr>
                <th></th>
                <th>Sunday</th>
                <th>Monday</th>
                <th>Tuesday</th>
                <th>Wednesday</th>
                <th>Thursday</th>
                <th>Friday</th>
                <th>Saturday</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td className="time">8 am</td>
                <Event event='Fancy Dinner 🎩' color ='green' location='Maple & Ash'/>
                <td></td>
                <td></td>
                <td></td>
                <Event event='Yolk 🍳' color ='green' location='Maple & Ash'/>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td className="time">9 am</td>
                <td></td>
                <Event event='Tren 🚊' color ='pink' location='Maple & Ash'/>
                <td></td>
                <td></td>
                <td></td>
                <Event event='Drink Coffee ☕️' color ='blue' location='Maple & Ash'/>
                <td></td>
            </tr>
            <tr>
                <td className="time">10 am</td>
                <td></td>
                <td></td>
                <Event event='Drink Coffee ☕️' color ='blue' location='Maple & Ash'/>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td className="time">11 am</td>
                <td></td>
                <td></td>
                <Event event='El Panecillo ⛪' color ='blue' location='Maple & Ash'/>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td className="time">12 pm</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <Event event='Play Soccer ⚽' color ='green' location='Maple & Ash'/>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td className="time">1 pm</td>
                <td></td>
                <td></td>
                <Event event='Guitar Sess 🎸' color ='blue' location='Maple & Ash'/>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td className="time">2 pm</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <Event event='Lunch at CDM 💛' color ='green' location='Maple & Ash'/>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td className="time">3 pm</td>
                <td></td>
                <td></td>
                <td></td>
                <Event event='Play Tennis 🥎' color ='pink' location='Maple & Ash'/>
                <td></td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td className="time">4 pm</td>
                <Event event='Cafe:La Tova ☕️' color ='green' location='Maple & Ash'/>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <Event event='Take the tram👍' color ='pink' location='Maple & Ash'/>
            </tr>
            <tr>
                <td className="time">5 pm</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <Event event='Drink Coffee ☕️' color ='pink' location='Maple & Ash'/>
                <td></td>
                <td></td>
            </tr>
        </tbody>
    </table>
    </div>
  )
}

export default calendar;
