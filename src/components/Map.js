import React, {Component} from 'react';
import {withGoogleMap, GoogleMap} from 'react-google-maps';

class Map extends Component{
        render(){

            const GoogleMapExample = withGoogleMap(props =>(
                <GoogleMap
                     defaultCenter = { { lat: 40.7556818, lng: -73.8830701} }
                     defaultZoom = { 13 }
                >
                </GoogleMap>
            ));
            return(
                <div>
                    <GoogleMapExample
                    containerElement={ <div style={{ height: '500px', width:
                    '500px' }} /> }
                    mapElement={ <div style={{height:'100%'}}/>}
                    />
                </div>
            );
        }

};

export default Map;