import React from 'react';
import './ListItem.css';
import danAbramovImage from '../../../assets/images/danabramov.jpg';

const ListItem = () => (
    <li className="listItemWrapper">
        <img src={danAbramovImage} />
        <div>
            <h2>Dan Abramov</h2>
            <p>Maker. Co-author of React Router. Working on @ReactTraining. Created @unpkg. Head over heels for @cari.</p>
            <button>Visit twitter page</button>
        </div>
    </li>
)

export default ListItem;