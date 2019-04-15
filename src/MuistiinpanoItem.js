import React,{Component}from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';


class MuistiinpanoItem extends Component{

    formatTimestamp(tStamp){
        let date = new Date(tStamp);
        let formattedTStamp = new Intl.DateTimeFormat('en-GB', {
            year:'numeric',
            month:'long',
            day: '2-digit'
    }).format(date);
        return formattedTStamp;
    }

    render(){
        const {id, otsikko, sisalto, luotu} = this.props.mpProp;
        const {delMuistiinpano} = this.props;
        return(
            <Card>
                <Card.Header>{id}</Card.Header>
                <Card.Body>
                    <Card.Title>{otsikko}</Card.Title>
                    <Card.Text>{sisalto}</Card.Text>
                    <Button variant="danger" onClick={() => delMuistiinpano(id)} >Poista</Button>
                </Card.Body>
                <Card.Footer className="text-muted">{this.formatTimestamp(luotu)}</Card.Footer>
            </Card>
        )
    }
}

export default MuistiinpanoItem;