import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import {Link} from "react-router-dom";
import {Avatar} from "antd";

interface ArtistCard {
    id: number;
    title: string;
    artist: string;
    img: string;
}

const cardList: ArtistCard[] = [
    { id: 1, title: "Music", artist: "SooBin", img: "https://i.scdn.co/image/ab67fb8200005caf474a477debc822a3a45c5acb" },
    { id: 2, title: "Pop", artist: "Hoàng Dũng", img: "https://i.scdn.co/image/ab6765630000ba8a81f07e1ead0317ee3c285bfa" },
    { id: 3, title: "K-pop", artist: "Sơn Tùng Mtp", img: "https://concerts.spotifycdn.com/images/live-events_category-image.jpg" },
    { id: 4, title: "R&B", artist: "Trúc Nhân", img: "https://t.scdn.co/images/ea364e99656e46a096ea1df50f581efe" },
    { id: 5, title: "Rock", artist: "Đen Vâu", img: "https://charts-images.scdn.co/assets/locale_en/regional/weekly/region_global_default.jpg" },
    { id: 6, title: "Rap", artist: "fifhy", img: "https://i.scdn.co/image/ab67fb8200005cafa0bd564e3f63a4019a5242fb" },
];

const SongListComponent: React.FC = () => {
    return (

        <div>
            <div className="name">
                <Link to={"/"}>
                    <h1>Trending songs</h1>
                </Link>
                <Link to={"/"}>
                    <h5>Show all</h5>
                </Link>
            </div>
            <div>
                <Swiper
                    spaceBetween={20}
                    slidesPerView={4} // hiển thị 4 card trên 1 dòng
                    autoplay={{delay: 3000}}
                >
                    {cardList.map((card: ArtistCard) => (
                        <SwiperSlide key={card.id}>
                            <div className="artist-card">
                                <div className="card-img">
                                    <img src={card.img} alt="image" className="img-artist"
                                    />
                                </div>
                                <h3 className="title-card-text">{card.title}</h3>
                                <h5 className="artist-card-text">{card.artist}</h5>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
};

export default SongListComponent;
