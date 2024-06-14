import { useState, useEffect } from 'react'
import { Card } from './components/Card'
import { Rick } from './components/Rick'
import produtos from './constants/produtos.json'
import { api } from "./api/rmApi"
import style from './App.module.css'
import { Alert } from './components/Alert'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'

import 'leaflet/dist/leaflet.css';

import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css';

import "leaflet-defaulticon-compatibility";


function App() {
  const [show, setShow] = useState("")
  const [data, setData] = useState([])
  const [page, setPage] = useState("")
  const [name, setName] = useState("")
  const [alert, setAlert] = useState(false)
  const position = [-25.4249647, -49.2748779]           


  useEffect(() => {
    setAlert(false);
    api.get(`/character/?page=${page}&name=${name}`).then((response) => {
      if (!response.data.results) {
        console.log("Vazio")
      }
      setData(response.data.results)
    }).catch((error) => {
      if (error.response.status === 404) {
        setAlert(true);
      }
      console.error(error)
    })
  }, [page, name])

  return (
    <>
      <div className={style.wrapBtns}>
        <button onClick={() => setShow("prod")}>Produtos</button>
        <button onClick={() => setShow("api")}>API</button>
        <button onClick={() => setShow("map")}>Mapa</button>
      </div>
      <div className={style.wrapPage}>
        <h1>Exercícios de manutenção</h1>
        {show === "prod" &&
          <>
            <h2>Showroom de produtos</h2>
            <div className={style.mainBox}>
              {produtos.map((item) => {
                return (
                  <Card name={item.name} desc={item.desc} value={item.value} image={item.image} key={item.id} status={item.status} type={item.type} />
                )
              })}
            </div>
          </>
        }
        {show === "api" &&
          <>
            <h2>Rick and Morty API</h2>
            {alert && <Alert />}
            <div>
              <input type="text" placeholder="1/43" value={page} onChange={(event) => setPage(event.target.value)} />
            </div>
            <div>
              <input type="text" placeholder="Name" value={name} onChange={(event) => setName(event.target.value)} />
            </div>

            <div className={style.rickBox}>
              {data.map((item) => {
                return (
                  <div key={item.id}>
                    <Rick name={item.name} species={item.species} gender={item.gender} image={item.image} status={item.status} />
                    {/* <button onClick={() => {}}>Info</button> */}
                  </div>

                )
              })}
            </div>


          </>
        }
        {show === "map" &&
          <>
            <h2>Mapa</h2>

            <div>
              
              <MapContainer center={position} zoom={13} scrollWheelZoom={false} style={{width: "100%", height: "600px"}}>
                <TileLayer
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={position}>
                  <Popup>
                    <a href="https://maps.app.goo.gl/ZaXLuZiu1BRtxuJJA" target='_blank'>Abrir google maps</a>
                  </Popup>
                </Marker>
              </MapContainer>
              

            </div>
          </>
        }
      </div>
    </>
  )
}

export default App
