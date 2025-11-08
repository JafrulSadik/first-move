import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'

export default function ContactUsMap({ latitude = 23.8041, longitude = 90.4125, zoom = 13 }) {
  return (
    <div className="h-46 mx-auto mb-5 w-[90%] overflow-hidden rounded-xl md:h-60 lg:mb-0 lg:h-96 lg:w-full lg:rounded-none">
      <MapContainer center={[latitude, longitude]} zoom={zoom} className="h-full w-full">
        <TileLayer
          attribution='&copy; <a href="https://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[latitude, longitude]}>
          <Popup>First Move Head Office</Popup>
        </Marker>
      </MapContainer>
    </div>
  )
}
