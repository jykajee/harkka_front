import React,{Component}from 'react';
import MuistiinpanoItem from './MuistiinpanoItem';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import './Muistiinpanot2.css';
import UusiMuistiinpanoModal from './UusiMuistiinpanoModal';
import PropTypes from 'prop-types';


class Muistiinpanot2 extends Component {
    constructor(props){
        super(props);
        this.apiOsoite = 'http://localhost:8080/api/muistiinpanot/';
        this.state = {
            muistiinp: [],
            modalShow: false
        };
        this.poista = this.poista.bind(this);
    }

    componentDidMount() {
        this.haeLista();                
    }

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

    lisaaMuistiinpano(muistiinpano){
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

    render() {
        let modalClose = () => {this.setState ({modalShow: false});
                                this.haeLista();}
        console.log(this.state.muistiinp);
        const {muistiinp} = this.state;
        return (
            <div>
                <h1>Lista</h1>
                <div className="row">
                    <ButtonToolbar>
                        <Button onClick={() => this.setState({modalShow: true})} >Lisää uusi</Button>   
                    </ButtonToolbar>
                </div>
                <div className="ListaItemit" comn>
                    {muistiinp.map(mp => <MuistiinpanoItem key={mp.id} mpProp={mp} funktio={this.poista} />)}
                </div>
                <UusiMuistiinpanoModal show={this.state.modalShow} onHide={modalClose} lisaaMP={this.lisaaMuistiinpano} />
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

export default Muistiinpanot2;