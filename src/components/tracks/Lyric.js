import React, { Component } from 'react'
import axios from 'axios';
import Spinner from '../Spinner';
import { Link } from 'react-router-dom';
import Moment from 'react-moment'

class Lyric extends Component {
    state = {
        track: {},
        lyric: {}
    }
    componentDidMount() {
        axios.get(`https://cors-anywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/track.lyrics.get?track_id=${this.props.match.params.id}&apikey=${process.env.REACT_APP_MM_KEY}`)
        .then(res => {
            this.setState({ lyric: res.data.message.body.lyrics })

            return axios.get(`https://cors-anywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/track.get?track_id=${this.props.match.params.id}&apikey=${process.env.REACT_APP_MM_KEY}`)
            .then(res => {
                this.setState({
                    track: res.data.message.body.track
                })
            })
        }).catch(err => console.log(err))
    }
    render() {
        const {track, lyric} = this.state
        if(
            track === undefined ||
            lyric === undefined ||
            Object.keys(track).length === 0 ||
            Object.keys(lyric).length === 0
        ){
            return <Spinner/>
        }else{
            return <React.Fragment>
                <Link to='/'className='btn btn-dark btn-sm mb-4'>Go Back</Link>
                <div className='card'>
                    <div className='card-header'>
                        {track.track_name} by <span className='text-secondary'>{track.artist_name}</span>
                    </div>
                    <div className='card-body'>
                        <p className='card-text'>{lyric.lyrics_body}</p>
                    </div>
                </div>
                <ul className='mt-3 list-group'>
                    <li className='list-group-item'>
                        <strong>Music Genre: </strong>{track.primary_genres.music_genre_list[0].music_genre.music_genre_name}
                    </li>
                    <li className='list-group-item'>
                        <strong>Explicit Words: </strong>{track.explicit === 0 ? "No" : "Yes"}
                    </li>
                    <li className='list-group-item'>
                        <strong>Release Date: </strong><Moment format='DD-MM-YYYY'>{track.first_release_date}</Moment>
                    </li>
                </ul>
            </React.Fragment>
        }
  }
}
export default Lyric
