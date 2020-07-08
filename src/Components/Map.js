import React from 'react';
import MapGL, {NavigationControl, Marker, Popup} from 'react-map-gl';

const TOKEN = 'pk.eyJ1IjoiY292aWRtciIsImEiOiJjazhpdGZyZHUwNGRhM2dxbGM0anB6bnkyIn0.9CATpdfj1stFpdQpK4McIg';
const navStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    padding: '10px'
};

const markers = [
    {
        latitude: 18.08581,
        longitude: -15.9785,
        name: 'Nouakchot',
        infected: 5,
        cured: 2,
        deceased: 1,
        onTreatment: 2,
    },
    {
        latitude: 18.88333,
        longitude: -7.0,
        name: 'Hodh Ech Chargui',
        infected: 0,
        cured: 0,
        deceased: 0,
        onTreatment: 0,
    },
    {
        latitude: 16.0,
        longitude: -12.83333,
        name: 'Gorgol',
        infected: 1,
        cured: 0,
        deceased: 0,
        onTreatment: 1,
    },
    {
        latitude: 16.58333,
        longitude: -11.58333,
        name: 'Assaba',
        infected: 0,
        cured: 0,
        deceased: 0,
        onTreatment: 0,
    },
    {
        latitude: 17.2475638,
        longitude: -13.4037714,
        name: 'Brakna',
        infected: 0,
        cured: 0,
        deceased: 0,
        onTreatment: 0,
    },
    {
        latitude: 16.58333,
        longitude: -9.83333,
        name: 'Hodh El Gharbi',
        infected: 0,
        cured: 0,
        deceased: 0,
        onTreatment: 0,
    },
    {
        latitude: 17.922642,
        longitude: -14.8476017,
        name: 'Trarza',
        infected: 0,
        cured: 0,
        deceased: 0,
        onTreatment: 0,
    },
    {
        latitude: 15.3766896,
        longitude: -12.124663,
        name: 'Guidimaka',
        infected: 0,
        cured: 0,
        deceased: 0,
        onTreatment: 0,
    },
    {
        latitude: 20.8019537,
        longitude: -16.0012708,
        name: 'Dakhlet Nouadhibou',
        infected: 0,
        cured: 0,
        deceased: 0,
        onTreatment: 0,
    },
    {
        latitude: 18.5729893,
        longitude: -10.3937926,
        name: 'Tagant',
        infected: 0,
        cured: 0,
        deceased: 0,
        onTreatment: 0,
    },
    {
        latitude: 21.0090623,
        longitude: -10.2207449,
        name: 'Adrar',
        infected: 0,
        cured: 0,
        deceased: 0,
        onTreatment: 0,
    },
    {
        latitude: 24.1951392,
        longitude: -9.6664199,
        name: 'Tiris Zemmour',
        infected: 0,
        cured: 0,
        deceased: 0,
        onTreatment: 0,
    },
    {
        latitude: 20.06963539123535,
        longitude: -15.062479019165039,
        name: 'Inchiri',
        infected: 0,
        cured: 0,
        deceased: 0,
        onTreatment: 0,
    }
]


class Map extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            zoom: 4.6,
            viewport: {
                latitude: 21.0078589,
                longitude: -10.951734,
                zoom: 4.6,
                bearing: 0,
                pitch: 0,
                width: 500,
                height: 500,
            },
            popupInfo: null,
        };
        this.longitude = -15.9785;
        this.latitude = 18.08581;
    }

    renderPopup = (index, wilaya) => {
        return this.state.popupInfo && (
            <Popup
                tipSize={5}
                anchor='bottom-right'
                latitude={markers[index].latitude}
                longitude={markers[index].longitude}
                onClose={() => {this.setState({popupInfo: null}); this.zoomOut()}}
                closeOnClick={true} >
                <p className="text-xxsmall text-dark">
                    {markers[index].name} <br />
                    Infectés: {markers[index].infected} <br />
                    Guéris: {markers[index].cured} <br />
                    Décès: {markers[index].deceased} <br />
                    Sous traitement: {markers[index].onTreatment}
                </p>
                <p>{markers[index].infected}</p>
            </Popup>
        )
    }

    zoomIn = (markerLat, markerLon) => {
        let viewportCopy = JSON.parse(JSON.stringify(this.state.viewport));
        viewportCopy.zoom = 7;
        viewportCopy.latitude = markerLat;
        viewportCopy.longitude = markerLon;
        this.setState({viewport: viewportCopy});
    }

    zoomOut = () => {
        let viewportCopy = JSON.parse(JSON.stringify(this.state.viewport));
        viewportCopy.zoom = 4.6;
        this.setState({viewport: viewportCopy});
    }

    componentDidMount() {
        //this.renderPopup();
    }

    render() {
        const {viewport} = this.state;
        return(
            <div className="mt-5 text-center ml-auto mr-auto text-light "><br/>
                <h4>Carte interactive</h4>
                <div className=''>
                    <MapGL
                        {...viewport}
                        onViewportChange={(viewport) => this.setState({viewport})}
                        mapStyle='mapbox://styles/mapbox/dark-v10'
                        mapboxApiAccessToken={TOKEN} >
                        {/* {markers} */}
                        <div className="nav" style={navStyle}>
                            <NavigationControl onViewportChange={(viewport) => this.setState({viewport})} />
                            {markers.map((marker, index) => {
                                return (<div key={index}>
                                    
                                    <Marker latitude={marker.latitude} longitude={marker.longitude} >
                                    <img src={require('../Assets/logo.png')} width={10} onClick={() => {this.setState({popupInfo: true}); this.zoomIn(marker.latitude, marker.longitude)}} />                
                            </Marker>
                            {this.renderPopup(index, marker.name)}
                            </div>);
                            })}
                        
                        </div>
                    </MapGL>
                </div>
            </div>

        )
    }
}

export default Map;