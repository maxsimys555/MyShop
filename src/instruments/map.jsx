import { useEffect, useRef, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import "../styles/map.css";
// --- Красивая пульсирующая метка магазина ---
const pulseIcon = L.divIcon({
  className: "pulse-marker",
  html: `<span class="pulse-dot"></span>`,
  iconSize: [24, 24],
  iconAnchor: [12, 12],
});

// --- Метка пользователя (ты) ---
const userIcon = L.divIcon({
  className: "user-marker",
  html: `<span class="user-dot"></span>`,
  iconSize: [16, 16],
  iconAnchor: [8, 8],
});

// Компонент для плавного перелёта карты
function FlyTo({ center, zoom = 16 }) {
  const map = useMap();
  useEffect(() => {
    if (center) map.flyTo(center, zoom, { duration: 0.8 });
  }, [center, zoom, map]);
  return null;
}

export default function ContactMap({
  shop={ lat: 49.54904523876993, lng: 25.594602841184518 },
  title = "Наш магазин",
  address = "вулиця Митрополита Шептицького, 1, Тернопіль"
}) {
  const [me, setMe] = useState(null);
  const [following, setFollowing] = useState(true);
  const watchIdRef = useRef(null);
  const mapRef = useRef(null);

  // Живая геопозиция
  useEffect(() => {
    if (!("geolocation" in navigator)) return;

    watchIdRef.current = navigator.geolocation.watchPosition(
      (pos) => {
        setMe({
          lat: pos.coords.latitude,
          lng: pos.coords.longitude,
        });
      },
      (err) => console.warn("Ошибка геолокации:", err),
      { enableHighAccuracy: true, maximumAge: 5000, timeout: 10000 }
    );

    return () => {
      if (watchIdRef.current) navigator.geolocation.clearWatch(watchIdRef.current);
    };
  }, []);

  // Кнопки управления
  const flyToShop = () => {
  setFollowing(false);
  const map = mapRef.current;
  if (map) map.flyTo([shop.lat, shop.lng], 16, { duration: 0.8 });
};

const flyToMe = () => {
  if (!me) return;
  setFollowing(true);
  const map = mapRef.current;
  if (map) map.flyTo([me.lat, me.lng], 16, { duration: 0.8 });
};

  return (
    <div className="contact-map-wrapper">
      <div className="map-header">
        <h3>Як нас знайти</h3>
        <div className="map-actions">
          <button onClick={flyToShop} className="map-btn">Магазин</button>
          <button onClick={flyToMe} className="map-btn" disabled={!me}>
            {me ? "Я тут" : "Очікуємо геолокацію…"}
          </button>
          <label className="follow-toggle">
            <input
              type="checkbox"
              checked={following}
              onChange={(e) => setFollowing(e.target.checked)}
              disabled={!me}
            />
            <span>Стежити за мною</span>
          </label>
        </div>
      </div>

      <MapContainer
        center={shop}
        zoom={15}
        scrollWheelZoom={true}
        className="contact-map"
        whenCreated={(mapInstance) => (mapRef.current = mapInstance)}
      >
        {/* Красивый фон карты (Carto light) */}
        <TileLayer
          attribution='&copy; OpenStreetMap, &copy; CARTO'
          url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
        />

        {/* Маркер магазина */}
        <Marker position={shop} icon={pulseIcon}>
          <Popup>
            <strong>{title}</strong>
            <br />
            {address}
          </Popup>
        </Marker>

        {/* Маркер пользователя */}
        {me && (
          <Marker position={me} icon={userIcon}>
            <Popup>Ви тут</Popup>
          </Marker>
        )}

        {/* Автоследование */}
        {following && me && <FlyTo center={me} zoom={16} />}
      </MapContainer>

      
    </div>
  );
}
