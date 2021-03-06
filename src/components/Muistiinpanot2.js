import React,{Component}from 'react';
import MuistiinpanoItem from './MuistiinpanoItem';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import Button from 'react-bootstrap/Button';
import './Muistiinpanot2.css';
import UusiMuistiinpanoModal from './UusiMuistiinpanoModal';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {fetchLista, postMuistiinpano, deleteMuistiinpano, toggleAddModal} from '../actions/actions';


class Muistiinpanot2 extends Component {
    constructor(props){
        super(props);
        this.apiOsoite = 'http://localhost:8080/api/muistiinpanot/';
        this.state = {
            //muistiinp: [],
            //modalShow: false
        };
        //this.poista = this.poista.bind(this);
    }

    componentWillMount = () => {
        this.props.fetchLista();
    }

    /*
    haeLista(){
        fetch(this.apiOsoite, {method:'GET'})
        .then(results => {
            return results.json();
        })
        .then(parsedData => {
            this.setState({muistiinp: parsedData});
                return parsedData;
        }) 
    }
    */
    /*
    poista(id) {
        let osoite = this.apiOsoite + id;
        fetch(osoite, {
            method: 'DELETE',
            headers: {'Content-Type': 'application/json'}
        }).then(response => {
            console.log('Server response after delete: ',response);
        })
        //POISTETAAN ELEMENTTI STATESTA
        console.log(this);
        var array = [...this.state.muistiinp];
        var index = -1;
        for (let i = 0; i < array.length; i++){
            if (id === array[i].id){ // TÄSSÄ HÄIKKÄÄ
                index = i;
                console.log('löydettiin poistettavan alkion(id): '+id+' ja index: '+index);
                break;
            }
        }
        if (index !== -1){
        array.splice(index, 1);
        }
        else
         console.log('jotain meni pieleen poistettavan alkion indeksin haussa');
        this.setState({muistiinp: array});
        //.then(res => console.log(res))
    }
    /*

    lisaaMuistiinpano(muistiinpano){

        /*
        console.log("tämä on muistiinpano jota lähetetään serverille -------->",JSON.stringify(muistiinpano));
        let muistiinpanoJson = JSON.stringify(muistiinpano);
        let request = {
            method:"POST",
            type:"cors",
            headers:{"Content-type":"application/json"},
            body:JSON.stringify(muistiinpano)
        }
        fetch('http://localhost:8080/api/muistiinpanot/',request
        ).then(results =>{
            console.log(results);
        })
        
    }
    */

    render() {
        let modalClose = () => {this.props.toggleAddModal();
                                this.props.fetchLista();}
        console.log(this.state.muistiinp);
        return (
            <div>
                <h1 className="Otsikko">Lista</h1>
                <div className="row">
                    <ButtonToolbar>
                        <Button onClick={() => this.props.toggleAddModal()} >Lisää uusi</Button>   
                        <Button onClick={() => this.props.fetchLista()} >Refresh</Button>
                    </ButtonToolbar>
                </div>
                <div className="ListaItemit" comn>
                    {(!this.props.modalShow && !this.props.loading) ?
                        this.props.muistiinpanot.map(mp => <MuistiinpanoItem key={mp.id} mpProp={mp} delMuistiinpano={ () => this.props.deleteMuistiinpano(mp.id)} />)
                        : <p>LOADING...</p>}
                </div>
                <UusiMuistiinpanoModal show={this.props.modalShow} onHide={modalClose} lisaaMP={this.props.postMuistiinpano} />
            </div>
        )
    }
}


Muistiinpanot2.propTypes = {
    muistiinpanot: PropTypes.arrayOf(PropTypes.shape({
        otsikko: PropTypes.string.isRequired,
        sisalto: PropTypes.string.isRequired
    }).isRequired).isRequired,
    modalShow: PropTypes.bool.isRequired
}

const mapStateToProps = (state) => {
    return {muistiinpanot: state.muistiinpanoLista.muistiinpanot,
            modalShow: state.muistiinpanoLista.adding,
            loading: state.muistiinpanoLista.loading};
  }
  
export default connect(
    mapStateToProps,
    {
        fetchLista,
        postMuistiinpano,
        deleteMuistiinpano,
        toggleAddModal
    }
)(Muistiinpanot2);