import React, { Component } from 'react'
import { Consumer } from '../../context'
import Spinner from '../Spinner';
import Track from './Track';

class Tracks extends Component {
render() {
    return (
        <Consumer>
            {value => {
                const { track_list, heading } = value
                if(track_list === undefined || track_list.length === 0){
                    return <Spinner/>
                }else{
                    return <React.Fragment>
                            <h2 className='text-center mb-3'>{heading}</h2>
                                <div className='row'>
                                    {
                                        track_list.map(track => {
                                            return <Track data={track} key={track.track.lyrics_id}/>
                                        })
                                    }
                                </div>
                            </React.Fragment>
                }
            }}
        </Consumer>
    )
  }
}
export default Tracks