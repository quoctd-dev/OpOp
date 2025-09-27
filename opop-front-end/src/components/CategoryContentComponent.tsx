import React, {CSSProperties} from 'react';
import {Card} from 'antd';

interface Card {
    id: number;
    title: string;
    img: string;
    color: CSSProperties;
}

const cardList: Card[] = [
    {
        id: 1,
        title: "Music",
        color: { backgroundColor: "rgb(230, 30, 50)" },
        img: "https://i.scdn.co/image/ab67fb8200005caf474a477debc822a3a45c5acb"
    },
    {
        id: 2,
        title: "Pop",
        color: { backgroundColor: "rgb(0, 100, 80)" },
        img: "https://i.scdn.co/image/ab6765630000ba8a81f07e1ead0317ee3c285bfa"
    },
    {
        id: 3,
        title: "K-pop",
        color: {backgroundColor: "rgb(132, 0, 231)"},
        img: "https://concerts.spotifycdn.com/images/live-events_category-image.jpg"
    },
    {id: 4, title: "R&B", color: {backgroundColor: "rgb(165, 103, 82)"}, img: "https://t.scdn.co/images/ea364e99656e46a096ea1df50f581efe"},
    {
        id: 5,
        title: "Rock",
        color: {backgroundColor: "rgb(30, 50, 100)"},
        img: "https://charts-images.scdn.co/assets/locale_en/regional/weekly/region_global_default.jpg"
    },
    {id: 6, title: "Rap", color: {backgroundColor: "rgb(220, 20, 140)"}, img: "https://i.scdn.co/image/ab67fb8200005cafa0bd564e3f63a4019a5242fb"},
];
const CategoryContentComponent: React.FC = () => (
    <div className="content">
        {cardList.map((card: Card) => (
            <div key={card.id} className="card" style={card.color}>
                <h3>{card.title}</h3>
                <img src={card.img} alt={"image"} className="img-card"></img>
            </div>
        ))}
    </div>
);

export default CategoryContentComponent;